import { NAV_LINKS, SOCIAL_LINKS } from '../../constants/content';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section>
            <h3 className="text-xl font-medium mb-4">
              Shri Vilvanadha Ishwarar Temple
            </h3>
            <p>
              A place of peace, spirituality, and divine connection. Join us on
              the path to enlightenment.
            </p>
          </section>

          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-orange-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-300 rounded px-2 py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="bg-orange-800 hover:bg-orange-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-300"
                  aria-label={`Visit our ${social.platform} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-800 text-center">
          <p>
            &copy; {currentYear} Shri Vilvanadheeshwarar.org All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
