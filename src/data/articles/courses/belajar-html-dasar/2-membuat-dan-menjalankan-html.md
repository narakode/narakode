---
slug: membuat-dan-menjalankan-html
title: Membuat dan Menjalankan Dokumen HTML
description: Ada dua aplikasi yang perlu diinstal untuk membuat dan menjalankan dokumen HTML, yaitu kode editor dan browser.
type: course
course: belajar-html-dasar
publishedAt: 2025-09-26 10:00:00 +0700
---

Di sini kita akan belajar cara membuat dan menjalankan dokumen HTML. Ada dua aplikasi yang perlu diinstal untuk melakukan keduanya, yaitu kode editor dan browser.

## Instal Kode Editor

Kode editor adalah aplikasi yang digunakan untuk menulis kode, termasuk kode HTML. Kode editor memiliki banyak fitur yang memudahkan untuk menulis kode HTML, di antaranya:

1. *Syntax Highlighting*, fitur yang memberikan warna pada kode HTML sesuai jenisnya sehingga kode HTML menjadi lebih mudah dibaca.
2. *Autocomplete*, fitur yang memberikan bantuan berupa opsi yang bisa dipilih untuk melengkapi kode HTML yang sedang ditulis.
3. Dan masih banyak fitur lainnya.

Kode editor yang akan diinstal di sini adalah *Visual Studio Code* atau *VS Code*. VS Code adalah kode editor gratis yang paling populer di dunia.

Secara default, VS Code sudah mendukung untuk penulisan kode HTML, jadi tidak perlu instal aplikasi tambahan lainnya untuk menulis kode HTML di VS Code.

VS Code dapat diinstal di Linux, Windows, dan Mac. Di sini akan dipandu untuk instalasi VS Code di Linux dan Windows.

### Instal VS Code di Linux

Jika Anda menggunakan Linux berbasis Debian atau Ubuntu, download file installer VS Code untuk Linux (`.deb`) di [halaman download VS Code](https://code.visualstudio.com/download).

Kemudian instal file installer tersebut di terminal dengan perintah berikut.

```bash
sudo apt install ./<file installer>.deb
```

Untuk Linux selain Debian dan Ubuntu, panduannya bisa dilihat di [dokumentasi instalasi VS Code untuk Linux](https://code.visualstudio.com/docs/setup/linux).

### Instal VS Code di Windows

Download file installer VS Code untuk Windows di [halaman download VS Code](https://code.visualstudio.com/download). Kemudian jalankan installer tersebut sampai selesai.

### Instal VS Code di Mac

Panduan instal VS Code di mac bisa dilihat di [dokumentasi instalasi VS Code untuk Mac](https://code.visualstudio.com/docs/setup/mac).

## Instal Browser

Browser adalah aplikasi yang digunakan untuk menampilkan halaman website. Browser dibutuhkan untuk menjalankan kode HTML agar tahu hasil kodenya seperti apa dalam bentuk halaman website.

Anda bisa menggunakan browser yang sudah terinstal di perangkat Anda, seperti Google Chrome, Microsoft Edge, Firefox, Safari, dll. Tidak perlu menginstal browser khusus.

## Membuat Dokumen HTML

Pertama, buka aplikasi kode editor VS Code.

Kemudian tekan `ctrl + n` untuk membuat file baru. Akan muncul sebuah tab editor yang di editor tersebut bisa ditulis sesuatu menggunakan keyboard.

Masukkan kode berikut di editor tersebut.

```html
<h1>
    Test Dokumen HTML
</h1>
```

Tekan `ctrl + s` untuk menyimpan file dokumen HTML. Nama file-nya bisa apa saja, extensinya harus `.html`, folder penyimpanannya bebas di mana saja.

Jika sudah tersimpan maka pada editor akan tampil nama file dokumen HTML.

Setiap kali mengubah isi file HTML, jangan lupa untuk menyimpan file tersebut dengan `ctrl + s`. Ketika ada perubahan yang belum disimpan akan ada tanda bulat putih di sebelah nama file, ketika sudah disimpan tanda tersebut akan hilang.

Untuk membuka file dokumen HTML lain, tekan `ctrl + o` lalu pilih file HTML yang akan dibuka. 

## Menjalankan Dokumen HTML

Pertama buka browser, kemudian buat tab baru.

Tekan `ctrl + o`, lalu pilih file dokumen HTML yang ingin dijalankan di browser. Setelah dipilih, browser akan menjalankan dokumen HTML dalam bentuk halaman website.

Setiap kali mengubah isi file HTML, jangan lupa untuk merefresh tab untuk melihat hasil perubahan dokumen HTML.