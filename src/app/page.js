
import Linha from "../../components/Linha";
import Subdivisao from "../../components/Subdivisao";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main className={styles.container}>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </main>
  );
}
