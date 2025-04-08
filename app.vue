<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="text-xl font-bold">
        Narakode
      </div>
      <button class="md:hidden" id="menu-toggle">☰</button>
      <ul id="menu" class="hidden md:flex gap-6 items-center">
        <li><a href="/" class="hover:text-blue-600">Beranda</a></li>
        <li><a href="/kursus" class="hover:text-blue-600">Kursus</a></li>
        <li><a href="/artikel" class="hover:text-blue-600">Artikel</a></li>
        <li><a href="/forum" class="hover:text-blue-600">Forum</a></li>
        <li><a href="/kontak" class="hover:text-blue-600">Kontak</a></li>
        <li>
          <a href="/masuk" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Masuk atau Daftar
          </a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden px-4 pb-4">
      <ul class="flex flex-col gap-4">
        <li><a href="/" class="hover:text-blue-600">Beranda</a></li>
        <li><a href="/kursus" class="hover:text-blue-600">Kursus</a></li>
        <li><a href="/artikel" class="hover:text-blue-600">Artikel</a></li>
        <li><a href="/forum" class="hover:text-blue-600">Forum</a></li>
        <li><a href="/kontak" class="hover:text-blue-600">Kontak</a></li>
        <li>
          <a href="/masuk" class="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700">
            Masuk atau Daftar
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <header class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">
          Belajar Programming Lebih Mudah di Narakode
        </h1>
        <p class="text-base md:text-lg text-gray-700 mb-6">
          Temukan tutorial, kursus, dan komunitas untuk meningkatkan skill codingmu dari nol hingga mahir.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/daftar" class="bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700">
            Mulai Belajar Sekarang
          </a>
          <a href="/kursus" class="text-blue-600 border border-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-50">
            Lihat Kursus
          </a>
        </div>
      </div>
    </div>
  </header>
  <section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-8">Tutorial Populer</h2>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Card 1 -->
      <div class="border rounded-lg p-6 hover:shadow-md transition">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <h3 class="text-xl font-semibold">HTML Dasar</h3>
        </div>
        <p class="text-sm text-gray-500 mb-1">12 Materi</p>
        <p class="text-gray-600 mb-4">Pelajari struktur dasar HTML dan buat halaman pertamamu.</p>
        <a href="/tutorial/html" class="text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>

      <!-- Card 2 -->
      <div class="border rounded-lg p-6 hover:shadow-md transition">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <h3 class="text-xl font-semibold">CSS Pemula</h3>
        </div>
        <p class="text-sm text-gray-500 mb-1">15 Materi</p>
        <p class="text-gray-600 mb-4">Pelajari styling halaman web menggunakan CSS dasar.</p>
        <a href="/tutorial/css" class="text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>

      <!-- Card 3 -->
      <div class="border rounded-lg p-6 hover:shadow-md transition">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <h3 class="text-xl font-semibold">JavaScript Dasar</h3>
        </div>
        <p class="text-sm text-gray-500 mb-1">18 Materi</p>
        <p class="text-gray-600 mb-4">Pahami dasar-dasar JavaScript untuk membuat interaksi di web.</p>
        <a href="/tutorial/javascript" class="text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>

      <!-- Card 4 -->
      <div class="border rounded-lg p-6 hover:shadow-md transition">
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l-4-4 4-4m8 8l4-4-4-4" />
          </svg>
          <h3 class="text-xl font-semibold">Git & GitHub</h3>
        </div>
        <p class="text-sm text-gray-500 mb-1">10 Materi</p>
        <p class="text-gray-600 mb-4">Pelajari cara mengelola versi kode dengan Git dan GitHub.</p>
        <a href="/tutorial/git" class="text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-8">Tutorial Terbaru</h2>

    <div class="space-y-6">
      <!-- Item 1 -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-lg shadow-sm">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17z" />
            </svg>
            <h3 class="text-xl font-semibold">React Dasar</h3>
          </div>
          <p class="text-sm text-gray-500 mb-1">8 Materi</p>
          <p class="text-gray-600">Mulai membangun antarmuka web interaktif dengan React.</p>
        </div>
        <a href="/tutorial/react" class="mt-4 md:mt-0 text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>

      <!-- Item 2 -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-lg shadow-sm">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <svg class="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <h3 class="text-xl font-semibold">Tailwind CSS</h3>
          </div>
          <p class="text-sm text-gray-500 mb-1">9 Materi</p>
          <p class="text-gray-600">Pelajari framework CSS utility-first untuk styling cepat dan konsisten.</p>
        </div>
        <a href="/tutorial/tailwind" class="mt-4 md:mt-0 text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>

      <!-- Item 3 -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-lg shadow-sm">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 7v10a1 1 0 001 1h3v-4h4v4h3a1 1 0 001-1V7a1 1 0 00-1-1h-3v4H7V6H4a1 1 0 00-1 1z" />
            </svg>
            <h3 class="text-xl font-semibold">Node.js Dasar</h3>
          </div>
          <p class="text-sm text-gray-500 mb-1">11 Materi</p>
          <p class="text-gray-600">Bangun aplikasi backend sederhana menggunakan Node.js dan Express.</p>
        </div>
        <a href="/tutorial/nodejs" class="mt-4 md:mt-0 text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-12">Kenapa Belajar di Narakode?</h2>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Fitur 1 -->
      <div class="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <div class="mb-4 text-blue-600">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6L3 9m9 5l9-5" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold mb-2">Materi Terstruktur</h3>
        <p class="text-gray-600">Setiap tutorial dirancang bertahap, mulai dari dasar hingga tingkat lanjutan.</p>
      </div>

      <!-- Fitur 2 -->
      <div class="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <div class="mb-4 text-green-600">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold mb-2">Belajar Gratis</h3>
        <p class="text-gray-600">Banyak materi yang bisa diakses secara gratis tanpa biaya.</p>
      </div>

      <!-- Fitur 3 -->
      <div class="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <div class="mb-4 text-purple-600">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 12l2 2 4-4m-9 8h6a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-semibold mb-2">Sertifikat</h3>
        <p class="text-gray-600">Dapatkan sertifikat sebagai bukti pencapaian setelah menyelesaikan kursus.</p>
      </div>
    </div>
  </div>
