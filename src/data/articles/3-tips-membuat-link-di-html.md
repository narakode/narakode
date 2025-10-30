---
title: 3 Tips Membuat Link di HTML
description: Link adalah elemen di website untuk menghubungkan halaman website ke halaman lain atau website lain.
category: html
thumbnail: './images/3-tips-membuat-link-html.png'
type: article
publishedAt: 2026-10-30 13:20:00 +0700
---

Link adalah elemen di website untuk menghubungkan halaman website ke halaman lain atau website lain.

Link umumnya berbentuk teks yang ketika diklik browser akan mengarahkan halaman ke tujuan link tersebut.

Ketika membuat link, ada beberapa hal yang harus diperhatikan, misalnya teks dalam link. Teks dalam link harus dibuat **singkat** dan **deskriptif** supaya pengunjung dapat dengan mudah mengetahui apa yang ada di dalam link tersebut.

Bahkan membuat link dengan cara yang sembarangan bisa menimbulkan isu keamanan seperti phishing.

Untuk lebih jelasnya, berikut tiga tips membuat link di website:

## 1. Pastikan Link Memiliki Teks yang Deskriptif

Teks pada link harus bisa mendeksripsikan tujuan link tersebut.

Contoh link yang teksnya tidak deskriptif:

```html
Ingin menjadi member? <a href="https://website.com/daftar">Klik di sini</a>.
```

Teks `klik di sini` tidak mendeskripsikan halaman yang akan dibuka dari linknya. Pengunjung dan mesin pencari tidak tahu teks tersebut adalah link untuk membuka halaman pendaftaran.

Contoh link yang teksnya deskriptif:

```html
Ingin menjadi member? <a href="https://website.com/daftar">Daftar sekarang</a>.
```

Teks `daftar sekarang` mendeskripsikan linknya dengan baik, sehingga pengunjung dan mesin pencari tahu bahwa link tersebut adalah untuk membuka halaman pendaftaran.

## 2. Jangan Membuat Teks Link yang Terlalu Panjang

Teks pada link harus dibuat sesingkat mungkin.

Contoh link yang teksnya terlalu panjang:

```html
<a href="https://news.google.com/narakode">Cek berita dan artikel yg lain di Google News</a>
dan
<a href="https://whatsapp.com/channels/narakode">ikuti WhatsApp Channel kami</a>
```

Kedua teks link di atas teralu panjang yang menyebabkan susah untuk memahami deksripsi linknya, padahal untuk mendeskripsikan linknya tidak perlu teks sepanjang itu.

Contoh link yang teksnya singkat:

```html
Cek berita dan artikel yg lain di <a href="https://news.google.com/narakode">Google News</a>
dan ikuti <a href="https://whatsapp.com/channels/narakode">WhatsApp Channel kami</a>
```

Karena linknya menuju ke halaman google news maka teksnya cukup "Google News" saja, tidak perlu satu kalimat penuh.

## 3. Jangan Sembarangan Membuat Link di Tab Baru

Link bisa otomatis dibuka di tab baru dengan atribut `target="_blank"`. Tetapi ini merupakan praktik yang buruk karena:

1. Memaksa pengunjung, tidak semua pengunjung ingin membuka setiap link di tab baru.
2. Halaman website yang dibuka di tab baru tidak akan memiliki tombol untuk kembali.
3. Bisa terjadi isu keamanan seperti phishing karena link yang dibuka bisa mengakses halaman sebelumnya.

Kalau memang terpaksa ingin menggunakan `target="_blank"` ada beberapa tips agar lebih aman dan nyaman:

1. Tambahkan teks keterangan bahwa link akan dibuka di tab baru.
2. Tambahkan atribut `rel="noopener"` atau `rel="noreferrer"` agar website yang dibuka tidak bisa mengakses halaman sebelumnya.

Contoh penggunaan `target="_blank"` yang benar:

```html
Untuk penjelasan lebih lanjut, tonton video
<a href="https://video.com/dsapdo" target="_blank" rel="noopener">cara membuat mobil (dibuka di tab baru)</a>
```

Dengan link tersebut, pengunjung tidak akan kaget ketika link dibuka di tab baru, dan website yang dibuka tidak akan bisa mengakses halaman sebelumnya.

---

## Kesimpulan

Ketika ingin membuat link di halaman website, pastikan lima hal berikut:

1. Teks harus deskriptif
2. Teks jangan terlalu panjang
3. Jangan gunakan `target="_blank"`
4. Jika terpaksa menggunakan `target="_blank"`, maka pastikan ada teks keterangan bahwa link akan dibuka di tab baru.
5. Jika terpaksa menggunakan `target="_blank"`, maka pastikan tambahkan atribut `rel="noopener"` atau `rel="noreferrer"`.