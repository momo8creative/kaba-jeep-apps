import { useLayoutEffect, useState } from "react";

const useForm = (data, callback) => {
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});

  useLayoutEffect(() => {
    if (!data) return;
    // console.log(data);
    setValues(data);
  }, [data]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback(values);
    } else {
      alert("There is an Error!");
    }
  };

  const omit = (name) => {
    if (errors[name] == undefined) return errors;
    delete errors[name];
    return errors;
  };

  const validate = (event, name, value) => {
    let validity = event.target.validity;
    switch (name) {
      case "tgl_berangkat":
        if (validity.valueMissing) {
          setErrors({ ...errors, tgl_berangkat: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("tgl_berangkat");
          setErrors(newObj);
        }
        break;

      case "jam_berangkat":
        if (validity.valueMissing) {
          setErrors({ ...errors, jam_berangkat: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("jam_berangkat");
          setErrors(newObj);
        }
        break;

      case "tgl_kembali":
        if (validity.valueMissing) {
          setErrors({ ...errors, tgl_kembali: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("tgl_kembali");
          setErrors(newObj);
        }
        break;

      case "jam_kembali":
        if (validity.valueMissing) {
          setErrors({ ...errors, jam_kembali: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("jam_kembali");
          setErrors(newObj);
        }
        break;

      case "tujuan":
        if (validity.valueMissing) {
          setErrors({ ...errors, tujuan: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("tujuan");
          setErrors(newObj);
        }
        break;

      case "keperluan":
        if (validity.valueMissing) {
          setErrors({ ...errors, keperluan: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("keperluan");
          setErrors(newObj);
        }
        break;

      case "km_awal":
        console.log(validity);
        if (validity.valueMissing) {
          setErrors({ ...errors, km_awal: "Tidak boleh kosong!" });
        } else {
          let newObj = omit("km_awal");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    let name, value;
    if (e.target) {
      e.persist();
      name = e.target.name;
      value = e.target.value;
      validate(e, name, value);
    } else {
      name = e.id;
      value = e.value;
    }
    setValues((current) => ({ ...current, [name]: value }));
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
