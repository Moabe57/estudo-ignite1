import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/moabe57.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Moabe Souza</strong>
            <span>Gerente Administrativo</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <p>Enim tempora nisi exercitationem fugiat porro unde tempore</p>
        <p><a href="#"> voluptate veniam soluta quis facilis esse, ad hic explicabo</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}