/**
 * List of menus to display on header.
 */
const MENU_ITEMS = [
  {
    key: 'home',
    label: 'Página Inicial',
    href: '/',
  },
  {
    key: 'about-us',
    label: 'Sobre nós',
    href: '/sobre-nos',
  },
  {
    key: 'projects',
    label: 'Projetos',
    href: '/projetos',
  },
  {
    key: 'contacts',
    label: 'Contactos',
    href: '/contactos',
  },
] as const;

export { MENU_ITEMS };
