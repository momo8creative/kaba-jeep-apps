import { useState } from "react";
import { formatDate, formatTime, getDateTimeAgo } from "../../utils/DateTime";
import DetailPemakaian from "../detailpemakaian/DetailPemakaian";
import {
  SListContainer,
  SListItem,
  SListItemButton,
  SListItemFooter,
  SListItemHeader,
} from "./Styles";

const ListPemakaian = ({ data }) => {
  const [detailData, setDetailData] = useState();

  return (
    <>
      <SListContainer>
        {data.map((d, i) => (
          <SListItem key={i}>
            <SListItemButton onClick={() => setDetailData(d)} />
            <SListItemHeader>
              <div>
                <div>
                  {formatDate(d.tgl_berangkat)} {formatTime(d.jam_berangkat)}
                </div>
                <div>
                  {formatDate(d.tgl_kembali)} {formatTime(d.jam_kembali)}
                </div>
              </div>
              <div>
                <label>KM Akhir</label>
                <div>{d.km_akhir}</div>
              </div>
            </SListItemHeader>
            <SListItemFooter>
              <div>Santoso, {getDateTimeAgo(d.timestamp)} lalu</div>
              <div>SPJ : {d.no_spj ? d.no_spj : "-"}</div>
            </SListItemFooter>
          </SListItem>
        ))}
      </SListContainer>

      <DetailPemakaian data={detailData} onClose={() => setDetailData()} />
    </>
  );
};

export default ListPemakaian;
