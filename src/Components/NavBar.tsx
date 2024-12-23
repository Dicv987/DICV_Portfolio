import { useState } from 'react'
import { Briefcase, HomeIcon, IdCard, Menu, X } from 'lucide-react'
import { MouseEventHandler, ReactNode } from 'react'
//@ts-ignore
import navbar from "../assets/translations/navbar.js"



interface NavBarProps {
  onMouseMove: MouseEventHandler<HTMLDivElement>
  selectedLanguage: 'en' | 'es'
  toggleLanguage: () => void
}

interface NavLinkProps {
  href: string
  icon: ReactNode
  label: string
  isMobile?: boolean
  delay?: number
}

const NavLink = ({ href, icon, label, isMobile = false, delay = 0 }: NavLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className={`flex ${isMobile ? 'justify-between items-center w-full p-3 border border-[#FFD074]/60 rounded-lg' : 'items-center space-x-2'}
      transform transition-all duration-300 hover:scale-105 hover:text-[#FFD074] ${isMobile ? 'animate-bounceIn' : ''}`}
    style={isMobile ? { animationDelay: `${delay}ms`, animationFillMode: 'forwards' } : {}}
  >
    {isMobile ? (
      <>
        <span>{label}</span>
        {icon}
      </>
    ) : (
      <>
        {icon}
        <span>{label}</span>
      </>
    )}
  </a>
)

export default function NavBar({ onMouseMove, selectedLanguage, toggleLanguage }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = navbar[selectedLanguage]

  return (
    <nav
      className="flex items-center justify-between w-full px-4 py-2 bg-transparent text-white backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-200/30 mb-6"
      onMouseMove={onMouseMove}
    >
      {/* Profile section on the left */}
      <div
        className="flex items-center space-x-2 border border-gray-100 p-3 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500/20"
        onClick={() => (window.location.href = '/')}
      >
        <div className="w-3 h-3 bg-[#FFD074] rounded-full" aria-hidden="true"></div>
        <span className="font-bold">{t.profile}</span>
      </div>

      {/* Center navigation links (visible only on desktop) */}
      <div className="hidden md:flex items-center space-x-4 border py-3 px-4 rounded-full">
        <NavLink href="./" icon={<HomeIcon className="w-4 h-4" />} label={t.home} />
        <NavLink href="/projects" icon={<Briefcase className="w-4 h-4" />} label={t.projects} />
        <NavLink href="/about" icon={<IdCard className="w-4 h-4" />} label={t.about} />
      </div>

      {/* Mobile menu and language selector */}
      <div className="flex items-center space-x-4 md:hidden">
        {/* Language Selector */}
        <button
          className="flex items-center space-x-2 border border-gray-100 p-2 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {selectedLanguage === 'en' ? (
            <img
              src="https://flagcdn.com/28x21/us.png"
              srcSet="https://flagcdn.com/56x42/us.png 2x,
                      https://flagcdn.com/84x63/us.png 3x"
              width="28"
              height="21"
              alt="United States"
            />
          ) : (
            <img
              src="https://flagcdn.com/28x21/mx.png"
              srcSet="https://flagcdn.com/56x42/mx.png 2x,
                      https://flagcdn.com/84x63/mx.png 3x"
              width="28"
              height="21"
              alt="Mexico"
            />
          )}
        </button>

        {/* Hamburger Menu Icon */}
        <button
          className={`p-2 transform transition-transform duration-300 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu with bounce animation */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-transparent/90 text-white flex flex-col items-center space-y-4 py-4 md:hidden z-40">
          <div className="w-11/12 space-y-4">
            <NavLink href="/" icon={<HomeIcon className="w-5 h-5" />} label={t.home} isMobile delay={0} />
            <NavLink href="/projects" icon={<Briefcase className="w-5 h-5" />} label={t.projects} isMobile delay={100} />
            <NavLink href="/about" icon={<IdCard className="w-5 h-5" />} label={t.about} isMobile delay={200} />
          </div>
        </div>
      )}

      {/* Right side contact and language switch for desktop */}
      <div className="hidden md:flex items-center space-x-4">
        {/* <div className="flex items-center space-x-2 border border-gray-100 p-3 rounded-full transform transition-all duration-300 hover:scale-110">
          <Bot className="w-6 h-6" />
        </div> */}

        <button
          className="flex items-center space-x-2 border border-gray-100 p-3 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {selectedLanguage === 'en' ? (
            <img
              src="https://flagcdn.com/28x21/us.png"
              srcSet="https://flagcdn.com/56x42/us.png 2x,
                      https://flagcdn.com/84x63/us.png 3x"
              width="28"
              height="21"
              alt="United States"
            />
          ) : (
            <img
              src="https://flagcdn.com/28x21/mx.png"
              srcSet="https://flagcdn.com/56x42/mx.png 2x,
                      https://flagcdn.com/84x63/mx.png 3x"
              width="28"
              height="21"
              alt="Mexico"
            />
          )}
        </button>
      </div>
    </nav>
  )
}
