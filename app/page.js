import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <NavBar />
        This is cubewing.com :)<br />
        this website is still under construction
        <Link href="/cmll">Roux CMLL</Link>
        <Link href="/l6ep">Roux L6EP</Link>
      </main>
    </>
  );
}
