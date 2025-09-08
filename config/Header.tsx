export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
//   logo: {
//     src: '/assets/logo.png',
//     alt: 'logo',
//     width: 100,
//     height: 100,
//   },
  navItems: [
    {
      label: 'About',
      href: '/About',
    },
    {
      label: 'Features',
      href: '#Features',
    },
    {
      label: 'How It Works',
      href: '#how-it-works',
    },
    {
      label: 'Testimonials',
      href: '#testimonials',
    }
  ] as NavItem[],
};
