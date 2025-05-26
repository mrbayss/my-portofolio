// components/ContactSection.jsx
import Link from 'next/link';
// Opsional: Impor ikon dari react-icons jika kamu ingin tampilan lebih visual
import { FaInstagram, FaWhatsapp, FaTwitter, FaTiktok, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  // Ganti dengan username atau nomor teleponmu yang sebenarnya
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/bayu.yusuf_',
      icon: <FaInstagram size={30} />,
      bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500', // Gradien Instagram
      textColor: 'text-white',
      displayText: 'Follow di Instagram',
    },
    {
      name: 'WhatsApp',
      // Ganti 62xxxxxxxxxx dengan nomormu, diawali dengan kode negara tanpa + atau 0
      href: 'https://wa.me/6281315032646',
      icon: <FaWhatsapp size={30} />,
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      displayText: 'Chat di WhatsApp',
    },
    {
      name: 'Twitter (X)',
      href: 'https://x.com/BayuYusuf1909',
      icon: <FaTwitter size={30} />,
      bgColor: 'bg-black', // Atau biru klasik Twitter jika suka
      textColor: 'text-white',
      displayText: 'Ikuti di X (Twitter)',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@bayuyusuf09',
      icon: <FaTiktok size={30} />,
      bgColor: 'bg-black', // TikTok sering menggunakan hitam atau campuran warna cerah
      textColor: 'text-white',
      displayText: 'Lihat di TikTok',
    },

  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Terhubung Dengan Saya
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-slate-700 text-lg mb-10">
            Saya akan senang mendengar kabarmu! Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah ini:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${link.bgColor} ${link.textColor} group`}
              >
                {/* Jika menggunakan ikon dari react-icons: */}
                <span className="mr-3">{link.icon}</span>
                <span className="text-lg font-semibold">{link.displayText}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}