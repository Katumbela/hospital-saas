import { IBenefits } from "../../interfaces/benefits/benefits";
import { icons } from "../../utils/image-exporter";

export const BenefitsData: IBenefits[] = [
  {
    id: 1,
    icon: icons.check_list,
    content:
      "Treinamentos ministrados por especialistas em Segurança da Informação.",
  },
  {
    id: 2,
    icon: icons.check_list,
    content:
      "Laboratórios práticos para aplicação directa do conhecimento adquirido.",
  },
  {
    id: 3,
    icon: icons.check_list,
    content:
      "Capture the Flags (CTFs) gratuitos para testar habilidades e competências",
  },
  {
    id: 4,
    icon: icons.check_list,
    content:
      "Acesso a atualizações regulares sobre tendências, técnicas e ferramentas em.",
  },
];
