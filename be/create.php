<?php
header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON
// Mengizinkan permintaan dari domain React yang berjalan di http://localhost:3000
header('Access-Control-Allow-Origin: http://localhost:3000');
// Mengizinkan metode HTTP yang diizinkan
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// Mengizinkan header yang diizinkan
header('Access-Control-Allow-Headers: Content-Type, Authorization');
// Pastikan metode OPTIONS mendapatkan respons yang benar
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
header('Content-Type: application/json'); // Mengatur header untuk mengindikasikan bahwa respon adalah JSON
require('connection.php');

$response = array(); // Inisialisasi array respons

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ktp = $_POST['ktp'];
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];

    $sql = "INSERT INTO ujian_data (ktp, nama, alamat) VALUES ('$ktp', '$nama', '$alamat')";

    if (mysqli_query($koneksi, $sql)) {
        $response['status'] = 'success';
        $response['message'] = 'Data berhasil ditambahkan.';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error: ' . $sql . '<br>' . mysqli_error($koneksi);
    }
}

mysqli_close($koneksi);

echo json_encode($response); // Mengirimkan respon dalam format JSON
?>