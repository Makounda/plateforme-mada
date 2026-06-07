import {
  IconBox,
  IconBuilding,
  IconCalendar,
  IconChart,
  IconDocument,
  IconEdit,
  IconHome,
  IconMail,
  IconMonitor,
  IconPencil,
  IconUsers,
  IconWallet,
} from "./icons";

export const FINANCIAL_ITEMS = [
  {
    id: "fin-caisse",
    label: "Gestion de la Caisse Établissement",
    icon: IconWallet,
  },
  {
    id: "fin-ptab",
    label: "Élaboration et suivi du PTAB",
    icon: IconMonitor,
  },
  {
    id: "fin-recettes",
    label: "Gestion des recettes et dépenses",
    icon: IconEdit,
  },
  {
    id: "fin-subventions",
    label: "Suivi des subventions",
    icon: IconDocument,
  },
  {
    id: "fin-etats",
    label: "Génération automatique des états financiers",
    icon: IconDocument,
  },
  {
    id: "fin-archivage",
    label: "Archivage numérique des pièces justificatives",
    icon: IconPencil,
  },
  {
    id: "fin-communication",
    label: "Communication",
    icon: IconMail,
  },
];

export const MATERIEL_ITEMS = [
  {
    id: "mat-inventaire",
    label: "Inventaire des équipements",
    icon: IconBox,
  },
  {
    id: "mat-patrimoine",
    label: "Gestion du patrimoine",
    icon: IconHome,
  },
  {
    id: "mat-infrastructures",
    label: "Suivi des infrastructures",
    icon: IconBuilding,
  },
  {
    id: "mat-besoins",
    label: "Gestion des besoins matériels",
    icon: IconEdit,
  },
  {
    id: "mat-rehabilitation",
    label: "Suivi des travaux de réhabilitation",
    icon: IconPencil,
  },
  {
    id: "mat-stocks",
    label: "Gestion des stocks",
    icon: IconBox,
  },
];

export const RH_ITEMS = [
  {
    id: "rh-base",
    label: "Base de données du PA et PE",
    icon: IconUsers,
  },
  {
    id: "rh-affectations",
    label: "Suivi des affectations",
    icon: IconDocument,
  },
  {
    id: "rh-postes",
    label: "Gestion des postes",
    icon: IconEdit,
  },
  {
    id: "rh-absences",
    label: "Gestion des absences",
    icon: IconCalendar,
  },
  {
    id: "rh-evaluation",
    label: "Évaluation des agents",
    icon: IconChart,
  },
  {
    id: "rh-decisions",
    label: "Suivi des décisions administratives",
    icon: IconDocument,
  },
];

export const PEDAGOGIQUE_ITEMS = [
  {
    id: "ped-eleves",
    label: "Gestion des élèves",
    icon: IconUsers,
  },
  {
    id: "ped-classes",
    label: "Gestion des classes",
    icon: IconHome,
  },
  {
    id: "ped-emploi",
    label: "Emploi du temps",
    icon: IconCalendar,
  },
  {
    id: "ped-notes",
    label: "Notes et résultats",
    icon: IconEdit,
  },
  {
    id: "ped-stats",
    label: "Statistiques scolaires",
    icon: IconChart,
  },
  {
    id: "ped-examens",
    label: "Suivi des examens officiels",
    icon: IconDocument,
  },
];

export const SECTIONS = [
  { id: "A", label: "A. GESTION FINANCIERE", items: FINANCIAL_ITEMS },
  { id: "B", label: "B. MODULE DE GESTION MATÉRIELLE", items: MATERIEL_ITEMS },
  {
    id: "C",
    label: "C. MODULE DE GESTION DES RESSOURCES HUMAINES",
    items: RH_ITEMS,
  },
  {
    id: "D",
    label: "D. MODULE DE GESTION PÉDAGOGIQUE",
    items: PEDAGOGIQUE_ITEMS,
  },
];

export const MENU_LABELS = Object.fromEntries(
  SECTIONS.flatMap((section) =>
    section.items.map((item) => [item.id, item.label]),
  ),
);
