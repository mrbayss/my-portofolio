// components/ProjectsSection.jsx
import Image from 'next/image';
import Link from 'next/link';
// Jika ingin menggunakan ikon untuk teknologi, bisa impor dari react-icons
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
  const projectsData = [
    {
      title: 'Website Portofolio Modern',
      description: 'Website portofolio ini dibuat dengan Next.js dan Tailwind CSS, menampilkan proyek-proyek saya dengan desain responsif dan modern.',
      image: '/images/profile.jpg', // Ganti dengan path gambar proyekmu (600x400 atau rasio 3:2 ideal)
      tags: ['Next.js', 'Tailwind CSS', 'React', 'API'],
      liveLink: '#', // Ganti dengan link live demo
      repoLink: '#', // Ganti dengan link ke repository GitHub
    },
    {
      title: 'Aplikasi Backend Sistem Informasi Sekolah',
      description: 'Aplikasi backend untuk sistem informasi sekolah yang dibangun dengan Node.js, Express, dan MongoDB. Memungkinkan pengelolaan data siswa, guru, dan kelas secara',
      image: '/images/profile.jpg', // Ganti dengan path gambar proyekmu
      tags: ['Node.js', 'Express', 'MongoDB', 'API'],
      liveLink: '#',
      repoLink: '#',
    },
    // Tambahkan proyek lainnya di sini
  ];

  return (
    <section id="project" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Proyek Saya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56"> {/* Container untuk gambar */}
                <Image
                  src={project.image}
                  alt={`Thumbnail ${project.title}`}
                  fill // Mengisi container, pastikan parent punya posisi relative dan dimensi
                  style={{ objectFit: 'cover' }} // Membuat gambar meng-cover area, bisa juga 'contain'
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Opsional untuk optimasi
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-cyan-700 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Teknologi:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-cyan-100 text-cyan-700 px-2 py-1 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200 flex justify-start space-x-4">
                  {project.liveLink && project.liveLink !== '#' && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-800 transition-colors font-medium inline-flex items-center"
                    >
                      {/* <FaExternalLinkAlt className="mr-2" />  */}
                      Live Demo 🔗
                    </Link>
                  )}
                  {project.repoLink && project.repoLink !== '#' && (
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors font-medium inline-flex items-center"
                    >
                      {/* <FaGithub className="mr-2" /> */}
                       Source Code 🛠️
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}