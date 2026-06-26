import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <p id="footer-style">
          <span className="footer-text">RT001 Website</span>
          <span className="design-text">
            Design & Developed by
            <span className="footer-name"> Deni &copy;</span> 2024
          </span>
        </p>
      </div>
    </footer>
  );
}


<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arya & Nadia — Wedding Invitation</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: #FAFAF8; color: #1A1A1A; overflow-x: hidden; }
    .font-serif { font-family: 'Playfair Display', serif; }

    /* Scroll Progress */
    #progress-bar { transition: width 100ms linear; }

    /* Cover Animations */
    #cover .cover-content { transition: opacity 0.6s ease, transform 0.6s ease; }
    #cover.opening .cover-content { opacity: 0; transform: translateY(-40px); }
    #cover.opening { opacity: 0; pointer-events: none; }

    /* Scroll Reveal */
    [data-reveal] {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    [data-reveal].revealed { opacity: 1; transform: translateY(0); }
    [data-reveal="delay-1"] { transition-delay: 0.1s; }
    [data-reveal="delay-2"] { transition-delay: 0.2s; }
    [data-reveal="delay-3"] { transition-delay: 0.3s; }
    [data-reveal="delay-4"] { transition-delay: 0.4s; }
    [data-reveal="delay-5"] { transition-delay: 0.5s; }

    /* Gentle Pulse */
    @keyframes gentle-pulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.08); opacity: 1; }
    }
    .pulse-ampersand { animation: gentle-pulse 3s ease-in-out infinite; }

    /* Countdown */
    .countdown-num {
      font-variant-numeric: tabular-nums;
      font-feature-settings: 'tnum';
    }

    /* Gallery Image Hover */
    .gallery-img { transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
    .gallery-img:hover { transform: scale(1.03); }

    /* Tab Active Indicator */
    .tab-btn { position: relative; transition: color 0.3s ease; }
    .tab-btn.active { color: #1A1A1A; }
    .tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 1.5px;
      background: #8B6F47;
    }

    /* Toggle Button */
    .toggle-option {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .toggle-option.active {
      background: #1A1A1A;
      color: #FAFAF8;
    }

    /* Guest Counter */
    .counter-btn {
      transition: all 0.2s ease;
    }
    .counter-btn:hover {
      background: #E8E2D9;
    }

    /* Wish Card Enter */
    @keyframes wish-enter {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .wish-enter { animation: wish-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

    /* Toast */
    @keyframes toast-in {
      from { opacity: 0; transform: translate(-50%, 20px); }
      to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translate(-50%, 0); }
      to { opacity: 0; transform: translate(-50%, 20px); }
    }
    .toast-enter { animation: toast-in 0.3s ease forwards; }
    .toast-exit { animation: toast-out 0.3s ease forwards; }

    /* Noise Overlay */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      opacity: 0.025;
      pointer-events: none;
      z-index: 9998;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 200px 200px;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #D4C4B0; border-radius: 2px; }

    /* Divider */
    .section-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .section-divider::before,
    .section-divider::after {
      content: '';
      height: 1px;
      width: 40px;
      background: #E8E2D9;
    }

    /* Map container */
    .map-container {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
    }
    .map-container::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 1px solid #E8E2D9;
      border-radius: 4px;
      pointer-events: none;
    }
  </style>
</head>
<body>

  <!-- ====== SCROLL PROGRESS ====== -->
  <div id="progress-bar" class="fixed top-0 left-0 h-[2px] z-[60]" style="width:0%; background: #8B6F47;"></div>

  <!-- ====== COVER SCREEN ====== -->
  <div id="cover" class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700" style="background: linear-gradient(160deg, #1A1714 0%, #2C2420 50%, #1A1714 100%);">
    <div class="cover-content flex flex-col items-center px-6">
      <!-- Top Line -->
      <div class="w-10 h-px bg-[#8B6F47] mb-10 opacity-60"></div>

      <!-- Monogram -->
      <div class="text-center leading-none select-none">
        <span class="font-serif text-[#D4C4B0] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight">A</span>
        <span class="font-serif text-[#8B6F47] text-3xl sm:text-4xl md:text-5xl mx-2 md:mx-4 inline-block" style="transform: translateY(-8px);">&</span>
        <span class="font-serif text-[#D4C4B0] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight">N</span>
      </div>

      <!-- Date -->
      <p class="mt-8 text-[#6B5F54] text-xs tracking-[0.35em] uppercase font-light">15 · Agustus · 2025</p>

      <!-- Bottom Line -->
      <div class="w-10 h-px bg-[#8B6F47] mt-10 mb-12 opacity-60"></div>

      <!-- Guest -->
      <p class="text-[#6B5F54] text-xs tracking-[0.15em] uppercase mb-2">Kepada Yth.</p>
      <p class="font-serif text-[#D4C4B0] text-lg md:text-xl text-center">Bapak / Ibu / Saudara/i</p>

      <!-- Open Button -->
      <button onclick="openInvitation()" id="btn-open"
        class="mt-14 px-10 py-3.5 border border-[#8B6F47]/70 text-[#8B6F47] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B6F47] hover:text-[#1A1714] transition-all duration-500">
        Buka Undangan
      </button>
    </div>
  </div>

  <!-- ====== MAIN CONTENT ====== -->
  <div id="main-content" class="opacity-0 transition-opacity duration-1000 ease-out">

    <!-- ── Hero ── -->
    <section class="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FAFAF8]">
      <p class="text-[#8B7E74] text-[11px] tracking-[0.35em] uppercase font-light" data-reveal>The Wedding of</p>
      <h1 class="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1A1A] mt-5 text-center tracking-tight leading-[0.95]" data-reveal="delay-1">
        Arya<br class="sm:hidden"> & Nadia
      </h1>
      <div class="flex items-center gap-4 mt-8" data-reveal="delay-2">
        <div class="w-10 h-px bg-[#D4C4B0]"></div>
        <p class="text-[#8B7E74] text-xs tracking-[0.2em] font-light">Jumat, 15 Agustus 2025</p>
        <div class="w-10 h-px bg-[#D4C4B0]"></div>
      </div>
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce" data-reveal="delay-4">
        <iconify-icon icon="lucide:chevron-down" width="18" class="text-[#B5A99A]"></iconify-icon>
      </div>
    </section>

    <!-- ── Bismillah ── -->
    <section class="py-20 md:py-28 px-6 bg-[#FAFAF8]">
      <div class="max-w-lg mx-auto text-center" data-reveal>
        <p class="font-serif text-2xl md:text-3xl text-[#1A1A1A] italic leading-relaxed">
          "Bismillaahirrahmaanirrahiim"
        </p>
        <div class="section-divider mt-8 mb-6">
          <div class="w-1.5 h-1.5 rounded-full bg-[#8B6F47]"></div>
        </div>
        <p class="text-[#8B7E74] text-sm leading-[1.9] font-light">
          Assalamu'alaikum Warahmatullahi Wabarakatuh<br><br>
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta teman-teman sekalian untuk menghadiri acara pernikahan kami.
        </p>
      </div>
    </section>

    <!-- ── Couple ── -->
    <section class="py-20 md:py-28 px-6 bg-[#F5F1EC]">
      <div class="max-w-4xl mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-16" data-reveal>Mempersatukan</p>

        <div class="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-20">
          <!-- Groom -->
          <div class="text-center" data-reveal="delay-1">
            <div class="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto border-2 border-[#E8E2D9]">
              <img src="https://picsum.photos/seed/groom-arya/400/400.jpg" alt="Arya" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-[#1A1A1A] mt-6">Arya Pratama W.</h3>
            <p class="text-[#8B7E74] text-xs mt-3 leading-[1.8] font-light">
              Putra dari<br>
              Bapak Hendra Wijaya<br>
              & Ibu Sri Wahyuni
            </p>
            <div class="flex items-center justify-center gap-3 mt-4">
              <a href="#" class="w-8 h-8 rounded-full border border-[#D4C4B0] flex items-center justify-center hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white text-[#8B7E74] transition-all duration-300">
                <iconify-icon icon="lucide:instagram" width="14"></iconify-icon>
              </a>
            </div>
          </div>

          <!-- Ampersand -->
          <div class="flex-shrink-0 mt-[-20px] md:mt-8" data-reveal="delay-2">
            <span class="font-serif text-[#8B6F47] text-4xl md:text-5xl pulse-ampersand">&</span>
          </div>

          <!-- Bride -->
          <div class="text-center" data-reveal="delay-3">
            <div class="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto border-2 border-[#E8E2D9]">
              <img src="https://picsum.photos/seed/bride-nadia/400/400.jpg" alt="Nadia" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-[#1A1A1A] mt-6">Nadia Azzahra P.</h3>
            <p class="text-[#8B7E74] text-xs mt-3 leading-[1.8] font-light">
              Putri dari<br>
              Bapak Ahmad Putra<br>
              & Ibu Ratna Sari
            </p>
            <div class="flex items-center justify-center gap-3 mt-4">
              <a href="#" class="w-8 h-8 rounded-full border border-[#D4C4B0] flex items-center justify-center hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white text-[#8B7E74] transition-all duration-300">
                <iconify-icon icon="lucide:instagram" width="14"></iconify-icon>
              </a>
            </div>
          </div>
        </div>

        <!-- Quran Verse -->
        <div class="mt-20 max-w-lg mx-auto text-center" data-reveal="delay-4">
          <p class="font-serif text-lg md:text-xl text-[#1A1A1A] italic leading-relaxed">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
          </p>
          <p class="text-[#8B6F47] text-xs mt-4 tracking-[0.15em] font-medium">QS. Ar-Rum: 21</p>
        </div>
      </div>
    </section>

    <!-- ── Event & Countdown ── -->
    <section class="py-20 md:py-28 px-6 bg-[#FAFAF8]">
      <div class="max-w-4xl mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-6" data-reveal>Waktu & Tempat</p>
        <h2 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-center mb-16" data-reveal="delay-1">Save The Date</h2>

        <!-- Countdown -->
        <div class="flex items-center justify-center gap-6 md:gap-10 mb-16" data-reveal="delay-2">
          <div class="text-center">
            <div id="cd-days" class="font-serif text-4xl md:text-5xl text-[#1A1A1A] countdown-num">00</div>
            <div class="text-[#B5A99A] text-[10px] tracking-[0.2em] uppercase mt-1">Hari</div>
          </div>
          <span class="text-[#D4C4B0] text-2xl font-light mb-4">:</span>
          <div class="text-center">
            <div id="cd-hours" class="font-serif text-4xl md:text-5xl text-[#1A1A1A] countdown-num">00</div>
            <div class="text-[#B5A99A] text-[10px] tracking-[0.2em] uppercase mt-1">Jam</div>
          </div>
          <span class="text-[#D4C4B0] text-2xl font-light mb-4">:</span>
          <div class="text-center">
            <div id="cd-mins" class="font-serif text-4xl md:text-5xl text-[#1A1A1A] countdown-num">00</div>
            <div class="text-[#B5A99A] text-[10px] tracking-[0.2em] uppercase mt-1">Menit</div>
          </div>
          <span class="text-[#D4C4B0] text-2xl font-light mb-4">:</span>
          <div class="text-center">
            <div id="cd-secs" class="font-serif text-4xl md:text-5xl text-[#1A1A1A] countdown-num">00</div>
            <div class="text-[#B5A99A] text-[10px] tracking-[0.2em] uppercase mt-1">Detik</div>
          </div>
        </div>

        <!-- Event Cards -->
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <!-- Akad -->
          <div class="border border-[#E8E2D9] p-8 md:p-10 bg-white" data-reveal="delay-2">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-8 h-8 rounded-full bg-[#F5F1EC] flex items-center justify-center">
                <iconify-icon icon="lucide:book-open" width="14" class="text-[#8B6F47]"></iconify-icon>
              </div>
              <h3 class="font-serif text-xl text-[#1A1A1A]">Akad Nikah</h3>
            </div>
            <div class="space-y-3 text-sm">
              <div class="flex items-start gap-3">
                <iconify-icon icon="lucide:calendar" width="14" class="text-[#B5A99A] mt-0.5 flex-shrink-0"></iconify-icon>
                <div>
                  <p class="text-[#1A1A1A] font-medium">Jumat, 15 Agustus 2025</p>
                  <p class="text-[#8B7E74] font-light text-xs mt-0.5">08:00 - 10:00 WIB</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <iconify-icon icon="lucide:map-pin" width="14" class="text-[#B5A99A] mt-0.5 flex-shrink-0"></iconify-icon>
                <div>
                  <p class="text-[#1A1A1A] font-medium">Masjid Al-Ikhlas</p>
                  <p class="text-[#8B7E74] font-light text-xs mt-0.5">Jl. TB Simatupang No. 88, Jakarta Selatan</p>
                </div>
              </div>
            </div>
            <button onclick="addToCalendar('Akad Nikah', '20250815T080000', '20250815T100000', 'Masjid Al-Ikhlas, Jakarta Selatan')"
              class="mt-6 w-full py-2.5 border border-[#E8E2D9] text-[#8B7E74] text-[10px] tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 flex items-center justify-center gap-2">
              <iconify-icon icon="lucide:calendar-plus" width="13"></iconify-icon>
              Tambah ke Kalender
            </button>
          </div>

          <!-- Resepsi -->
          <div class="border border-[#E8E2D9] p-8 md:p-10 bg-white" data-reveal="delay-3">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-8 h-8 rounded-full bg-[#F5F1EC] flex items-center justify-center">
                <iconify-icon icon="lucide:party-popper" width="14" class="text-[#8B6F47]"></iconify-icon>
              </div>
              <h3 class="font-serif text-xl text-[#1A1A1A]">Resepsi</h3>
            </div>
            <div class="space-y-3 text-sm">
              <div class="flex items-start gap-3">
                <iconify-icon icon="lucide:calendar" width="14" class="text-[#B5A99A] mt-0.5 flex-shrink-0"></iconify-icon>
                <div>
                  <p class="text-[#1A1A1A] font-medium">Jumat, 15 Agustus 2025</p>
                  <p class="text-[#8B7E74] font-light text-xs mt-0.5">11:00 - 14:00 WIB</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <iconify-icon icon="lucide:map-pin" width="14" class="text-[#B5A99A] mt-0.5 flex-shrink-0"></iconify-icon>
                <div>
                  <p class="text-[#1A1A1A] font-medium">The Glass House</p>
                  <p class="text-[#8B7E74] font-light text-xs mt-0.5">Jl. Hang Lekir I No. 6, Jakarta Selatan</p>
                </div>
              </div>
            </div>
            <button onclick="addToCalendar('Resepsi Pernikahan Arya & Nadia', '20250815T110000', '20250815T140000', 'The Glass House, Jakarta Selatan')"
              class="mt-6 w-full py-2.5 border border-[#E8E2D9] text-[#8B7E74] text-[10px] tracking-[0.2em] uppercase hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 flex items-center justify-center gap-2">
              <iconify-icon icon="lucide:calendar-plus" width="13"></iconify-icon>
              Tambah ke Kalender
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Gallery ── -->
    <section class="py-20 md:py-28 px-6 bg-[#F5F1EC]">
      <div class="max-w-5xl mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-6" data-reveal>Galeri</p>
        <h2 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-center mb-14" data-reveal="delay-1">Momen Kami</h2>

        <!-- Editorial Layout -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" data-reveal="delay-2">
          <div class="col-span-2 row-span-2 overflow-hidden aspect-[4/3] md:aspect-auto">
            <img src="https://picsum.photos/seed/wedding-couple-main/800/600.jpg" alt="Gallery 1" class="gallery-img w-full h-full object-cover">
          </div>
          <div class="overflow-hidden aspect-square">
            <img src="https://picsum.photos/seed/wedding-detail-1/400/400.jpg" alt="Gallery 2" class="gallery-img w-full h-full object-cover">
          </div>
          <div class="overflow-hidden aspect-square">
            <img src="https://picsum.photos/seed/wedding-detail-2/400/400.jpg" alt="Gallery 3" class="gallery-img w-full h-full object-cover">
          </div>
          <div class="col-span-2 md:col-span-1 overflow-hidden aspect-[2/1] md:aspect-square">
            <img src="https://picsum.photos/seed/wedding-detail-3/400/200.jpg" alt="Gallery 4" class="gallery-img w-full h-full object-cover">
          </div>
          <div class="col-span-2 overflow-hidden aspect-[2/1]">
            <img src="https://picsum.photos/seed/wedding-venue/800/400.jpg" alt="Gallery 5" class="gallery-img w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- ── Location ── -->
    <section class="py-20 md:py-28 px-6 bg-[#FAFAF8]">
      <div class="max-w-4xl mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-6" data-reveal>Lokasi</p>
        <h2 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-center mb-4" data-reveal="delay-1">Temukan Kami</h2>
        <p class="text-center text-[#8B7E74] text-sm font-light mb-10 max-w-md mx-auto" data-reveal="delay-2">The Glass House — Jl. Hang Lekir I No. 6, Kebayoran Baru, Jakarta Selatan 12120</p>

        <div class="map-container" data-reveal="delay-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.795!3d-6.244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sThe%20Glass%20House!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%" height="350" style="border:0; display:block;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div class="flex justify-center mt-6" data-reveal="delay-4">
          <a href="https://maps.google.com/?q=The+Glass+House+Jakarta" target="_blank"
            class="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A1A1A] text-white text-[10px] tracking-[0.2em] uppercase hover:bg-[#8B6F47] transition-colors duration-300">
            <iconify-icon icon="lucide:navigation" width="13"></iconify-icon>
            Buka Peta
          </a>
        </div>
      </div>
    </section>

    <!-- ── Digital Gift ── -->
    <section class="py-20 md:py-28 px-6 bg-[#F5F1EC]" id="gift-section">
      <div class="max-w-lg mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-6" data-reveal>Kado Digital</p>
        <h2 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-center mb-4" data-reveal="delay-1">Hadiah Untuk Kami</h2>
        <p class="text-center text-[#8B7E74] text-sm font-light mb-10 leading-relaxed" data-reveal="delay-2">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan opsi digital berikut.
        </p>

        <!-- Tabs -->
        <div class="flex justify-center gap-8 mb-10" data-reveal="delay-2">
          <button class="tab-btn active text-[11px] tracking-[0.2em] uppercase pb-2 font-medium text-[#B5A99A]" onclick="switchGiftTab('bank')">Transfer Bank</button>
          <button class="tab-btn text-[11px] tracking-[0.2em] uppercase pb-2 font-medium text-[#B5A99A]" onclick="switchGiftTab('qris')">QRIS</button>
        </div>

        <!-- Bank Transfer Tab -->
        <div id="tab-bank" class="space-y-4" data-reveal="delay-3">
          <!-- BCA -->
          <div class="bg-white border border-[#E8E2D9] p-5">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-md bg-[#003D79] flex items-center justify-center">
                  <span class="text-white text-[10px] font-semibold tracking-wide">BCA</span>
                </div>
                <div>
                  <p class="text-xs text-[#8B7E74] font-light">Bank Central Asia</p>
                </div>
              </div>
              <button onclick="copyText('8720356718', 'Nomor BCA')" class="w-8 h-8 rounded-full border border-[#E8E2D9] flex items-center justify-center hover:bg-[#F5F1EC] transition-colors duration-200" title="Salin">
                <iconify-icon icon="lucide:copy" width="13" class="text-[#8B7E74]"></iconify-icon>
              </button>
            </div>
            <p class="font-mono text-lg text-[#1A1A1A] tracking-wider">8720 3567 18</p>
            <p class="text-[11px] text-[#8B7E74] mt-1.5 font-light">a.n. Arya Pratama Wijaya</p>
          </div>

          <!-- BRI -->
          <div class="bg-white border border-[#E8E2D9] p-5">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-md bg-[#00529C] flex items-center justify-center">
                  <span class="text-white text-[10px] font-semibold tracking-wide">BRI</span>
                </div>
                <div>
                  <p class="text-xs text-[#8B7E74] font-light">Bank Rakyat Indonesia</p>
                </div>
              </div>
              <button onclick="copyText('037201001234567', 'Nomor BRI')" class="w-8 h-8 rounded-full border border-[#E8E2D9] flex items-center justify-center hover:bg-[#F5F1EC] transition-colors duration-200" title="Salin">
                <iconify-icon icon="lucide:copy" width="13" class="text-[#8B7E74]"></iconify-icon>
              </button>
            </div>
            <p class="font-mono text-lg text-[#1A1A1A] tracking-wider">0372 0100 1234 567</p>
            <p class="text-[11px] text-[#8B7E74] mt-1.5 font-light">a.n. Nadia Azzahra Putri</p>
          </div>

          <!-- Mandiri -->
          <div class="bg-white border border-[#E8E2D9] p-5">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-md bg-[#003876] flex items-center justify-center">
                  <span class="text-white text-[9px] font-semibold tracking-wide">MDR</span>
                </div>
                <div>
                  <p class="text-xs text-[#8B7E74] font-light">Bank Mandiri</p>
                </div>
              </div>
              <button onclick="copyText('1290087654321', 'Nomor Mandiri')" class="w-8 h-8 rounded-full border border-[#E8E2D9] flex items-center justify-center hover:bg-[#F5F1EC] transition-colors duration-200" title="Salin">
                <iconify-icon icon="lucide:copy" width="13" class="text-[#8B7E74]"></iconify-icon>
              </button>
            </div>
            <p class="font-mono text-lg text-[#1A1A1A] tracking-wider">1290 0876 5432 1</p>
            <p class="text-[11px] text-[#8B7E74] mt-1.5 font-light">a.n. Arya Pratama Wijaya</p>
          </div>

          <!-- Confirm WA -->
          <button onclick="confirmViaWA()"
            class="w-full mt-4 py-3 bg-[#25D366] text-white text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#1da851] transition-colors duration-300 flex items-center justify-center gap-2 rounded-sm">
            <iconify-icon icon="lucide:message-circle" width="14"></iconify-icon>
            Konfirmasi via WhatsApp
          </button>
        </div>

        <!-- QRIS Tab -->
        <div id="tab-qris" class="hidden" data-reveal>
          <div class="bg-white border border-[#E8E2D9] p-8 flex flex-col items-center">
            <div class="w-48 h-48 bg-[#FAFAF8] p-3 border border-[#E8E2D9]">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=QRIS-ARYA-NADIA-WEDDING-2025&color=1A1A1A&bgcolor=FAFAF8&margin=10" alt="QRIS" class="w-full h-full">
            </div>
            <p class="text-[#8B7E74] text-xs font-light mt-5 text-center leading-relaxed">Scan kode di atas menggunakan aplikasi e-wallet atau mobile banking Anda</p>
            <div class="section-divider mt-5 mb-4">
              <div class="w-1 h-1 rounded-full bg-[#D4C4B0]"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-2">
              <span class="text-[9px] tracking-wider uppercase text-[#B5A99A] border border-[#E8E2D9] px-2.5 py-1">GoPay</span>
              <span class="text-[9px] tracking-wider uppercase text-[#B5A99A] border border-[#E8E2D9] px-2.5 py-1">OVO</span>
              <span class="text-[9px] tracking-wider uppercase text-[#B5A99A] border border-[#E8E2D9] px-2.5 py-1">DANA</span>
              <span class="text-[9px] tracking-wider uppercase text-[#B5A99A] border border-[#E8E2D9] px-2.5 py-1">ShopeePay</span>
            </div>
            <button onclick="confirmViaWA()"
              class="mt-6 px-6 py-2.5 bg-[#25D366] text-white text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#1da851] transition-colors duration-300 flex items-center gap-2 rounded-sm">
              <iconify-icon icon="lucide:message-circle" width="13"></iconify-icon>
              Konfirmasi via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ── RSVP ── -->
    <section class="py-20 md:py-28 px-6 bg-[#FAFAF8]" id="rsvp-section">
      <div class="max-w-lg mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-6" data-reveal>Konfirmasi</p>
        <h2 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-center mb-4" data-reveal="delay-1">RSVP</h2>
        <p class="text-center text-[#8B7E74] text-sm font-light mb-10" data-reveal="delay-2">Mohon konfirmasi kehadiran Anda sebelum 10 Agustus 2025</p>

        <!-- RSVP Form -->
        <div id="rsvp-form" class="bg-white border border-[#E8E2D9] p-6 md:p-8" data-reveal="delay-3">
          <div class="mb-6">
            <label class="text-[10px] tracking-[0.2em] uppercase text-[#8B7E74] font-medium block mb-2">Nama Lengkap</label>
            <input type="text" id="rsvp-name" placeholder="Masukkan nama Anda"
              class="w-full px-4 py-3 border border-[#E8E2D9] bg-transparent text-sm text-[#1A1A1A] placeholder-[#D4C4B0] focus:outline-none focus:border-[#8B6F47] transition-colors duration-300">
          </div>

          <div class="mb-6">
            <label class="text-[10px] tracking-[0.2em] uppercase text-[#8B7E74] font-medium block mb-3">Konfirmasi Kehadiran</label>
            <div class="flex gap-3">
              <button class="toggle-option active flex-1 py-2.5 border border-[#E8E2D9] text-xs tracking-wider uppercase text-center" onclick="toggleRSVP(this, 'hadir')">Hadir</button>
              <button class="toggle-option flex-1 py-2.5 border border-[#E8E2D9] text-xs tracking-wider uppercase text-center text-[#8B7E74]" onclick="toggleRSVP(this, 'tidak')">Tidak Hadir</button>
            </div>
            <input type="hidden" id="rsvp-status" value="hadir">
          </div>

          <div class="mb-8" id="guest-counter-wrap">
            <label class="text-[10px] tracking-[0.2em] uppercase text-[#8B7E74] font-medium block mb-3">Jumlah Tamu</label>
            <div class="flex items-center gap-4">
              <button onclick="changeGuestCount(-1)" class="counter-btn w-9 h-9 border border-[#E8E2D9] flex items-center justify-center text-[#8B7E74]">
                <iconify-icon icon="lucide:minus" width="14"></iconify-icon>
              </button>
              <span id="guest-count" class="font-serif text-2xl text-[#1A1A1A] w-8 text-center">1</span>
              <button onclick="changeGuestCount(1)" class="counter-btn w-9 h-9 border border-[#E8E2D9] flex items-center justify-center text-[#8B7E74]">
                <iconify-icon icon="lucide:plus" width="14"></iconify-icon>
              </button>
            </div>
            <input type="hidden" id="rsvp-guests" value="1">
          </div>

          <button onclick="submitRSVP()"
            class="w-full py-3.5 bg-[#1A1A1A] text-white text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B6F47] transition-colors duration-300">
            Kirim Konfirmasi
          </button>
          <p id="rsvp-error" class="text-red-400 text-xs mt-3 text-center hidden"></p>
        </div>

        <!-- RSVP Success -->
        <div id="rsvp-success" class="hidden bg-white border border-[#E8E2D9] p-10 md:p-14 text-center">
          <div class="w-14 h-14 rounded-full bg-[#F5F1EC] flex items-center justify-center mx-auto mb-5">
            <iconify-icon icon="lucide:check" width="24" class="text-[#8B6F47]"></iconify-icon>
          </div>
          <h3 class="font-serif text-2xl text-[#1A1A1A] mb-3">Terima Kasih</h3>
          <p class="text-[#8B7E74] text-sm font-light leading-relaxed">Konfirmasi Anda telah kami terima. Kami menantikan kehadiran Anda di hari bahagia kami.</p>
        </div>
      </div>
    </section>

    <!-- ── Wishes ── -->
    <section class="py-20 md:py-28 px-6 bg-[#F5F1EC]" id="wishes-section">
      <div class="max-w-lg mx-auto">
        <p class="text-center text-[#8B7E74] text-[11px] tracking-[0.3em] uppercase font-light mb-6" data-reveal>Ucapan</p>
        <h2 class="font-serif text-3xl md:text-4xl text-[#1A1A1A] text-center mb-10" data-reveal="delay-1">Kirim Doa & Ucapan</h2>

        <!-- Wishes Form -->
        <div class="bg-white border border-[#E8E2D9] p-6 mb-8" data-reveal="delay-2">
          <div class="mb-4">
            <input type="text" id="wish-name" placeholder="Nama Anda"
              class="w-full px-4 py-3 border border-[#E8E2D9] bg-transparent text-sm text-[#1A1A1A] placeholder-[#D4C4B0] focus:outline-none focus:border-[#8B6F47] transition-colors duration-300">
          </div>
          <div class="mb-4">
            <textarea id="wish-message" rows="3" placeholder="Tulis ucapan & doa..."
              class="w-full px-4 py-3 border border-[#E8E2D9] bg-transparent text-sm text-[#1A1A1A] placeholder-[#D4C4B0] focus:outline-none focus:border-[#8B6F47] transition-colors duration-300 resize-none"></textarea>
          </div>
          <button onclick="submitWish()"
            class="w-full py-3 bg-[#1A1A1A] text-white text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B6F47] transition-colors duration-300">
            Kirim Ucapan
          </button>
          <p id="wish-error" class="text-red-400 text-xs mt-3 text-center hidden"></p>
        </div>

        <!-- Wishes List -->
        <div id="wishes-list" class="space-y-4">
          <div class="bg-white border border-[#E8E2D9] p-5" data-reveal="delay-3">
            <div class="flex items-center justify-between mb-2">
              <p class="text-sm font-medium text-[#1A1A1A]">Budi Santoso</p>
              <p class="text-[10px] text-[#B5A99A]">2 hari lalu</p>
            </div>
            <p class="text-sm text-[#8B7E74] font-light italic leading-relaxed">"Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin ya Rabbal Alamin."</p>
          </div>
          <div class="bg-white border border-[#E8E2D9] p-5" data-reveal="delay-4">
            <div class="flex items-center justify-between mb-2">
              <p class="text-sm font-medium text-[#1A1A1A]">Anisa Rahma</p>
              <p class="text-[10px] text-[#B5A99A]">1 hari lalu</p>
            </div>
            <p class="text-sm text-[#8B7E74] font-light italic leading-relaxed">"Bahagia selalu untuk Arya & Nadia! Langgeng sampai Jannah. Happy wedding!"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Closing ── -->
    <section class="py-24 md:py-32 px-6 bg-[#1A1714]">
      <div class="max-w-lg mx-auto text-center">
        <div class="section-divider mb-10" data-reveal>
          <div class="w-1.5 h-1.5 rounded-full bg-[#8B6F47]"></div>
        </div>
        <p class="font-serif text-2xl md:text-3xl text-[#D4C4B0] italic leading-relaxed" data-reveal="delay-1">
          "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir."
        </p>
        <div class="w-10 h-px bg-[#8B6F47] mx-auto mt-10 mb-10 opacity-60" data-reveal="delay-2"></div>
        <p class="text-[#8B7E74] text-xs tracking-[0.15em] uppercase mb-3" data-reveal="delay-2">Dengan penuh cinta</p>
        <h2 class="font-serif text-4xl md:text-5xl text-[#D4C4B0] tracking-tight" data-reveal="delay-3">
          Arya & Nadia
        </h2>
        <div class="w-10 h-px bg-[#8B6F47] mx-auto mt-10 mb-10 opacity-60" data-reveal="delay-4"></div>
        <p class="text-[#6B5F54] text-[10px] tracking-[0.2em] uppercase font-light" data-reveal="delay-5">
          Terima kasih atas doa dan restu Anda
        </p>
      </div>
    </section>

    <!-- Footer -->
    <div class="py-6 px-6 bg-[#141210] text-center">
      <p class="text-[#4A423A] text-[10px] tracking-[0.15em] font-light">
        Made with care for Arya & Nadia's wedding
      </p>
    </div>

  </div><!-- /main-content -->

  <!-- ====== BACK TO TOP ====== -->
  <button id="back-to-top" onclick="window.scrollTo({top:0})"
    class="fixed bottom-6 right-6 w-10 h-10 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 z-40 hover:bg-[#8B6F47] shadow-sm">
    <iconify-icon icon="lucide:chevron-up" width="16"></iconify-icon>
  </button>

  <!-- ====== TOAST CONTAINER ====== -->
  <div id="toast-container" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center pointer-events-none"></div>


  <!-- ====== JAVASCRIPT ====== -->
  <script>
    // ── Cover Opening ──
    function openInvitation() {
      const cover = document.getElementById('cover');
      const main = document.getElementById('main-content');
      cover.classList.add('opening');
      setTimeout(() => {
        cover.style.display = 'none';
        main.style.opacity = '1';
        document.body.style.overflow = '';
        // Trigger initial reveals
        initScrollReveal();
      }, 600);
    }
    // Lock scroll on cover
    document.body.style.overflow = 'hidden';

    // ── Scroll Progress Bar ──
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      document.getElementById('progress-bar').style.width = progress + '%';

      // Back to top button
      const btn = document.getElementById('back-to-top');
      if (scrollTop > 600) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
      } else {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
      }
    });

    // ── Scroll Reveal ──
    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    }

    // ── Countdown Timer ──
    function updateCountdown() {
      const wedding = new Date('2025-08-15T08:00:00+07:00').getTime();
      const now = Date.now();
      const diff = wedding - now;

      if (diff <= 0) {
        document.getElementById('cd-days').textContent = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent = '00';
        document.getElementById('cd-secs').textContent = '00';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ── Gift Tabs ──
    function switchGiftTab(tab) {
      const tabs = document.querySelectorAll('.tab-btn');
      const bankPanel = document.getElementById('tab-bank');
      const qrisPanel = document.getElementById('tab-qris');

      tabs.forEach(t => t.classList.remove('active'));

      if (tab === 'bank') {
        tabs[0].classList.add('active');
        bankPanel.classList.remove('hidden');
        qrisPanel.classList.add('hidden');
      } else {
        tabs[1].classList.add('active');
        bankPanel.classList.add('hidden');
        qrisPanel.classList.remove('hidden');
      }
    }

    // ── Copy to Clipboard ──
    function copyText(text, label) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('✓ ' + label + ' berhasil disalin');
      }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('✓ ' + label + ' berhasil disalin');
      });
    }

    // ── Toast System ──
    function showToast(message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast-enter bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-xs tracking-wide shadow-lg pointer-events-auto';
      toast.textContent = message;
      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
      }, 2200);
    }

    // ── Confirm via WhatsApp ──
    function confirmViaWA() {
      const text = encodeURIComponent('Halo, saya ingin mengkonfirmasi kado digital untuk pernikahan Arya & Nadia. Terima kasih.');
      window.open('https://wa.me/6281234567890?text=' + text, '_blank');
    }

    // ── Add to Calendar ──
    function addToCalendar(title, start, end, location) {
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'DTSTART:' + start,
        'DTEND:' + end,
        'SUMMARY:' + title,
        'LOCATION:' + location,
        'DESCRIPTION:Pernikahan Arya & Nadia',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'aryanadia-wedding.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('✓ File kalender berhasil diunduh');
    }

    // ── RSVP ──
    let guestCount = 1;

    function toggleRSVP(btn, status) {
      const buttons = btn.parentElement.querySelectorAll('.toggle-option');
      buttons.forEach(b => {
        b.classList.remove('active');
        b.classList.add('text-[#8B7E74]');
      });
      btn.classList.add('active');
      btn.classList.remove('text-[#8B7E74]');
      document.getElementById('rsvp-status').value = status;

      // Show/hide guest counter
      const counterWrap = document.getElementById('guest-counter-wrap');
      if (status === 'tidak') {
        counterWrap.style.opacity = '0.3';
        counterWrap.style.pointerEvents = 'none';
      } else {
        counterWrap.style.opacity = '1';
        counterWrap.style.pointerEvents = 'auto';
      }
    }

    function changeGuestCount(delta) {
      guestCount = Math.max(1, Math.min(5, guestCount + delta));
      document.getElementById('guest-count').textContent = guestCount;
      document.getElementById('rsvp-guests').value = guestCount;
    }

    function submitRSVP() {
      const name = document.getElementById('rsvp-name').value.trim();
      const errorEl = document.getElementById('rsvp-error');

      if (!name) {
        errorEl.textContent = 'Silakan masukkan nama Anda';
        errorEl.classList.remove('hidden');
        return;
      }

      errorEl.classList.add('hidden');

      // Show success
      document.getElementById('rsvp-form').style.display = 'none';
      const successEl = document.getElementById('rsvp-success');
      successEl.classList.remove('hidden');
      successEl.style.opacity = '0';
      successEl.style.transform = 'translateY(20px)';
      requestAnimationFrame(() => {
        successEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        successEl.style.opacity = '1';
        successEl.style.transform = 'translateY(0)';
      });

      showToast('✓ RSVP terkirim, terima kasih!');
    }

    // ── Wishes ──
    function submitWish() {
      const name = document.getElementById('wish-name').value.trim();
      const message = document.getElementById('wish-message').value.trim();
      const errorEl = document.getElementById('wish-error');

      if (!name || !message) {
        errorEl.textContent = 'Silakan isi nama dan ucapan Anda';
        errorEl.classList.remove('hidden');
        return;
      }

      errorEl.classList.add('hidden');

      // Create wish card
      const list = document.getElementById('wishes-list');
      const card = document.createElement('div');
      card.className = 'bg-white border border-[#E8E2D9] p-5 wish-enter';
      card.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm font-medium text-[#1A1A1A]">${escapeHTML(name)}</p>
          <p class="text-[10px] text-[#B5A99A]">Baru saja</p>
        </div>
        <p class="text-sm text-[#8B7E74] font-light italic leading-relaxed">"${escapeHTML(message)}"</p>
      `;

      list.insertBefore(card, list.firstChild);

      // Clear form
      document.getElementById('wish-name').value = '';
      document.getElementById('wish-message').value = '';

      showToast('✓ Ucapan terkirim, terima kasih!');
    }

    function escapeHTML(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  </script>
</body>
</html>
