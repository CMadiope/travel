import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Traveloo</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main className={styles.container}>
        <Header />
      </main>
    </div>
  );
}