</section>
<section class="bg-blue-600 text-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-4">Siap Mulai Belajar Programming?</h2>
    <p class="text-lg mb-6">Gabung sekarang dan akses berbagai tutorial, kursus, dan forum diskusi secara gratis.</p>
    <a href="/daftar" class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
      Daftar Gratis Sekarang
    </a>
  </div>
</section>
<footer class="bg-gray-100 text-gray-700 py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div>
        <h3 class="text-xl font-bold mb-4">Narakode</h3>
        <p class="text-sm text-gray-600">Platform belajar programming untuk semua orang. Gratis, terstruktur, dan komunitas aktif.</p>
      </div>

      <!-- Menu -->
      <div>
        <h4 class="font-semibold mb-3">Menu</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/" class="hover:text-blue-600">Beranda</a></li>
          <li><a href="/kursus" class="hover:text-blue-600">Kursus</a></li>
          <li><a href="/artikel" class="hover:text-blue-600">Artikel</a></li>
          <li><a href="/forum" class="hover:text-blue-600">Forum</a></li>
        </ul>
      </div>

      <!-- Bantuan -->
      <div>
        <h4 class="font-semibold mb-3">Bantuan</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/faq" class="hover:text-blue-600">FAQ</a></li>
          <li><a href="/kontak" class="hover:text-blue-600">Kontak</a></li>
          <li><a href="/syarat" class="hover:text-blue-600">Syarat & Ketentuan</a></li>
          <li><a href="/privasi" class="hover:text-blue-600">Kebijakan Privasi</a></li>
        </ul>
      </div>

      <!-- Sosial Media -->
      <div>
        <h4 class="font-semibold mb-3">Ikuti Kami</h4>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-blue-600">Facebook</a></li>
          <li><a href="#" class="hover:text-blue-600">Twitter</a></li>
          <li><a href="#" class="hover:text-blue-600">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-500">
      © 2025 Narakode. Semua hak dilindungi.
    </div>
  </div>
</footer>

</template>
