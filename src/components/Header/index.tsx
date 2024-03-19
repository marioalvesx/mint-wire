import Link from "next/link";
import { SignIn } from "../SignIn";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { ActiveLink } from "../activeLink";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.newss" />
        <nav>
          <ActiveLink legacyBehavior activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink legacyBehavior activeClassName={styles.active} href="/posts" prefetch>
          <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignIn />
      </div>
    </header>
  );
}
