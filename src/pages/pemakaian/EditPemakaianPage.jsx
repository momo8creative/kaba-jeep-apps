import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormAddPemakaian from "../../components/formaddpemakaian/FormAddPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";
import { formatDate, formatTime, getDateToday } from "../../utils/DateTime";

const EditPemakaianPage = () => {
  const param = useParams();
  const { pemakaianApi } = usePemakaianContext();
  const [dataPemakaian, setDataPemakaian] = useState();

  const getDataById = async () => {
    let result = await pemakaianApi.getById("PEMAKAIAN", { _id: param._id });
    if (result.error) console.log("errorrrrrrr");
    setDataPemakaian(result.data);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  useLayoutEffect(() => {
    getDataById();
  }, []);

  return (
    <>
      <SHeading>Ubah Pemakaian</SHeading>

      {dataPemakaian ? (
        <FormAddPemakaian data={dataPemakaian} onSubmit={handleSubmit} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default EditPemakaianPage;
