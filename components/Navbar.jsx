import Link from "next/link";

export default function Navbar() {
    const NnavLinks = [
        { name:"Home", href:"#home"},
        { name:"About", href:"#about"},
        { name:"Skills", href:"#skills"},
        { name:"Project", href:"#project"},
        { name:"Contact", href:"#contact"},
    ];
    
    return(
        <nav className="bg-slate-800 text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors">
          Muhamad Bayu Yusuf
        </Link>
        {/* Mobile Menu Button (akan kita fungsikan nanti) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
            {NnavLinks.map((link) => (
                <li key={link.name}>
                <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.name} 
                </Link>
                </li>
            ))}
        </ul>
      </div>
    </nav>
    )
}