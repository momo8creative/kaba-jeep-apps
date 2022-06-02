import { useLayoutEffect } from "react";
import ListPemakaian from "../../components/listpemakaian/ListPemakaian";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import { SHeading } from "../../styles/SHeading";

const ViewPemakaianPage = () => {
  const { pemakaianApi, listPemakaian } = usePemakaianContext();

  useLayoutEffect(() => {
    console.log("rendering ViewPemakaianPage");
    pemakaianApi.get("PEMAKAIAN", {});
  }, []);

  return (
    <>
      <SHeading>Daftar Pemakaian</SHeading>

      {listPemakaian ? (
        <ListPemakaian data={listPemakaian} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default ViewPemakaianPage;
