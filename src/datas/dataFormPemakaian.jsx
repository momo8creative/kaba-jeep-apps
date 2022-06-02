import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineBookmark,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi";

const dataFormPemakaian = ({ ref, handleClick, handleChange }) => {
  return [
    {
      title: "",
      field: [
        {
          label: "label",
          icon: <HiOutlineBookmark />,
          type: "text",
          name: "no_spj",
          helper: "Kosongi jika tidak ada!",
          placeholder: "Contoh : 01/X/2022",
          onChange: handleChange,
        },
      ],
    },

    {
      title: "Berangkat",
      field: [
        {
          label: "Tanggal",
          icon: <HiOutlineCalendar />,
          type: "text",
          name: "tgl_berangkat",
          required: true,
          readOnly: true,
          onChange: handleChange,
          onClick: handleClick.tgl,
        },
        {
          label: "Jam",
          icon: <HiOutlineClock />,
          type: "text",
          name: "jam_berangkat",
          readOnly: true,
          onChange: handleChange,
          onClick: handleClick.jam,
        },
      ],
    },

    {
      title: "Kembali",
      field: [
        {
          label: "Tanggal",
          icon: <HiOutlineCalendar />,
          type: "text",
          name: "tgl_kembali",
          readOnly: true,
          onChange: handleChange,
          onClick: handleClick.tgl,
        },
        {
          label: "Jam",
          icon: <HiOutlineClock />,
          type: "text",
          name: "jam_kembali",
          readOnly: true,
          onChange: handleChange,
          onClick: handleClick.jam,
        },
      ],
    },

    {
      title: "",
      field: [
        {
          label: "Tujuan",
          icon: <HiOutlineLocationMarker />,
          type: "text",
          name: "tujuan",
          required: true,
          onChange: handleChange,
        },
      ],
    },

    {
      title: "",
      field: [
        {
          label: "Keperluan",
          icon: <HiOutlineBriefcase />,
          type: "text",
          name: "keperluan",
          required: true,
          onChange: handleChange,
        },
      ],
    },

    {
      title: "Catatan Kilometer",
      field: [
        {
          label: "Awal",
          icon: <HiOutlineChartBar />,
          type: "number",
          name: "km_awal",
          placeholder: 0,
          min: 1,
          required: true,
          ref: ref.awal,
          onChange: handleChange,
        },
        {
          label: "Akhir",
          icon: <HiOutlineChartBar />,
          type: "number",
          name: "km_akhir",
          placeholder: 0,
          required: true,
          min: 1,
          ref: ref.akhir,
          onChange: handleChange,
        },
        {
          label: "Jumlah",
          icon: <HiOutlineChartBar />,
          type: "number",
          name: "km_pemakaian",
          placeholder: 0,
          required: true,
          min: 1,
          readOnly: true,
          ref: ref.pemakaian,
          onChange: handleChange,
        },
      ],
    },
  ];
};

export default dataFormPemakaian;
