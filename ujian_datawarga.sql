-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jan 2024 pada 07.12
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ujian_datawarga`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ujian_data`
--

CREATE TABLE `ujian_data` (
  `id` int(11) NOT NULL,
  `ktp` varchar(10) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `alamat` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `ujian_data`
--

INSERT INTO `ujian_data` (`id`, `ktp`, `nama`, `alamat`) VALUES
(1, '50421426', 'Eymir Nabil Makarim', 'Tenggiri'),
(2, '50421111', 'Mamat Purwanto', 'Tenggiri'),
(3, '50423333', 'Abdul Jafar', 'Tenggiri'),
(4, '50424444', 'Gernan Ilyas', 'Tenggiri'),
(5, '5042761', 'Hermansyah', 'Tenggiri');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ujian_data`
--
ALTER TABLE `ujian_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ujian_data`
--
ALTER TABLE `ujian_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
