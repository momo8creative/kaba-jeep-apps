import { useState } from "react";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import Alert from "../../components/alert/Alert";
import FormAddPemakaian from "../../components/formaddpemakaian/FormAddPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";

const AddPemakaianPage = ({ defaultData }) => {
  const [alertValue, setAlertValue] = useState();
  const { pemakaianApi } = usePemakaianContext();

  const handleSubmit = (data) => {
    console.log("submit --> ", data);
    let result = pemakaianApi.post("PEMAKAIAN", data);

    if (result.error)
      return setAlertValue(["danger", ["Gagal !!!", result.message]]);
    setAlertValue(["success", ["Berhasil !!!", result.message]]);
  };

  return (
    <div>
      <SHeading>
        <HiOutlineDocumentAdd /> Tambah Pemakaian Baru
      </SHeading>

      <Alert data={alertValue} close={() => setAlertValue()} />

      <FormAddPemakaian data={defaultData} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddPemakaianPage;

AddPemakaianPage.defaultProps = {
  defaultData: {
    no_spj: "",
    tgl_berangkat: "",
    tgl_kembali: "",
    jam_berangkat: "",
    jam_kembali: "",
    tujuan: "",
    keperluan: "",
    km_awal: "",
    km_akhir: "",
    km_pemakaian: "",
  },
};
