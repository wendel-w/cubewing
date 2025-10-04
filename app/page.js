import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        This is cubewing.com :)
        <Link href="/cmll">Roux CMLL</Link>
        <Link href="/l6ep">Roux LSE</Link>
      </main>
    </>
  );
}
