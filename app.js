/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)

console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("=== Javascript Telah Terhubung ===");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const NAMA_KEDAI = "Kopi PSTI Kampus";
let NAMA_KASIR = "Bila";
let SHIFT_KERJA = "Pagi, Siang, Malam";
console.log("KEDAI : " + NAMA_KEDAI);
console.log("KASIR : " + NAMA_KASIR);
console.log("SHIFT : " + SHIFT_KERJA);


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

NAMA_KASIR = "Ami"
console.log("Kasir baru : " + NAMA_KASIR);


// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

alert("Selamat Datang di Kedai Kopi MUANTULL SYEDEP");
let NAMA_PELANGGAN = prompt("Masukkan Nama Kamu untuk Berlangganan");
if (NAMA_PELANGGAN) {
    alert("HALOO!!!, " + NAMA_PELANGGAN + " Yuk langsung pesan dan berlangganan");
} else{
    alert("Kamu tidak memasukkan nama, kamu disebut pelanggan setia");
    NAMA_PELANGGAN = "Pelanggan Setia";
    console.log("Pelanggan Setia" + NAMA_PELANGGAN);
}


// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

let POIN_KOPI = 75;
let POIN_MAKANAN = 65;
let POIN_MERCHANDISE = 55;
let JUMLAH_POIN = POIN_KOPI + POIN_MAKANAN + POIN_MERCHANDISE;


console.log("Nama Pelanggan : " + NAMA_PELANGGAN);
console.log("POIN_KOPI : " + POIN_KOPI);
console.log("POIN_MAKANAN : " + POIN_MAKANAN);
console.log("POIN_MERCHANDISE : " + POIN_MERCHANDISE);
console.log("Poin Kamuu Adalahhhh " + JUMLAH_POIN);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

let TIER_MEMBER = "";
let BENEFIT = "";

if(JUMLAH_POIN >= 100){
    TIER_MEMBER = "Platinum";
    BENEFIT = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (JUMLAH_POIN >= 70){
    TIER_MEMBER = "Gold";
    BENEFIT = "Diskon 10% di setiap transaksi";
} else if (JUMLAH_POIN >= 40){
    TIER_MEMBER = "Silver";
    BENEFIT = "Diskon 5% untuk menu minuman";
} else {
    TIER_MEMBER = "Bronze";
    BENEFIT = "Member Reguler (kumpulkan poin untuk naik tier)";
}

console.log("TIER_MEMBER : " + TIER_MEMBER);
console.log("BENEFIT : " + BENEFIT);
alert(
    "Hasil Poin : " + NAMA_PELANGGAN + "\n" +
    "Jumlah Poin : " + JUMLAH_POIN + "\n" +
    "Tier Member : " + TIER_MEMBER + "\n" +
    "Benefit : " + BENEFIT 
);


// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function HITUNG_POIN(poin1, poin2, poin3){
    let JUMLAH = poin1 + poin2 + poin3;
    return JUMLAH;
}


// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function TENTUKAN_TIERMEMBER(TIER_MEMBER){
    if (TIER_MEMBER >= 100) return "Platinum - Kerenn kamu dapat Diskon 20% + Gratis 1 Minuman Signature";
    if (TIER_MEMBER >= 90) return "Gold - WAWW kamu dapat Diskon 10% di setiap transaksi";
    if (TIER_MEMBER >= 40) return "Silver - Yey kamu dapat Diskon 5% untuk menu minuman";
    return "Bronze - Oups kamu Member Reguler (kumpulkan poin untuk naik tier)";
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let Poin_Pelanggan_A = HITUNG_POIN(70, 40, 20);
let TIERMEMBER_Pelanggan_A = TENTUKAN_TIERMEMBER(Poin_Pelanggan_A);
let Poin_Pelanggan_B = HITUNG_POIN(90, 100, 90);
let TIERMEMBER_Pelanggan_B = TENTUKAN_TIERMEMBER(Poin_Pelanggan_B);

console.log("Poin Pelanggan A : ");
console.log("Poinnya Adalah : " + Poin_Pelanggan_A);
console.log("Tier Membernya Adalah : " + TIERMEMBER_Pelanggan_A);

console.log("Poin Pelanggan B : ");
console.log("Poinnya Adalah : " + Poin_Pelanggan_B);
console.log("Tier Membernya Adalah : " + TIERMEMBER_Pelanggan_B);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let MENU_REKOMENDASI = [
    "Butterscoth Salt",
    "Italian Latte",
    "Matcha Frappe",
    "Matcha Ube Crumble",
    "Oreo Frappe"
];

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for (let i= 0; i < MENU_REKOMENDASI.length; i++){
    console.log((i + 1) + "." + MENU_REKOMENDASI[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("Jumlah Total Menu : " + MENU_REKOMENDASI.length);
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");