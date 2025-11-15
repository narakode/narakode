---
title: 4 Tips Membuat Heading di HTML
description: Heading adalah elemen untuk menampilkan judul dan subjudul di halaman website. Fungsi heading adalah untuk mengorganisir informasi yang ada di halaman website
category: html
thumbnail: './images/4-tips-membuat-heading-html.png'
type: article
publishedAt: 2025-10-13 13:50:00 +0700
---

Heading adalah elemen untuk menampilkan judul dan subjudul di halaman website. Fungsi heading adalah untuk mengorganisir informasi yang ada di halaman website, sehingga memudahkan pengunjung, mesin pencari, dan *screen reader* dalam memahami isi halaman tersebut.

Ada dua jenis heading, yaitu:

1. Heading Utama, yaitu judul yang memberikan gambaran tentang keseluruhan isi pada halaman website. Dibuat dengan tag HTML Heading level 1 (`<h1>`)
2. Subheading, yaitu judul yang berada di bawah judul utama atau judul lain. Fungsinya untuk memberikan gambaran tentang isi pada bagian tertentu di halaman website. Dibuat dengan tag HTML heading level 2 s.d 6 (`<h2>` s.d `<h6>`).

Ada beberapa kesalahan-kesalahan yang sering dilakukan ketika membuat heading, yang dapat menyulitkan pengunjung dan mesin pencari dalam memahami isi website, dampaknya bisa membuat ranking website menjadi rendah di mesin pencari.

Untuk itu, ada beberapa tips ketika membuat heading di halaman website, berikut di antaranya:

## Tips 1 : Urutkan Heading Dimulai dari Judul Utama (H1)

Jangan mulai heading dari level 2, 3, dst. Ini dapat menyebabkan mesin pencari menjadi lebih sulit dalam mengetahui judul utama halaman website, karena judul utama umumnya menggunakan heading level 1.

Contoh yang salah:

```html
<h2>Cara Membuat Nasi Goreng</h2>
<h3>Alat dan Bahan</h3>
<h3>Langkah-Langkah</h3>
```

Yang benar, buat heading dari judul utama terlebih dahulu (level 1), setelah itu baru dilanjutkan dengan heading level 2 - 6.

Contoh yang benar:

```html
<h1>Cara Membuat Nasi Goreng</h1>
<h2>Alat dan Bahan</h2>
<h2>Langkah-Langkah</h2>
```

## Tips 2 : Jangan Buat Heading yang Loncat-loncat Levelnya

Jangan membuat heading yang loncat-loncat levelnya, ini akan menyebabkan struktur isi informasi halaman website menjadi berantakan, karena subheading yang diloncati jadi kehilangan konteks heading yang satu level di atasnya.

Contoh yang salah:

```html
<h1>Cara Membuat Nasi Goreng</h1>
<h3>Alat dan Bahan</h3>
<h3>Langkah-Langkah</h3>
<h5>Langkah 1 : Masukkan Minyak</h5>
<h5>Langkah 2 : Masukkan Telur</h5>
```

Yang benar, seperti ini urutannya:

1. Buat heading dari judul utama terlebih dahulu (level 1).
2. Jika ada subjudul, setelah itu baru buat heading level 2.
3. Jika di dalam heading level 2 ada subjudul lagi, setelah itu baru buat heading level 3, dst sampai level 6.

Contoh yang benar:

```html
<h1>Cara Membuat Nasi Goreng</h1>
<h2>Alat dan Bahan</h2>
<h2>Langkah-Langkah</h2>
<h3>Langkah 1 : Masukkan Minyak</h3>
<h3>Langkah 2 : Masukkan Telur</h3>
```

## Tips 3 : Pastikan Hanya ada 1 Heading untuk Judul Utama (H1)

Heading level 1 (`<h1>`) hanya boleh ada satu saja di sebuah halaman website. Karena itu adalah judul utama, maka seharusnya hanya ada satu. Jika ada lebih dari satu maka akan menyebabkan mesin pencari menjadi bingung dalam menentukan judul utama di halaman tersebut.

Contoh yang salah:

```html
<h1>Cara Membuat Nasi Goreng</h1>
<h2>Alat dan Bahan</h2>
<h2>Langkah-Langkah</h2>
<h1>Tips Membuat Nasi Goreng</h1>
<h2>Tips 1 : xxx</h2>
<h2>Tips 2 : xxx</h2>
```

Contoh yang benar:

```html
<h1>Cara Membuat Nasi Goreng</h1>
<h2>Alat dan Bahan</h2>
<h2>Langkah-Langkah</h2>
<h2>Tips Membuat Nasi Goreng</h2>
<h3>Tips 1 : xxx</h3>
<h3>Tips 2 : xxx</h3>
```

## Tips 4 : Jangan Gunakan Heading Untuk Memperbesar / Memperkecil Teks

Heading biasanya ditampilkan dengan ukuran font yang tebal dan lebih besar dari teks biasa, sehingga terkadang ada yang menggunakan heading untuk memperbesar / memperkecil teks. Ini sebaiknya tidak dilakukan karena akan menyebabkan teks tersbut menjadi dinilai sebagai judul dan bisa merusak struktur informasi halaman tersebut.

Contoh yang salah:

```html
<article>
    <p>Harga Barang:</p>
    <h1>Rp 52.000</h1>
</article>
```

Untuk memperbesar / memperkecil teks gunakan css `font-size`.

Contoh yang benar:

```html
<article>
    <p>Harga Barang:</p>
    <p style="font-size: 36px;">Rp 52.000</p>
</article>
```

---

## Kesimpulan

Dari keempat tips membuat heading yang sudah dibahas di atas, dapat disimpulkan:

1. Ketika membuat heading di halaman website, pastikan dimulai dari level 1, kemudian urutannya tidak boleh loncat-loncat dan hanya boleh ada satu judul utama di halaman website.
2. Jangan gunakan heading untuk mengubah ukuran teks.

Penggunaan heading yang benar dan terstrukur akan mempermudah pengunjung dan mesin pencari dalam memahami isi website, hasilnya ranking website bisa menjadi naik di mesin pencari.