import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/product', label: 'Product' },
  { href: '/career', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const router = useRouter();

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" legacyBehavior><a className="logo">Mark-44</a></Link>
        <nav>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} legacyBehavior >
              <a className={router.pathname === href ? 'active' : ''}>{label}</a>
            </Link>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .site-header { background: transparent; backdrop-filter: blur(10px); border-bottom: 1px solid #374151; padding: 1rem 0; position: sticky; top: 0; z-index: 100; }
        .header-container { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; text-decoration: none; color: #F9FAFB; }
        nav { display: flex; gap: 1.5rem; }
        nav a { text-decoration: none; color: #D1D5DB; font-weight: 500; transition: color 0.2s ease; }
        nav a.active { color: var(--accent-color); }
        nav a:hover {
          animation: glitch-effect 0.25s linear;
        }
      `}</style>
    </header>
  );
};

export default Header;