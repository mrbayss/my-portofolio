// components/SkillsSection.jsx
// Kamu bisa menggunakan library ikon seperti react-icons jika mau,
// contoh: npm install react-icons
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function SkillsSection() {
  const skillsData = [
    { name: 'HTML5', FaHtml5 /* <FaHtml5 size={40} className="text-orange-500" /> */ },
    { name: 'CSS3', FaCss3Alt /* <FaCss3Alt size={40} className="text-blue-500" /> */ },
    { name: 'JavaScript (ES6+)', icon: '💻' /* <FaJsSquare size={40} className="text-yellow-400" /> */ },
    { name: 'React', icon: '⚛️' /* <FaReact size={40} className="text-sky-500" /> */ },
    { name: 'Next.js', icon: '🚀' /* <SiNextdotjs size={40} className="text-black" /> */ },
    { name: 'Tailwind CSS', icon: '💨' /* <SiTailwindcss size={40} className="text-teal-500" /> */ },
    { name: 'Node.js', icon: '⚙️' /* <FaNodeJs size={40} className="text-green-500" /> */ },
    { name: 'Golang', icon: '⚙️' /* <FaNodeJs size={40} className="text-green-500" /> */ },
    { name: 'Git & GitHub', icon: ' L_git: ' /* <FaGitAlt size={40} className="text-red-500" /> */ },  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-100"> {/* Warna latar selang-seling dengan About */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Keahlian Saya
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">
                {/* Jika menggunakan react-icons, ganti skill.icon dengan JSX ikonnya */}
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-700">{skill.name}</h3>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-600">
          Dan terus bersemangat untuk mempelajari hal baru lainnya!
        </p>
      </div>
    </section>
  );
}