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

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Tutorial Card -->
        <div class="border rounded-lg p-6 hover:shadow-md transition">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"></path>
              </svg>
              <h3 class="text-xl font-semibold">Belajar HTML Dasar</h3>
            </div>
            <span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap">Beginner</span>
          </div>
          <p class="text-sm text-gray-500 mb-1">12 Materi</p>
          <p class="text-gray-600 mb-4">Pelajari struktur dasar HTML untuk membuat halaman web pertama kamu.</p>
          <a href="/tutorial/html" class="text-blue-600 font-medium hover:underline">Lihat Tutorial →</a>
        </div>

        <!-- Kamu bisa duplikasi card di atas untuk tutorial lainnya -->
      </div>
    </div>
  </section>
</template>
