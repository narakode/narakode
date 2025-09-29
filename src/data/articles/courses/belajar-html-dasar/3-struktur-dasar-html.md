---
slug: struktur-dasar-html
title: Struktur Dasar HTML
description: Struktur dasar HTML adalah elemen-elemen yang disusun untuk membuat sebuah dokumen HTML
type: course
course: belajar-html-dasar
publishedAt: 2025-09-26 12:00:00 +0700
---

Struktur dasar HTML adalah elemen-elemen yang disusun untuk membuat sebuah dokumen HTML. Struktur HTML penting ketika membuat dokumen HTML agar halaman website tidak berantakan secara tampilan di browser atau ketika diakses mesin pencari.

Struktur dasar HTML terdiri dari empat elemen, yaitu:

## 1. Doctype

Doctype adalah struktur HTML pertama yang fungsinya untuk mendeklarasikan tipe dokumen ini adalah HTML dan menentukan versinya.

Cara menuliskan doctype:

```html
<!DOCTYPE html>
```

Doctype wajib ada di awal dokumen HTML untuk memastikan browser menjalankan dokumen tersebut sebagai dokumen HTML dengan benar.

## 2. Tag Html

Setelah doctype, di bawahnya ada tag html. Fungsinya untuk mewadahi semua elemen HTML. Semua elemen HTML harus ditulis di dalam tag HTML.

Cara menuliskan tag html:

```html
<html lang="id">
</html>
```

Tag html juga digunakan untuk menentukan bahasa utama yang digunakan di website, yaitu melalui atribut "lang". Seperti pada kode di atas `lang="id"` artinya bahasa yang digunakan di website adalah "id", "id" adalah kode untuk bahasa indonesia.

## 3. Tag Head

Di dalam tag html, ada tag head. Fungsinya untuk menuliskan data-data seputar website yang dibutuhkan oleh mesin pencari dan browser. Misalnya judul website, deskripsi website, kode verifikasi website, dll.

Cara menuliskan tag head:

```html
<head>
    <title>Website Saya</title>
</html>
```

Semua elemen yang ditulis di dalam tag head tidak akan tampil di halaman website, sehingga pengunjung tidak akan melihatnya.

Di dalam tag head, minimal ada satu elemen, yaitu elemen `<title>` untuk menuliskan judul website.

Pada kode di atas teks "Website Saya" tidak akan tampil di halaman website, tapi akan dibaca browser dan ditampilkan sebagai nama tab. Mesin pencari seperti Google juga akan membacanya sebagai judul website.

## 4. Tag Body

Setalah tag head, di bawahnya ada tag body. Fungsinya untuk menempatkan semua elemen-elemen yang akan muncul di halaman website dan dapat dilihat oleh pengunjung.

Cara menuliskan tag body:

```html
<body>
    <h1>Sebuah judul</h1>
    <p>
        Sebuah paragraf 
    </p>
</body>
```

Semua elemen yang ingin ditampilkan di halaman website harus ditempatkan di dalam tag body.

## Struktur Dasar HTML Lengkap

Dari empat struktur di atas, disusun menjadi struktur dasar HTML yang lengkap. Berikut hasilnya:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Website Saya</title>
</head>
<body>
    
</body>
</html>
```

Di VS Code untuk membuat struktur ini, kita bisa menggunakan *shortcut* dengan mengetik tanda seru (`!`) lalu tekan tab / enter, maka VS Code akan membuatkan struktur HTML yang lengkap otomatis.