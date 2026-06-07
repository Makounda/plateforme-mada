"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./dashboard.module.css";
import { IconChat } from "./icons";
import { SECTIONS } from "./menuItems";

export default function Sidebar({ isOpen, activeItem, onItemSelect }) {
  const [expandedSection, setExpandedSection] = useState("A");

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
      aria-label="Menu principal"
    >
      <div className={styles.sidebarHeader}>
        <Image
          src="/images/dashboard-avatar.png"
          alt=""
          width={36}
          height={36}
          className={styles.sidebarAvatar}
        />
        <span>Tableau de bord</span>
      </div>

      <nav className={styles.sidebarNav}>
        {SECTIONS.map((section) => (
          <div key={section.id} className={styles.sectionBlock}>
            <button
              type="button"
              className={styles.sectionButton}
              onClick={() => setExpandedSection(section.id)}
              aria-expanded={expandedSection === section.id}
            >
              {section.label}
            </button>

            {expandedSection === section.id && (
              <ul className={styles.subMenu}>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`${styles.subMenuItem} ${isActive ? styles.subMenuItemActive : ""}`}
                        onClick={() => onItemSelect(item.id)}
                      >
                        <span className={styles.subMenuIcon}>
                          <Icon />
                        </span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <button type="button" className={styles.chatBubble} aria-label="Bulle de conversation">
        <span className={styles.chatIcon}>
          <IconChat />
        </span>
        <span className={styles.chatLabel}>Bulle de conversation</span>
      </button>
    </aside>
  );
}
