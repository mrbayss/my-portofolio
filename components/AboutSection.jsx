// components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white"> {/* Latar belakang bisa putih atau warna netral lain */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Tentang Saya
        </h2>
        <div className="max-w-3xl mx-auto text-slate-700 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            Halo! Saya Muhamad Bayu Yusuf, seorang Frontend Developer, Backend Developer, Fullstack Developer dengan antusiasme tinggi dalam menciptakan solusi digital yang
            inovatif dan ramah pengguna. Perjalanan saya di dunia teknologi dimulai darimasa kuliah di jurusan S1 Matematika Fakultas Matematika dan Ilmu Pengetahuan AlamUniversitas Negeri Malang
          </p>
          <p>
            Saya percaya bahwa setiap orang mampu belajar dan berkembang, tidak peduli dari mana mereka memulai. Dengan semangat itu, saya telah mengasah keterampilan saya dalam berbagai bahasa pemrograman dan teknologi web, termasuk HTML, CSS, JavaScript, React, Node.js, dan banyak lagi.
            Saya selalu termotivasi untuk terus belajar dan mengikuti perkembangan teknologi terbaru, terutama di bidang pengembangan web.
          </p>
          <p>
            Di luar coding atau desain, saya juga menikmati berolahraga badminton, futsal, voli, basket. Saya percaya keseimbangan antara pekerjaan dan kehidupan pribadi penting untuk menjaga kreativitas tetap mengalir.
          </p>
          {/* Kamu bisa menambahkan paragraf lain sesuai ceritamu */}
        </div>
      </div>
    </section>
  );
}