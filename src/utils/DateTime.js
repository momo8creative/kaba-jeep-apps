const newDate = (d) => (d ? new Date(d) : new Date());

export const addZero = (d) => (d.toString().length > 1 ? d : "0" + d);

export const getDateTimeAgo = (date) => {
  let now = new Date();
  let current = new Date(date);
  let range = (now - current) / 1000;

  let menit = 60;
  let jam = menit * 60;
  let hari = jam * 24;
  let bulan = hari * 30;
  let tahun = bulan * 12;

  if (range / menit < 60) {
    return Math.floor(range / menit) + " menit";
  } else if (range / jam < 24) {
    return Math.floor(range / jam) + " jam";
  } else if (range / hari < 30) {
    return Math.floor(range / hari) + " hari";
  } else if (range / bulan < 30) {
    return Math.floor(range / bulan) + " bulan";
  } else {
    return Math.floor(range / tahun) + " tahun";
  }
};

export const formatDate = (date) => {
  let d = new Date(date);
  return (
    addZero(d.getDate()) +
    " " +
    getHalfMonth(d.getMonth() + 1) +
    " " +
    d.getFullYear()
  );
};

export const formatTime = (time) => {
  let d = new Date(time);
  return addZero(d.getHours()) + ":" + addZero(d.getMinutes());
};

export const getDateToday = (date) => {
  let d = date != "" ? new Date(date) : new Date();
  // console.log(d);
  return (
    addZero(d.getDate()) +
    "/" +
    addZero(d.getMonth() + 1) +
    "/" +
    d.getFullYear()
  );
};

export const getTimeToday = (time) => {
  let d = new Date(time);
  if (d == "Invalid Date") d = new Date();
  // console.log(d);
  let result = addZero(d.getHours()) + ":" + addZero(d.getMinutes());
  return result;
};

export const getHalfMonth = (m) => {
  let bulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ags",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  return m ? bulan[m - 1] : bulan;
};

export const getFullMonth = (m) => {
  let bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return m ? bulan[m - 1] : bulan;
};

export const getArrTanggal = (day) => {
  let array = [];
  let currentDay = new Date(day.yyyy, day.mm - 1, 1);

  let startWeek = currentDay.getDay();

  for (let i = 0; i < 35; i++) {
    let oneDay = 24 * 60 * 60 * 1000;
    let tgl = currentDay - oneDay * startWeek + oneDay * i;

    let dd = newDate(tgl).getDate();
    let mm = newDate(tgl).getMonth() + 1;
    let yyyy = newDate(tgl).getFullYear();
    let active = dd == day.dd && mm == day.mm ? true : false;

    array.push({
      active,
      dd,
      mm,
      yyyy,
    });
  }

  // console.log(array);
  return array;
};

export const getArrHour = () => {
  let arr = [];
  for (let i = 0; i < 24; i++) {
    arr.push(i);
  }
  return arr;
};

export const getArrMinutes = () => {
  let arr = [];
  for (let i = 0; i < 60; i++) {
    arr.push(i);
  }
  return arr;
};
