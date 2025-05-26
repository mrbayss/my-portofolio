// components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white text-center p-6">
      <p>&copy; {currentYear} Muhamad bayu Yusuf. All Rights Reserved.</p>
      <p className="text-sm mt-1">
        Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">Next.js</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">Tailwind CSS</a>.
      </p>
    </footer>
  );
}