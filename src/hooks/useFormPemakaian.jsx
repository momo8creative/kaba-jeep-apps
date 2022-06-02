import { useLayoutEffect, useState } from "react";
import { getDateToday, getTimeToday } from "../utils/DateTime";

const useFormPemakaian = (data, callback) => {
  const [values, setValues] = useState();
  const [errors, setErrors] = useState();

  const resetForm = (form) => {
    for (let i = 0; i < form.length; i++) {
      form[i].value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
    resetForm(e.target);
  };

  const handleChange = (e) => {
    let name, value;
    if (e.target) {
      name = e.target.name;
      value = e.target.value;
    } else {
      name = e.name;
      value = e.value;
    }
    setValues((current) => ({ ...current, [name]: value }));
  };

  useLayoutEffect(() => {
    if (!data) return;
    let dataset = data;
    dataset.tgl_berangkat = getDateToday(data.tgl_berangkat);
    dataset.tgl_kembali = getDateToday(data.tgl_kembali);
    dataset.jam_berangkat = getTimeToday(data.jam_berangkat);
    dataset.jam_kembali = getTimeToday(data.jam_kembali);
    // console.log(dataset);
    setValues(dataset);
  }, [data]);

  return { values, errors, handleChange, handleSubmit };
};

export default useFormPemakaian;

useFormPemakaian.defaultProps = {
  data: {
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
