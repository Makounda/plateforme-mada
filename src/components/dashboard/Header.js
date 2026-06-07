"use client";

import Image from "next/image";
import styles from "./dashboard.module.css";
import { IconChevron, IconMenu } from "./icons";

export default function Header({ onMenuToggle }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={onMenuToggle}
          aria-label="Ouvrir ou fermer le menu"
        >
          <IconMenu />
        </button>
        <Image
          src="/images/lycee-logo.svg"
          alt="Logo du lycée"
          width={48}
          height={60}
          className={styles.schoolLogo}
          priority
        />
      </div>

      <h1 className={styles.headerTitle}>
        PLATEFORME NUMÉRIQUE INTÉGRÉE POUR LES LYCÉES
      </h1>

      <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
        <span>ACCUEIL</span>
        <IconChevron />
        <span>DES</span>
        <IconChevron />
        <span className={styles.breadcrumbCurrent}>SAPE</span>
      </nav>
    </header>
  );
}
