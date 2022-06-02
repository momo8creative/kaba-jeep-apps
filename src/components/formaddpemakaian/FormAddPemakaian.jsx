import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMainContext } from "../../contexts/MainContext";
import dataFormPemakaian from "../../datas/dataFormPemakaian";
import useFormPemakaian from "../../hooks/useFormPemakaian";
import Button from "../button/Button";
import {
  SForm,
  SFormBody,
  SFormControl,
  SFormFooter,
  SFormGroup,
  SFormRowGroup,
  SFormRowTitle,
} from "./Styles";

const FormAddPemakaian = ({ data, onSubmit }) => {
  const [formFields, setFormFields] = useState();
  const { values, errors, handleChange, handleSubmit } = useFormPemakaian(
    data,
    onSubmit
  );
  const { openDatePicker, openTimePicker } = useMainContext();

  const km_awal = useRef();
  const km_akhir = useRef();
  const km_pemakaian = useRef();

  const handelOpenDatePicker = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    openDatePicker({
      value: value,
      cb: (data) => {
        handleChange({ name, value: data });
      },
    });
  };

  const handelOpenTimePicker = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    openTimePicker({
      value: value,
      cb: (data) => {
        handleChange({ name, value: data });
      },
    });
  };

  useLayoutEffect(() => {
    // console.log(values);
    setFormFields(
      dataFormPemakaian({
        ref: { awal: km_awal, akhir: km_akhir, pemakaian: km_pemakaian },
        handleClick: {
          tgl: handelOpenDatePicker,
          jam: handelOpenTimePicker,
        },
        handleChange: handleChange,
      })
    );
  }, []);

  const hitungPemakaian = () => {
    if (!values) return;
    let value = km_akhir.current.value - km_awal.current.value;
    handleChange({ name: "km_pemakaian", value: value });
  };

  useLayoutEffect(() => {
    hitungPemakaian();
  }, [values?.km_awal, values?.km_akhir]);

  return (
    <SForm onSubmit={handleSubmit}>
      <SFormBody>
        {formFields?.map(({ title, field }, i) => (
          <SFormRowGroup key={i}>
            {title && <SFormRowTitle>{title}</SFormRowTitle>}

            {field.map(({ label, icon, ...props }, j) => (
              <SFormGroup key={j}>
                {icon}
                <label>{label}</label>
                <SFormControl value={values[props.name]} {...props} />
              </SFormGroup>
            ))}
          </SFormRowGroup>
        ))}
      </SFormBody>

      <SFormFooter>
        <Button variant="primary" type="submit">
          Simpan
        </Button>
      </SFormFooter>
    </SForm>
  );
};

export default FormAddPemakaian;
