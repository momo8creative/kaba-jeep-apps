import { useLayoutEffect, useState } from "react";
import { SBackdrop } from "../../styles/SBackdrop";
import { addZero, getArrHour, getArrMinutes } from "../../utils/DateTime";
import Button from "../button/Button";
import { SBodySelect, STimeBody, STimeContainer } from "./Styles";

const TimePicker = ({ data, onClose }) => {
  const [init, setInit] = useState();
  const [listJam, setListJam] = useState(getArrHour());
  const [listMenit, setListMenit] = useState(getArrMinutes());

  const handleSubmit = (e) => {
    e.preventDefault();
    let hh = e.target.hh.value;
    let mm = e.target.mm.value;

    // console.log(hh, mm);
    data.cb(addZero(hh) + ":" + addZero(mm));
    onClose();
  };

  const handleChange = (e) => {
    setInit((c) => ({ ...c, [e.target.id]: e.target.value }));
  };

  useLayoutEffect(() => {
    // console.log("time picker ->", data);
    if (!data) return;

    let arr = data.value.split(":");
    setInit({
      hh: Number(arr[0]),
      mm: Number(arr[1]),
    });
  }, [data]);

  return (
    <>
      {data && (
        <>
          <SBackdrop />
          <STimeContainer onSubmit={handleSubmit}>
            <STimeBody>
              <SBodySelect
                name="hh"
                id="hh"
                value={init?.hh}
                onChange={handleChange}
              >
                {listJam.map((v, i) => (
                  <option value={v} key={i}>
                    {v}
                  </option>
                ))}
              </SBodySelect>
              <SBodySelect
                name="mm"
                id="mm"
                value={init?.mm}
                onChange={handleChange}
              >
                {listMenit.map((v, i) => (
                  <option value={v} key={i}>
                    {v}
                  </option>
                ))}
              </SBodySelect>
            </STimeBody>

            <Button variant="primary" type="submit">
              Pilih
            </Button>
          </STimeContainer>
        </>
      )}
    </>
  );
};

export default TimePicker;
