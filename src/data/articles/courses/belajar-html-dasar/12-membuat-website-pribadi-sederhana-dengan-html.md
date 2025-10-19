---
slug: membuat-website-pribadi-sederhana-dengan-html
title: Membuat Website Pribadi Sederhana dengan HTML
description: Website pribadi adalah website yang menampilkan informasi-informasi pribadi seperti nama, biografi, pengalaman kerja
type: course
course: belajar-html-dasar
publishedAt: 2025-10-10 10:30:00 +0700
---

Setelah mempelajari struktur dasar HTML dan beberapa tag-tag dasar HTML, sekarang saatnya kita praktek mengaplikasikan pengetahuan tersebut dengan membuat sebuah website sederhana, yaitu website pribadi.

Website pribadi adalah website yang menampilkan informasi-informasi pribadi seperti nama, biografi, pengalaman kerja, dsb yang bisa digunakan sebagai CV, portofolio, biodata diri dsb.

Website pribadi yang akan dibuat akan terdiri dari beberapa bagian, yaitu:

1. Foto pribadi
2. Judul (Nama pribadi)
3. Biodata
4. Daftar keahlian / skills
5. Tabel pengalaman kerja
6. Daftar link kontak
7. Form kontak

Hasil akhir website akan seperti berikut:

![Hasil Akhir Website Pribadi](./images/12-membuat-website-pribadi-sederhana-dengan-html/hasil.png)

Agar lebih cantik, nanti juga akan diberikan cara untuk menambahkan style sederhana di akhir pembuatan website (opsional), hasilnya akan seperti berikut:

![Hasil Akhir Website Pribadi Dengan Style](./images/12-membuat-website-pribadi-sederhana-dengan-html/hasil-css.png)

Langsung saja berikut langkah-langkah pembuatannya:

## Membuat File HTML

Pertama, buat file HTML untuk website pribadi yang akan dibuat, beri nama misalnya `index.html`. Lalu buka dengan kode editor. Penjelasannya dapat dilihat di [cara membuat dan menjalankan file HTML](/courses/belajar-html-dasar/membuat-dan-menjalankan-html).

## Membuat Struktur Dasar

Buat struktur dasar HTML terlebih dahulu. Penjelasannya dapat dilihat di [cara membuat struktur dasar HTML](/courses/belajar-html-dasar/struktur-dasar-html).

Untuk teks di dalam `title` diisi dengan judul website, misalnya `Website Pribadi - Nama`.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <title>Website Pribadi - Andi Job</title>
</head>
<body>
    
</body>
</html>
```

## Menampilkan Foto Pribadi

Elemen pertama di website pribadi yang akan dibuat adalah foto pribadi.

Siapkan sebuah foto pribadi dan letakkan di folder yang sama dengan file HTML yang sudah dibuat sebelumnya, misal nama file fotonya `foto.png`.

Tampilkan foto tersebut ke halaman website dengan menambahkan tag `<img>` di dalam tag `<body>`, lalu masukkan nama file foto ke dalam atribut `src`.

```html
<img src="foto.png" alt="Foto Profil" width="100">
```

Baca disini untuk [cara menampilkan gambar di HTML](/courses/belajar-html-dasar/menampilkan-gambar-di-html)

## Membuat Judul (Nama Pribadi)

Tampilkan nama pribadi Anda di halaman website dalam bentuk judul (`heading`).

Buat tag `<h1>` dengan isi teks nama Anda.

```html
<h1>Andi Job</h1>
```

Baca disini untuk [cara membuat judul di HTML](/courses/belajar-html-dasar/membuat-judul-di-html)

## Membuat Biodata

Tampilkan biodata Anda di halaman website dalam bentuk paragraf.

Buat tag `<p>` dengan isi teks paragraf biodata Anda.

```html
<p>
  Halo! Saya <b>Andi Job</b>, seorang web developer dari kota Jakarta. Saya
  terbiasa membuat website menggunakan HTML, CSS dan Javascript.
