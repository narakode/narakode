---
slug: element-tag-dan-atribut-html
title: Elemen, Tag, dan Atribut di HTML
description: Elemen, Tag dan Atribut adalah tiga hal dasar untuk menulis kode HTML
type: course
course: belajar-html-dasar
publishedAt: 2025-09-28 14:00:00 +0700
---

Setelah mengetahui struktur dasar HTML, sekarang kita akan belajar mengenai elemen, tag, dan atribut di HTML. Tiga hal ini sangat penting untuk dipelajari karena kode HTML tidak bisa ditulis tanpa tiga hal ini.

## Elemen

Elemen adalah bagian di halaman website. Contohnya gambar, judul, paragraf, form, tabel, dll.

Di HTML elemen ada banyak jenisnya, setiap elemen memiliki nama dan fungsinya masing-masing. Contoh:

1. _Image_ / gambar, untuk menampilkan gambar.
2. _Heading_ / judu;, untuk menampilkan judul.
3. _Paragraph_ / paragraf, untuk menampilkan paragraf.

Jadi, ketika kita ingin menampilkan suatu konten di halaman website maka cari elemen yang sesuai dengan konten yang ingin ditampilkan.

### Struktur Elemen

Setiap elemen terdiri dari tag dan konten.

![Struktur Elemen](./images/4-elemen-tag-dan-atribut-html/struktur-elemen.png)

### Nested Element (Elemen Beranak)

Elemen beranak adalah elemen yang kontennya berisi elemen-elemen lainnya. Contoh:

```html
<article>
    <h1>Judul Artikel</h1>
    <p>Isi Artikel</p>
</article>
```

Pada kode di atas, elemen artikel adalah elemen yang beranak, anak-anaknya adalah elemen judul dan elemen paragraf.

### Void Element (Elemen Tanpa Konten)

_Void Element_ adalah elemen yang tidak memiliki konten. Contoh:

```html
<br>
<input>
<img src="gambar.png">
```

Elemen-elemen pada kode tersebut tidak memiliki konten, namun masih ada fungsi dan tampilannya di halaman website, yaitu:

- Elemen _break_ (`<br>`) fungsinya untuk membuat baris baru.
- Elemen _input_ (`<input>`) fungsinya untuk menampilkan kotak input.
- Elemen _image_ (`<img>`) fungsinya untuk menampilkan gambar.

## Tag

Tag adalah kode HTML untuk membuat sebuah elemen. Setiap elemen memiliki tag-nya masing masing, contoh:

- Elemen judul, tag-nya: `<h1> - <h6>`.
- Elemen gambar, tag-nya: `<img>`.
- Elemen paragraf, tag-nya: `<p>`.
- dll

### Jenis Tag

Tag ada dua jenis, tag pembuka dan tag penutup.

Tag pembuka digunakan untuk mengawali elemen, tag penutup digunakan untuk mengakhiri elemen. Semua kode dari tag pembuka sampai tag penutup adalah bagian dari elemen.

Tag penutup harus selalu ada di akhir elemen, jika tidak maka semua kode setelah tag pembuka sampai ujung dokumen HTML akan mengikuti elemen tersebut. Hal ini berlaku untuk semua elemen kecuali untuk _void element_ (elemen tanpa konten).

### Cara Menulis Tag

Tag ditulis dengan format: kurung siku buka (`<`), nama tag-nya, kurung siku tutup (`>`). Untuk tag penutup ditambah garis miring (`/`) sebelum nama tag-nya.

1. Tag pembuka: `<nama-tag>`.
2. Tag penutup: `</nama-tag>`.

Contoh:

```html
<h1>Tag judul</h1>
<p>Tag paragraf</p>
```

Untuk elemen yang tanpa konten (_void element_) bisa ditulis tanpa tag penutup. Contoh:

```html
<img src="bunga.png">
<input>
```

## Atribut

<!-- atribut adalah informasi / definisi tambahan elemen ditulis di tag -->
<!-- contoh atribut -->