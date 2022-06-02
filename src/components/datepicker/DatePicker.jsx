import { useEffect, useLayoutEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SBackdrop } from "../../styles/SBackdrop";
import { addZero, getArrTanggal, getFullMonth } from "../../utils/DateTime";
import {
  SBodyContentButton,
  SDateBody,
  SDateBodyContent,
  SDateBodyHeader,
  SDateContainer,
  SDateHeader,
  SHeaderButton,
} from "./Styles";

const DatePicker = ({ data, onClose }) => {
  const [init, setInit] = useState();
  const [arrTanggal, setArrTanggal] = useState();

  const handleChoose = (yyyy, mm, dd) => {
    let newDate = addZero(dd) + "/" + addZero(mm) + "/" + yyyy;
    data.cb(newDate);
    onClose();
  };

  const handlePlus = () => {
    setInit((c) => ({ ...c, ["mm"]: c["mm"] == 12 ? 1 : c["mm"] + 1 }));
  };
  const handleMinus = () => {
    setInit((c) => ({ ...c, ["mm"]: c["mm"] == 1 ? 12 : c["mm"] - 1 }));
  };

  useLayoutEffect(() => {
    if (!data) return;

    let arr = data.value.split("/");
    let setDay = {
      dd: Number(arr[0]),
      mm: Number(arr[1]),
      yyyy: Number(arr[2]),
    };

    setInit(setDay);
  }, [data]);

  useEffect(() => {
    if (!init) return;
    // console.log(init);
    setArrTanggal(getArrTanggal(init));
  }, [init]);

  return (
    <>
      {data && (
        <>
          <SBackdrop />
          <SDateContainer>
            <SDateHeader>
              <SHeaderButton onClick={handleMinus}>
                <HiChevronLeft />
              </SHeaderButton>
              <div>
                <div>{getFullMonth(init?.mm)}</div>
                <div>{init?.yyyy}</div>
              </div>
              <SHeaderButton onClick={handlePlus}>
                <HiChevronRight />
              </SHeaderButton>
            </SDateHeader>
            <SDateBody>
              <SDateBodyHeader>
                {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
              </SDateBodyHeader>
              <SDateBodyContent>
                {arrTanggal?.map((tgl, i) => (
                  <SBodyContentButton
                    key={i}
                    active={tgl.active}
                    onClick={() => handleChoose(tgl.yyyy, tgl.mm, tgl.dd)}
                  >
                    {tgl.dd}
                  </SBodyContentButton>
                ))}
              </SDateBodyContent>
            </SDateBody>
          </SDateContainer>
        </>
      )}
    </>
  );
};

export default DatePicker;