</p>
```

> Anda boleh menambahkan lebih dari satu paragraf jika ingin biodata yang lebih panjang.

Baca disini untuk [cara membuat paragraf di HTML](/courses/belajar-html-dasar/membuat-paragraf-di-html)

## Membuat Daftar Keahlian / Skills

Tunjukan apa saja keahlian Anda di halaman website dalam bentuk daftar. Langkah-langkahnya:

1. Buat subjudul untuk menandai bagian daftar keahlian dengan tag `<h2>`, disii dengan teks subjudul "Skill".
2. Tambahkan paragraf singkat untuk pengantar sebelum menampilkan daftar keahlian dengan tag `<p>`.
3. Buat daftar keahlian dengan tag `<ul>`.
4. Di dalam tag `<ul>`, tampilkan daftar keahlian Anda, setiap keahlian dibuat dengan tag `<li>`.

```html
<h2>Skill</h2>
<p>Berikut daftar skill atau teknologi yang biasa saya gunakan:</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>Bootstrap</li>
  <li>Tailwind CSS</li>
  <li>Laravel</li>
  <li>MySQL</li>
</ul>
```

> Jika ingin daftarnya urut, maka ganti tag `<ul>` menjadi tag `<ol>`.

Baca disini untuk [cara membuat daftar di HTML](/courses/belajar-html-dasar/membuat-daftar-di-html)

## Membuat Tabel Pengalaman Kerja

Tampilkan pengalaman kerja anda di halaman website dalam bentuk tabel yang terstruktur. Langkah-langkahnya:

1. Buat subjudul untuk menandai bagian tabel pengalaman kerja dengan tag `<h2>`, disii dengan teks subjudul "Pengalaman Kerja".
2. Tambahkan paragraf singkat untuk pengantar sebelum menampilkan tabel pengalaman kerja dengan tag `<p>`.
3. Buat tabel pengalaman kerja dengan tag `<table>`.
4. Di dalam tabel, buat sebuah baris dengan tag `<tr>`, di dalam baris tersebut buat 3 buah kolom tabel dengan tag `<th>`. Kolom-kolomnya: tahun, perusahaan dan posisi.
5. Tampilkan pengalaman kerja anda di dalam tabel, setiap pengalaman kerja dibuat per baris dengan tag `<tr>`, di dalam baris tersebut buat 3 buah sel dengan tag `<td>`. Sel pertama diisi tahun kerja, sel kedua diisi nama perusahaan, sel ketiga diisi posisi jabatan.

```html
<h2>Pengalaman Kerja</h2>
<p>
  Saya telah bekerja di bidang web development selama lebih dari 3 tahun,
  berikut riwayat pengalaman kerja saya:
</p>
<table>
  <tr>
    <th>Tahun</th>
    <th>Perusahaan</th>
    <th>Posisi</th>
  </tr>
  <tr>
    <td>2020 - 2021</td>
    <td>PT Webgist Solution</td>
    <td>Junior Web Developer</td>
  </tr>
  <tr>
    <td>2021 - 2022</td>
    <td>PT Teknis Web House</td>
    <td>Senior Web Developer</td>
  </tr>
  <tr>
    <td>2022 - Sekarang</td>
    <td>GoJek</td>
    <td>Senior Web Developer di GoJek</td>
  </tr>
