import { useScrollPosition } from '../../hooks';
import { TEMPLE_INFO, NAV_LINKS } from '../../constants/content';

const ShivaLogo = () => (
  <div
    className="text-4xl font-bold text-orange-600"
    role="img"
    aria-label="Om symbol"
  >
    ॐ
  </div>
);

export const Header = () => {
  const isScrolled = useScrollPosition(50);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg py-2'
          : 'bg-gradient-to-b from-black/40 to-transparent py-2'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <ShivaLogo />
        <div className="flex flex-col items-center">
          <h1
            className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${
              isScrolled ? 'text-orange-800' : 'text-white drop-shadow-lg'
            }`}
          >
            {TEMPLE_INFO.nameTamil}
          </h1>
          <h2
            className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${
              isScrolled ? 'text-orange-800' : 'text-white drop-shadow-lg'
            }`}
          >
            {TEMPLE_INFO.name}
          </h2>
          <p
            className={`text-lg md:text-xl font-serif italic transition-colors ${
              isScrolled ? 'text-orange-600' : 'text-orange-200 drop-shadow-md'
            }`}
          >
            {TEMPLE_INFO.location}
          </p>
        </div>
        <ShivaLogo />
      </div>
      <nav
        className={`mt-2 transition-colors ${
          isScrolled ? 'bg-orange-50' : 'bg-black/20'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-6 md:space-x-8 py-3 flex-wrap gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-medium transition-all duration-200 rounded-lg px-3 py-2 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-100 focus:ring-orange-400'
                      : 'text-white hover:text-orange-300 hover:bg-white/20 focus:ring-orange-300'
                  } focus:outline-none focus:ring-2`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
