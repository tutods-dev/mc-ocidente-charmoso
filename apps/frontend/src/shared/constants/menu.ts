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
    key: 'services',
    label: 'Serviços',
    href: '/servicos',
  },
  {
    key: 'contacts',
    label: 'Contactos',
    href: '/contactos',
  },
] as const;

export { MENU_ITEMS };