</table>
```

Baca disini untuk [cara membuat tabel di HTML](/courses/belajar-html-dasar/membuat-tabel-di-html)

## Membuat Daftar Link Kontak

Tampilkan link kontak anda di halaman website dalam bentuk daftar deskripsi. Langkah-langkahnya:

1. Buat subjudul untuk menandai bagian daftar link kontak dengan tag `<h2>`, disii dengan teks subjudul "Kontak".
2. Tambahkan paragraf singkat untuk pengantar sebelum menampilkan daftar link kontak dengan tag `<p>`.
3. Buat daftar link kontak dengan tag `<dl>`.
4. Di dalam tag `<dl>`, tampilkan daftar link kontak Anda, untuk setiap link kontak buat 2 tag, `<dt>` dan `<dd>`.
6. `<dt>` diisi nama kontaknya, misal email, facebook, dsb.
7. `<dd>` diisi didalamnya dengan link kontak, link kontak dibuat menggunakan tag `<a>` dengan atribut `href` berisi url link kontak, teksnya link diisi dengan nama link, misalnya username.

```html
<h2>Kontak</h2>
<p>Anda bisa menghubungi saya melalui link-link berikut ini:</p>
<dl>
  <dt>Email</dt>
  <dd>
    <a href="mailto:andijob@gmail.com">andijob@gmail.com</a>
  </dd>
  <dt>Facebook</dt>
  <dd>
    <a href="https://facebook.com/andijob">@andijob</a>
  </dd>
  <dt>Instagram</dt>
  <dd>
    <a href="https://instagram.com/andijob">@andijob</a>
  </dd>
</dl>
```

Baca disini untuk [cara membuat link di HTML](/courses/belajar-html-dasar/membuat-link-di-html)

## Membuat Form kontak

Terakhir, tampilkan form kontak di halaman website agar pengunjung bisa langsung menghubungi anda di website. Langkah-langkahnya:

1. Buat paragraf singkat untuk pengantar sebelum menampilkan form kontak dengan tag `<p>`.
2. Buat form kontak dengan tag `<form>`.
3. Buat input untuk mengisi email menggunakan tag `<label>` berisi teks "Email" dan tag `<input>` dengan atribut `type` berisi `email`.
4. Buat input untuk mengisi nama menggunakan tag `<label>` berisi teks "Nama" dan tag `<input>` dengan atribut `type` berisi `text`.
5. Buat input untuk mengisi subjek menggunakan tag `<label>` berisi teks "Subjek" dan tag `<input>` dengan atribut `type` berisi `text`.
6. Buat input untuk mengisi pesan menggunakan tag `<label>` berisi teks "Pesan" dan tag `<textarea>`.
7. Buat tombol untuk mengirim pesan form kontak menggunakan tag `<button>` dengan atribut `type` berisi `submit`, teksnya diisi dengan "Kirim Pesan".

```html
<p>Atau bisa hubungi saya langsung melalui form berikut:</p>
<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="andi@gmail.com" />
  <br />

  <label for="nama">Nama</label>
  <input type="text" id="nama" placeholder="Andi" />
  <br />

  <label for="subjek">Subjek</label>
  <input type="subjek" id="subjek" placeholder="Kerjasama" />
  <br />

  <label for="pesan">Pesan</label>
  <textarea
    id="pesan"
    rows="10"
    placeholder="Saya ingin mengajak kerjasama tentang..."
  ></textarea>
  <br />

  <button type="submit">Kirim Pesan</button>
