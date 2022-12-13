import Head from "next/head";
import { Header } from "../../components/Header";
import styles from './styles.module.scss'


 export default function Categoty() {
    return (
        <>
        <Head>
            <title>Nova categoria - Sujeito Pizarria</title>
        </Head>
        <div>
            <Header/>
          
          <main className={styles.container}>
          <h1>Cadastrar categoria</h1>
          
          <form className={styles.form}>
            <input
            type="text"
            placeholder="Digite o nome da categoria"
            className={styles.input}
            />

            <button className={styles.buttonAdd} type="submit" >
                Cadastrar
            </button>
          </form>

          </main>
        </div>
        </>
    )
 }