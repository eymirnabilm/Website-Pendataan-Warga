import React, { useState } from "react";
import axios from "axios";
import Notification from "./Notification";

function FormTambahData() {
  const [ktp, setKtp] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setalamat] = useState("");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);

  const saveMahasiswa = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("ktp", ktp);
    formData.append("nama", nama);
    formData.append("alamat", alamat);

    try {
      await axios.post("http://localhost/EymirNabilMakarim_50421426_UJIAN/be/create.php", formData);
      setMsg("Data Berhasil Ditambah");
      setIsError(false);
    } catch (error) {
      if (error.response) {
        setMsg("Data Gagal Ditambah");
        setIsError(true);
      }
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="z-999">
        <Notification message={msg} isError={isError} />
      </div>
      <div className="p-4 lg:w-1/2">
        <form
          onSubmit={saveMahasiswa}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ktp"
            >
              KTP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ktp"
              type="text"
              placeholder="ktp"
              value={ktp}
              onChange={(e) => setKtp(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="alamat"
            >
              Alamat
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alamat"
              type="text"
              placeholder="alamat"
              value={alamat}
              onChange={(e) => setalamat(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tambah Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormTambahData;
