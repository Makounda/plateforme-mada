"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.css";

function IconEye({ open }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className={styles.page}>
      <div className={styles.background} aria-hidden>
        <Image
          src="/images/login-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.logoBadge}>
          <Image
            src="/images/men-logo.svg"
            alt="Ministère de l'Éducation Nationale"
            width={92}
            height={92}
            className={styles.logoImage}
            priority
          />
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Se connecter à LEG-MEN</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="username">
                Nom d&apos;utilisateur ou adresse e-mail
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className={styles.input}
                placeholder="Nom d'utilisateur ou adresse e-mail"
                autoComplete="username"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Mot de passe
              </label>
              <div className={styles.passwordWrap}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  <IconEye open={showPassword} />
                </button>
              </div>
            </div>

            <label className={styles.remember}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
              />
              Se souvenir de moi
            </label>

            <button type="submit" className={styles.submitButton}>
              <span aria-hidden>→</span>
              Se connecter
            </button>
          </form>

          <div className={styles.links}>
            <Link href="#" className={styles.link}>
              Se connecter avec un périphérique
            </Link>
            <Link href="#" className={`${styles.link} ${styles.linkBold}`}>
              Mot de passe oublié ?
            </Link>
          </div>

          <footer className={styles.cardFooter}>
            <p className={styles.motto}>Ny Fianarana no lova tsara indrindra</p>
            <div className={styles.legalLinks}>
              <Link href="#" className={styles.legalLink}>
                Notice légale
              </Link>
              <Link href="#" className={styles.legalLink}>
                Politique de confidentialité
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
