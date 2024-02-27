import Large from '../../components/large'

import css from './styles.module.css'

export default function Index() {
  return (
    <main>
      <p id="zero-state">
        This is a demo for React Router. Things I tweak
        <br />
        Check out{' '}
        <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
      </p>

      <section className={css.wrapper}>
        <Large />
        <Large />
      </section>
    </main>
  )
}
