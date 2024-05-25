export type NavProps = {
  id?: number;
  link: string;
  text: string;
};

export const NavbarDatas: NavProps[] = [
  { id: 1, link: "home", text: "Início" },
  { id: 2, link: "/#about", text: "Sobre" },
  { id: 3, link: "/#trainings", text: "Treinamentos" },
  { id: 4, link: "/#team", text: "Equipa" },
  { id: 5, link: "/#testimonials", text: "Testemunhos" },
  { id: 6, link: "/#contacts", text: "Contactos" },
];
