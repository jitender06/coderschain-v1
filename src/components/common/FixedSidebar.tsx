'use client';

import {
  Contact
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FloatingDock } from '../ui/floating-dock';

const FixedSidebar = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }
  const links = [
    {
      title: "Instagram",
      icon: (
        <span className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white fill-current"><path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path></svg></span>
      ),
      href: "https://www.instagram.com/coderschain/?hl=en",
    },
    // {
    //   title: "Whatsapp",
    //   icon: (
    //     <span className="h-10 w-10 rounded-full bg-[#25D366] shadow-lg hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white fill-current"><path d="M20.52 3.48A11.8 11.8 0 0012.05 0C5.74.03.63 5.13.66 11.44c.01 2 .54 3.93 1.56 5.64L0 24l7.11-2.16a11.42 11.42 0 005.9 1.6h.05c6.31-.03 11.42-5.13 11.39-11.44a11.36 11.36 0 00-3.93-8.52zM12 21.32h-.05c-1.88 0-3.73-.51-5.34-1.48l-.38-.22-4.2 1.27 1.29-4.09-.25-.42A9.45 9.45 0 012.68 11.4C2.66 6.25 6.85 2.07 12 2.04a9.28 9.28 0 019.32 9.24c.02 5.15-4.18 9.33-9.33 9.33z"></path><path d="M17.45 14.21c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.47 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"></path></svg></span>
    //   ),
    //   href: "/products",
    // },
    {
      title: "Contact",
      icon: (
        <span className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-600 shadow-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 flex items-center justify-center transition-all">
          <Contact className="text-white" />
        </span>

      ),
      href: "/contact",
    },
  ];



  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
};

export default FixedSidebar;