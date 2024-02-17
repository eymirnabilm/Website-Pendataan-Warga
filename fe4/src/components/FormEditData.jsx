import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Notification from "./Notification";

function FormEditData() {
  const [ktp, setKtp] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setalamat] = useState("");
  const [msg, setMsg] = useState(""); // Menyimpan pesan kesalahan atau sukses
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/EymirNabilMakarim_50421426_UJIAN/be/read_by_id.php/${id}`
        );

        // Inisialisasi nilai input dengan nilai dari server
        setKtp(response.data.data.ktp);
        setNama(response.data.data.nama);
        setalamat(response.data.data.alamat);
      } catch (error) {
        console.error("Error: " + error);
      }
    };
    getData();
  }, [id]);

  const updateMahasiswa = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost/EymirNabilMakarim_50421426_UJIAN/be/update.php/${id}`, {
        ktp: ktp,
        nama: nama,
        alamat: alamat,
      });
      setMsg("Data Berhasil Edit");
      setIsError(false);
    } catch (error) {
      if (error.response) {
        setMsg("Data Berhasil Edit");
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
          onSubmit={updateMahasiswa}
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
              value={ktp || ""} // Menambahkan nilai awal
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
              value={nama || ""} // Menambahkan nilai awal
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
              value={alamat || ""} // Menambahkan nilai awal
              onChange={(e) => setalamat(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEditData;
