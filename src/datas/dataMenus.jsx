import {} from "react";
import { HiHome, HiDocumentReport, HiDocumentAdd } from "react-icons/hi";

const dataMenus = () => {
  return [
    {
      label: "Beranda",
      to: "/",
      icon: <HiHome />,
    },
    {
      label: "Pemakaian",
      to: "/pemakaian",
      icon: <HiDocumentReport />,
    },
    {
      label: "Tambah Pemakaian",
      to: "/pemakaian/add",
      icon: <HiDocumentAdd />,
    },
  ];
};

export default dataMenus;
