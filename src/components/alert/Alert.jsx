import { useEffect, useState } from "react";
import {
  HiX,
  HiOutlineXCircle,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { SAlert, SAlertClose, SAlertIcon, SAlertMsg } from "./Styles";

const Alert = ({ data, close, icon }) => {
  const [init, setInit] = useState();

  useEffect(() => {
    if (!data) return;
    const [type, msg] = data;
    setInit({ type, msg });
  }, [data]);

  return (
    <>
      {data && (
        <SAlert type={init?.type}>
          <SAlertClose onClick={close}>
            <HiX />
          </SAlertClose>
          <SAlertIcon>{icon[init?.type]}</SAlertIcon>
          <SAlertMsg>
            {Array.isArray(init?.msg) ? (
              init.msg.map((m, i) => <div key={i}>{m}</div>)
            ) : (
              <div>{init?.msg}</div>
            )}
          </SAlertMsg>
        </SAlert>
      )}
    </>
  );
};

export default Alert;

Alert.defaultProps = {
  icon: {
    danger: <HiOutlineXCircle />,
    success: <HiOutlineCheckCircle />,
    warning: <HiOutlineExclamationCircle />,
  },
};
