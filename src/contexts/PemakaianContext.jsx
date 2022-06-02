import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useEffect, useState } from "react";

const URL_API_PEMAKAIAN = import.meta.env.VITE_URL_API_PEMAKAIAN;

const PemakaianContext = createContext();
export const usePemakaianContext = () => useContext(PemakaianContext);

const PemakaianContextProvider = ({ children }) => {
  const [listPemakaian, setListPemakaian] = useState();

  const fetchApi = async (action, sheet, param) => {
    try {
      let time = new Date();

      const response = await axios.get(URL_API_PEMAKAIAN, {
        params: {
          action: action,
          sheet: sheet,
          param: JSON.stringify(param),
          time: time,
        },
      });

      return response.data;
    } catch (err) {
      return { error: true, msg: err.message };
    }
  };

  const pemakaianApi = {
    get: async (sheet, param) => {
      param["bulan"] = new Date().getMonth() + 1;
      param["tahun"] = new Date().getFullYear();
      let result = await fetchApi("read", sheet, param);
      if (!result.error) setListPemakaian(result.data);
      return result;
    },

    getById: async (sheet, param) => {
      let result = await fetchApi("read-by-id", sheet, param);
      return result;
    },
    post: async (sheet, param) => {
      param["_id"] = uuidv4();
      param["by"] = "Santoso";

      return await fetchApi("insert", sheet, param);
    },
  };

  useEffect(() => {
    if (listPemakaian) console.log(listPemakaian);
  }, [listPemakaian]);

  return (
    <PemakaianContext.Provider
      value={{ listPemakaian, setListPemakaian, pemakaianApi }}
    >
      {children}
    </PemakaianContext.Provider>
  );
};

export default PemakaianContextProvider;
