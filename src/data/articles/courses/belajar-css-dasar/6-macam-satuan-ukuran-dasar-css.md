---
slug: macam-satuan-ukuran-dasar-css
title: Macam-Macam Satuan Ukuran Dasar CSS
description: Properti CSS untuk mengatur ukuran pada elemen memiliki satuan yang bermacam-macam jenisnya, seperti pixel, persen, rem, vw dan vh
type: course
course: belajar-css-dasar
publishedAt: 2026-01-04 10:00:00 +0700
---

Ada beberapa properti CSS untuk mengatur ukuran pada elemen, seperti:

- `font-size`, untuk mengatur ukuran font / teks.
- `width`, untuk mengatur lebar.
- `height`, untuk mengatur tinggi.

Properti-properti tersebut nilainya berupa angka dengan satuannya. Contoh:

1. `10px`, nilainya 10 satuanya `px`.
2. `50%`, nilainya 50 satuanya `%`.
3. `10cm`, nilainya 10 satuanya `cm`.
4. `14pt`, nilainya 14 satuanya `pt`.

Di materi ini, kita akan membahas beberapa satuan ukuran dasar di CSS, yaitu:

1. Pixel (px)
2. Persen (%)
3. REM
4. Viewport Width (VW) dan Viewport Height (VH)

## 1. Pixel (px)

Pixel adalah satuan yang nilainya statis dan presisi. Misalnya `200px` maka dia akan ditampilkan `200px` di layar, tidak relatif ke elemen lain.

Pixel biasa digunakan untuk ukuran font body, ukuran border, ukuran ikon, ukuran logo, dll.

Pixel ditulis dengan `px`.

Contoh:

```css
img {
    width: 50px;
    height: 50px;
}
```

```html
<img src="logo.png">
```

Hasilnya.

## 2. Persen (%)

Persen adalah satuan yang nilainya relatif ke elemen yang membungkusnya. Nilainya berupa angka 0 - 100.

Persen biasanya digunakan untuk mengatur ukuran elemen agar fleksibel menyesuaikan ukuran elemen yang membungkusnya.

Persen ditulis dengan `%`.

Contoh:

```css
div {
    width: 500px;
    background-color: red;
}

img {
    width: 50%;
}
```

```html
<div>
    <img src="pria.jpg">
</div>
```

Hasilnya, gambar ditampilkan dengan lebar setengah (50%) dari ukuran elemen yang membungkusnya, yaitu elemen `div` yang lebarnya 500px. Sehingga gambar ditampilkan dengan ukuran 250px.

## 3. REM

REM adalah satuan yang nilainya relatif ke ukuran font dari elemen induk di dokumen HTML yaitu `<html>`.

REM ditulis dengan `rem`. Angkanya bebas, tidak ada batasan minimum dan maksimum.

Contoh, jika elemen `<html>` ukuran font-nya `16px` maka nilai `2rem = 32px`.

REM banyak digunakan di CSS modern, karena kemudahan untuk mengaturnya, ketika ukuran font `<html>` diubah, maka ukuran elemen di bawahnya yang menggunakan satuan `rem` akan otomatis menyesuaikan.

Contoh:

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 3rem;
} 
```

```html
<html>
    <body>
        <h1>Judul Level 1</h1>
        <h2>Judul Level 2</h2>
    </body>
</html>
```

Hasilnya, ukuran font `<h1>` akan bernilai `4 x 16px` yaitu `64px`, `<h2>` akan bernilai `3 x 16px` yaitu `48px`.

## 4. Viewport Width (VW) dan Viewport Height (VH)

Viewport width adalah ukuran yang nilainya relatif ke lebar layar browser. Viewport height adalah ukuran yang nilainya relatif ke tinggi layar browser.

Viewport width ditulis dengan `vw`, viewport height ditulis dengan `vh`.

Misalnya lebar layar 578px, tinggi 1076px, maka:

- `100vw` = `578px`
- `100vh` = `1076px`

Contoh:

```css
img {
    width: 100vw;
    height: 100vh
}
```

```html
<img src="matahari.jpg">
```

Hasilnya, gambar akan tampil memenuhi lebar dan tinggi layar browser.

## Panduan Memilih Satuan Ukuran

Keempat satuan ukuran memiliki fungsi, kelebihan dak kekurangannya masing-masing. Berikut panduan memilih satuan ukuran:

| Kebutuhan | Contoh | Gunakan |
| -------- | -------- | -------- |
| Ukuran tidak berubah-ubah     | Icon, logo     | Pixel     |
| Ukuran relatif ke elemen yang membungkusnya     | Tata letak elemen     | Persen     |
| Ukuran menyesuaikan ukuran font elemen induk `<html>`     | Ukuran teks     | REM     |
| Ukuran relatif ke layar browser     | Tata letak elemen     | Viewport Width dan Viewport Height     |