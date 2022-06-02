import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../../utils/DateTime";
import Button from "../button/Button";
import {
  SBodyItem,
  SDetailBody,
  SDetailContainer,
  SDetailFooter,
} from "./Styles";

const DetailPemakaian = ({ data, onClose }) => {
  return (
    <>
      {data && (
        <SDetailContainer>
          <SDetailBody>
            <SBodyItem>
              <label>No SPJ</label>
              <div>{data.no_spj ? data.no_spj : "-"}</div>
            </SBodyItem>
            <SBodyItem>
              <label>Berangkat</label>
              <div>
                {formatDate(data.tgl_berangkat)}{" "}
                {formatTime(data.jam_berangkat)}
              </div>
            </SBodyItem>
            <SBodyItem>
              <label>Kembali</label>
              <div>
                {formatDate(data.tgl_kembali)} {formatTime(data.jam_kembali)}
              </div>
            </SBodyItem>
            <SBodyItem col={2}>
              <label>Tujuan</label>
              <div>{data.tujuan}</div>
            </SBodyItem>
            <SBodyItem col={2}>
              <label>Keperluan</label>
              <div>{data.keperluan}</div>
            </SBodyItem>
            <SBodyItem col={3} right="true">
              <label>Km Awal</label>
              <div>{data.km_awal}</div>
            </SBodyItem>
            <SBodyItem col={3} right="true">
              <label>Km Akhir</label>
              <div>{data.km_akhir}</div>
            </SBodyItem>
            <SBodyItem col={3} right="true">
              <label>Jumlah</label>
              <div>{data.km_pemakaian}</div>
            </SBodyItem>
          </SDetailBody>

          <SDetailFooter>
            <Button variant="warning">
              <Link to={`/pemakaian/edit/${data._id}`}>Ubah</Link>
            </Button>
            <Button variant="danger" onClick={onClose}>
              Tutup
            </Button>
          </SDetailFooter>
        </SDetailContainer>
      )}
    </>
  );
};

export default DetailPemakaian;
