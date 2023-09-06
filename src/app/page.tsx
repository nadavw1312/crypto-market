import Image from "next/image";
import styles from "./page.module.css";
import FilteredCoinsTable from "@/components/FilteredCoinsTable";
import GitHubButton from "@/components/GitHubButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Crypto Market</h1>
      <FilteredCoinsTable />
      <GitHubButton />
    </main>
  );
}
