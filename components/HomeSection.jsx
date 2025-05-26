// components/HeroSection.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="bg-slate-100 py-20 md:py-32"> {/* Latar belakang sedikit beda dari body */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Kolom Teks */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800"> {/* Tambahkan text-slate-800 atau warna gelap lainnya */}
            Halo, saya <span className="text-cyan-600">Muhamad Bayu Yusuf</span>!
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-6">
            Seorang Frontend Developer, Backend Developer, Fullstack Developer yang bersemangat membangun aplikasi web yang interaktif dan bermanfaat.
          </p>
          <div className="space-x-4">
            <Link
              href="#projects"
              className="bg-cyan-600 text-white hover:bg-cyan-700 font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Lihat Proyek Saya
            </Link>
            <Link
              href="#contact"
              className="bg-slate-700 text-white hover:bg-slate-800 font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>

        {/* Kolom Gambar (Opsional) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Ganti dengan path ke gambar profilmu di folder public */}
          {/* Ukuran gambar idealnya persegi atau rasio yang sesuai */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/profile.jpg" // Contoh path, buat folder public/images/
              alt="Foto Profil Muhamad Bayu Yusuf"
              width={400} // Lebar asli gambar
              height={400} // Tinggi asli gambar
              className="object-cover w-full h-full" // Membuat gambar mengisi container bulat
              priority // Penting untuk LCP (Largest Contentful Paint)
            />
          </div>
        </div>
      </div>
    </section>
  );
}