import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Moabe Souza" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores maxime nihil, ad labore minus quisquam dicta id quae cupiditate expedita eligendi. Alias veritatis labore ex vel debitis animi hic." />

          <Post author="Arrombadinho" content="Considere aqui um Lorem grandão" />
        </main>
      </div>
    </>

  )
}

