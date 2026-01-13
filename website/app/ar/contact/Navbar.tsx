import Image from "next/image";

interface NavbarProps {
  locale?: 'en' | 'ar';
  activePage?: 'home' | 'about' | 'contracting' | 'contact' | 'mining';
}

export default function Navbar({ locale = 'en', activePage = 'home' }: NavbarProps) {
  const isAr = locale === 'ar';
  
  const links = {
    en: [
      { name: 'Home', href: '/', id: 'home' },
      { name: 'About', href: '/about', id: 'about' },
      { name: 'Construction', href: '/contracting', id: 'contracting' },
      { name: 'Contact', href: '/contact', id: 'contact' },
    ],
    ar: [
      { name: 'الرئيسية', href: '/ar', id: 'home' },
      { name: 'من نحن', href: '/ar/about', id: 'about' },
      { name: 'المشاريع', href: '/ar/contracting', id: 'contracting' },
      { name: 'اتصل بنا', href: '/ar/contact', id: 'contact' },
    ]
  };

  const currentLinks = isAr ? links.ar : links.en;

  let langSwitchUrl = isAr ? '/' : '/ar';
  if (activePage === 'about') langSwitchUrl = isAr ? '/about' : '/ar/about';
  if (activePage === 'contracting') langSwitchUrl = isAr ? '/contracting' : '/ar/contracting';
  if (activePage === 'contact') langSwitchUrl = isAr ? '/contact' : '/ar/contact';
  if (activePage === 'mining') langSwitchUrl = isAr ? '/mining' : '/ar/mining';

  return (
    <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '15px 50px', 
        background: '#000000', 
        alignItems: 'center', 
        boxShadow: '0 2px 15px rgba(0,0,0,0.5)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        borderBottom: '1px solid #333'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href={isAr ? "/ar" : "/"}>
            <Image src="/site-logo.jpg" alt="Art Home Logo" width={140} height={70} style={{ objectFit: 'contain' }} priority />
          </a>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: '500', alignItems: 'center' }}>
          {currentLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              style={{ 
                textDecoration: 'none', 
                color: activePage === link.id ? '#C5A065' : '#ffffff',
                fontWeight: activePage === link.id ? 'bold' : 'normal'
              }}
            >
              {link.name}
            </a>
          ))}
          <a href={langSwitchUrl} style={{ padding: '8px 20px', border: '1px solid #C5A065', textDecoration: 'none', color: '#C5A065', borderRadius: '2px', fontSize: '0.9rem' }}>
            {isAr ? 'English' : 'عربي'}
          </a>
        </div>
      </nav>
  );
}