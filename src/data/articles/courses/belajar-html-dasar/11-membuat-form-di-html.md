---
slug: membuat-form-di-html
title: Membuat Form di HTML
description: Membuat Form di HTML
type: course
course: belajar-html-dasar
publishedAt: 2026-01-01 05:00:00 +0700
---

Form adalah elemen yang memungkinkan pengunjung untuk mengisi informasi ke halaman website. Contohnya form pendaftaran, login, kontak, pemesanan, dll.

## Cara Membuat Form di HTML

Form di HTML dapat dibuat dengan beberapa tag berikut:

1. `<form>` untuk membuat wadah form.
2. `<label>` untuk membuat label pada input.
3. `<input>` untuk membuat input.
4. `<select>` untuk membuat kotak pilihan.
5. `<option>` untuk membuat isi kotak pilihan.
6. `<textarea>` untuk membuat input multi baris.
7. `<button>` untuk membuat tombol.

Setiap `input`, `select` dan `textarea` biasanya memiliki label masing-masing.

Contoh:

```html
<h2>Form Pendaftaran</h2>
<form>
	<label for="nama">Nama Lengkap</label>
	<input id="nama" name="nama">
	<br>

	<label for="jurusan">Jurusan</label>
	<select id="jurusan" name="jurusan">
		<option value="informatika">Informatika</option>
		<option value="sistem_informasi">Sistem Informasi</option>
		<option value="teknik_komputer">Teknik Komputer</option>
	</select>
	<br>
	
	<label for="alamat">Alamat Lengkap</label>
	<textarea id="alamat" name="alamat"></textarea>
	<br>
	
	<button>Simpan</button>
</form>
```

Hasilnya:

## Membuat Input

Input di HTML adalah kotak yang bisa diisi dengan keyboard oleh pengguna. Input dibuat dengan tag `<input>`. Contoh:

```html
<input>
```

Hasilnya:

Tag input tidak membutuhkan tag penutup, cukup ditulis tag pembukanya saja.

Tag input ada beberapa jenis. Setiap jenis memiliki fungsi dan tampilan yang berbeda-beda. Berikut jenis-jenis tag input:

### Membuat Input Teks, Angka dan Email

### Membuat Input Tanggal

### Membuat Input File

### Membuat Input Centang

### Membuat Input Radio

## Membuat Kotak Pilihan

## Membuat Input Multi Baris

## Membuat Label Pada Input

## Membuat Tombol
