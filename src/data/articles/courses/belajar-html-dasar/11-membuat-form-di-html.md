---
slug: membuat-form-di-html
title: Membuat Form di HTML
description: Membuat Form di HTML
type: course
course: belajar-html-dasar
publishedAt: 2025-10-06 20:00:00 +0700
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
	<input id="nama">
	<br>

	<label for="jurusan">Jurusan</label>
	<select id="jurusan">
		<option>Informatika</option>
		<option>Sistem Informasi</option>
		<option>Teknik Komputer</option>
	</select>
	<br>
	
	<label for="alamat">Alamat Lengkap</label>
	<textarea id="alamat"></textarea>
	<br>
	
	<button>Simpan</button>
</form>
```

Hasilnya:

## Membuat Input

Input di HTML adalah kotak yang bisa diisi dengan keyboard oleh pengunjung. Input dibuat dengan tag `<input>`. Contoh:

```html
<input>
```

Hasilnya:

Tag input tidak membutuhkan tag penutup, cukup ditulis tag pembukanya saja.

Tag input ada beberapa jenis. Setiap jenis memiliki fungsi dan tampilan yang berbeda-beda. Jenis input ditentukan dengan menambahkan atribut `type` di tag `<input>`. 

Berikut jenis-jenis tag input:

### Membuat Input Teks, Angka dan Email

- Jenis input teks (`text`) adalah input yang pengunjung bisa memasukkan teks apa saja dari keyboard.
- Jenis input angka (`number`) adalah input yang pengunjung hanya bisa memasukkan angka dari keyboard.
- Jenis input email (`email`) adalah input yang pengunjung hanya bisa memasukkan teks berupa email dari keyboard.

Contoh:

```html
<input type="text">
<br>
<input type="number">
<br>
<input type="email">
```

Hasilnya:

Pada contoh di atas, input angka (`number`) ketika coba diketikkan huruf tidak akan masuk, karena hanya menerima input angka.

### Membuat Input Tanggal

Input tanggal dibuat dengan tag `<input>` dengan atribut `type` berisi `date`. Input tersebut ketika diklik akan memunculkan kalender yang bisa dipilih tanggal tertentu oleh pengguna. Contoh:

```html
<input type="date">
```

Hasilnya:

### Membuat Input File

Input juga bisa digunakan untuk memasukan file dari perangkat yang nantinya bisa digunakan misalnya untuk upload. Caranya dengan menambahkan atribut `type` berisi `file` pada tag `<input>`. Contoh:

```html
<input type="file">
```

Hasilnya, ketika input diklik akan memunculkan _file explorer_ untuk pengunjung file dari perangkat mereka:

### Membuat Input Checkbox (Centang)

Input checkbox (centang) adalah input berbentuk kotak yang bisa dicentang, biasnya terdiri dari beberapa pilihan yang pengunjung bisa mencentang lebih dari satu pilihan.

Input checkbox dibuat dengan tag `<input>` dengan atribut `type` berisi `checkbox`. Teks pada centangnya dibuat dengan tag `<label>`. Contoh:

```html
<h2>Ceklist Perlengkapan Kemah</h2>

<input type="checkbox" id="tenda">
<label for="tenda">Tenda</label>
<br>

<input type="checkbox" id="selimut">
<label for="selimut">Selimut</label>
<br>

<input type="checkbox" id="kompor">
<label for="kompor">Kompor</label>
```

Agar teks centang (`<label>`) dan kotak centang (`<input>`) dapat terhubung, tambahkan atribut `id` di `<input>` dan `for` di `<label>` dengan nilai yang sama. Penjelasan lebih lanjut akan dijelaskan di [membuat label pada input](#membuat-label-pada-input).

Hasil kode di atas:

### Membuat Input Radio

Input radio adalah input berbentuk lingkaran yang bisa dipilih, biasanya terdiri dari beberapa pilihan, pengunjung hanya bisa memilih satu pilihan saja.

Input radio dibuat dengan tag `<input>` dengan atribut `type` berisi `radio`. Teks pada pilihannya dibuat dengan tag `<label>`. Contoh:

```html
<h2>Jenis Kelamin</h2>

<input type="checkbox" id="laki-laki">
<label for="laki-laki">Laki-Laki</label>
<br>

<input type="checkbox" id="perempuan">
<label for="perempuan">Perempuan</label>
```

Agar teks pilihan (`<label>`) dan radio (`<input>`) dapat terhubung, tambahkan atribut `id` di `<input>` dan `for` di `<label>` dengan nilai yang sama. Penjelasan lebih lanjut akan dijelaskan di [membuat label pada input](#membuat-label-pada-input).

Hasil kode di atas:

## Membuat Select (Kotak Pilihan)

Select adalah elemen form yang digunakan untuk membuat kotak berisi beberapa pilihan yang bisa dipilih oleh pengunjung.

Select biasa digunakan untuk memilih jenis tertentu, memilih negara, kota, desa, dll.

Select dibuat dengan dua tag:

1. `<select>` untuk membuat wadah select.
2. `<option>` untuk membuat pilihan select.

Contoh:

```html
<h2>Pilih Negara</h2>

<select>
	<option>Indonesia</option>
	<option>Malaysia</option>
	<option>Singapua</option>
	<option>Brunei</option>
</select>
```

Hasilnya:

## Membuat Input Multi Baris (Textarea)

Input multi baris adalah input teks yang bisa ditambahkan baris. Biasanya digunakan untuk input alamat, biodata, deskripsi, dll.

Perbedaan input multi baris dengan input biasa adalah ketika di-`Enter`, input biasa akan memicu form untuk disimpan, sedangkan input multi baris akan membuat baris baru yang bisa ditambahkan teks lagi.

Input multi baris dibuat dengan tag `<textarea>`, tag ini wajib ditulis dengan tag penutupnya. Contoh:

```html
<h2>Masukkan Alamat Lengkap</h2>
<textarea></textarea>
```

Hasilnya:

Untuk mengatur jumlah barisnya tambahkan atribut `rows` berisi angka jumlah barisnya. Contoh:

```html
<h2>Masukkan Alamat Lengkap</h2>
<textarea rows="10"></textarea>
```

Hasilnya:

## Membuat Label Pada Input

## Membuat Tombol
