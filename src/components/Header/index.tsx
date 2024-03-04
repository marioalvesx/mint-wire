import Link from "next/link";
import { SignIn } from "../SignIn";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { ActiveLink } from "../activeLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.newss" />
        <nav>
          <Link className={styles.active} href="/">
            Home
          </Link>
          <Link href="/posts">
            Posts
          </Link>
        </nav>
        <SignIn />
      </div>
    </header>
  );
}
