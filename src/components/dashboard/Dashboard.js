"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./dashboard.module.css";
import Header from "./Header";
import { MENU_LABELS } from "./menuItems";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("fin-ptab");

  return (
    <div className={styles.dashboard}>
      <div className={styles.backgroundLayer} aria-hidden>
        <Image
          src="/images/server-room.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.dashboardContent}>
        <Header onMenuToggle={() => setSidebarOpen((open) => !open)} />

        <div className={styles.body}>
          <Sidebar
            isOpen={sidebarOpen}
            activeItem={activeItem}
            onItemSelect={setActiveItem}
          />

          <main className={styles.mainArea}>
            <div className={styles.mainPlaceholder}>
              <p className={styles.mainHint}>
                {MENU_LABELS[activeItem] ?? "Module sélectionné"}
              </p>
              <p className={styles.mainSubHint}>
                Zone de contenu — formulaires, tableaux et indicateurs à intégrer ici.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