</form>
```

Baca disini untuk [cara membuat form di HTML](/courses/belajar-html-dasar/membuat-form-di-html)

## Kode Akhir Lengkap

Berikut hasil akhir kode HTML dari semua langkah-langkah di atas:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <title>Website Pribadi - Andi Job</title>
</head>
<body>
  <img src="foto.png" alt="Foto Profil" width="100">
  <h1>Andi Job</h1>
  <p>
    Halo! Saya <b>Andi Job</b>, seorang web developer dari kota Jakarta. Saya
    terbiasa membuat website menggunakan HTML, CSS dan Javascript.
  </p>
  <h2>Skill</h2>
  <p>Berikut daftar skill atau teknologi yang biasa saya gunakan:</p>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Bootstrap</li>
    <li>Tailwind CSS</li>
    <li>Laravel</li>
    <li>MySQL</li>
  </ul>
  <h2>Pengalaman Kerja</h2>
  <p>
    Saya telah bekerja di bidang web development selama lebih dari 3 tahun,
    berikut riwayat pengalaman kerja saya:
  </p>
  <table>
    <tr>
      <th>Tahun</th>
      <th>Perusahaan</th>
      <th>Posisi</th>
    </tr>
    <tr>
      <td>2020 - 2021</td>
      <td>PT Webgist Solution</td>
      <td>Junior Web Developer</td>
    </tr>
    <tr>
      <td>2021 - 2022</td>
      <td>PT Teknis Web House</td>
      <td>Senior Web Developer</td>
    </tr>
    <tr>
      <td>2022 - Sekarang</td>
      <td>GoJek</td>
      <td>Senior Web Developer di GoJek</td>
    </tr>
  </table>
  <h2>Kontak</h2>
  <p>Anda bisa menghubungi saya melalui link-link berikut ini:</p>
  <dl>
    <dt>Email</dt>
    <dd>
      <a href="mailto:andijob@gmail.com">andijob@gmail.com</a>
    </dd>
    <dt>Facebook</dt>
    <dd>
      <a href="https://facebook.com/andijob">@andijob</a>
    </dd>
    <dt>Instagram</dt>
    <dd>
      <a href="https://instagram.com/andijob">@andijob</a>
    </dd>
  </dl>
  <p>Atau bisa hubungi saya langsung melalui form berikut:</p>
  <form>
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="andi@gmail.com" />
    <br />

    <label for="nama">Nama</label>
    <input type="text" id="nama" placeholder="Andi" />
    <br />

    <label for="subjek">Subjek</label>
    <input type="subjek" id="subjek" placeholder="Kerjasama" />
    <br />

    <label for="pesan">Pesan</label>
    <textarea
      id="pesan"
      rows="10"
      placeholder="Saya ingin mengajak kerjasama tentang..."
    ></textarea>
    <br />

    <button type="submit">Kirim Pesan</button>
  </form>
</body>
</html>
```

## Tampilan Hasil Akhir

Berikut tampilan hasil akhir setelah kode HTML lengkap dijalankan:

![Hasil Akhir Website Pribadi](./images/12-membuat-website-pribadi-sederhana-dengan-html/hasil.png)

## Menambahkan Style (Opsional)

Langkah ini opsional, jika ingin hasil websitenya lebih cantik, kita bisa memberikan style pada HTML dengan cara menambahkan CSS.

CSS adalah bahasa untuk memberikan style pada dokumen HTML. Untuk belajar cara menggunakan CSS di HTML, Anda bisa baca di panduan [Belajar CSS Dasar](/courses/belajar-css-dasar). 

Untuk menambahkan style pada website pribadi sebelumnya, tambahkan kode berikut di dalam tag `<head>`:

```html
<head>
  <link rel="stylesheet" href="style.css">
  <title>Website Pribadi - Andi Job</title>
</head>
```

Kemudian buat sebuah file dengan nama `style.css` di dalam folder yang sama dengan file HTML website pribadi. Isi dengan kode berikut:

```css
body {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 600px;
  padding: 60px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
img {
  border-radius: 100%;
}
table {
  width: 100%;
  border: 1px solid gray;
  border-collapse: collapse;
}
tr {
  border-bottom: 1px solid gray;
}
th, td {
  text-align: left;
  padding: 10px 15px;
}
th {
  background-color: gray;
  color: white;
}
dt {
  font-weight: bold;
  margin-top: 10px;
}
dd {
  margin: 0;
}
input, textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  border-radius: 4px;
  outline: none;
  border: 1px solid gray;
}
button {
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: 0;
  border-radius: 4px;
}
```

Simpan file tersebut, sekarang coba jalankan file HTML website pribadi, maka hasilnya akan tampil seperti berikut:

![Hasil Akhir Website Pribadi Dengan Style](./images/12-membuat-website-pribadi-sederhana-dengan-html/hasil-css.png)