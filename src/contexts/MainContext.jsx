import { createContext, useContext, useState } from "react";
import DatePicker from "../components/datepicker/DatePicker";
import TimePicker from "../components/timepicker/TimePicker";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [valueDatePicker, setValueDatePicker] = useState();
  const [valueTimePicker, setValueTimePicker] = useState();

  return (
    <MainContext.Provider
      value={{
        openDatePicker: setValueDatePicker,
        openTimePicker: setValueTimePicker,
      }}
    >
      <DatePicker data={valueDatePicker} onClose={() => setValueDatePicker()} />
      <TimePicker data={valueTimePicker} onClose={() => setValueTimePicker()} />
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
