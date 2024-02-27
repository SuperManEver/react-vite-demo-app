import { Suspense, lazy } from 'react'

import Large from '../../components/large'

import css from './styles.module.css'

async function delay() {
  return new Promise((resolve) => setTimeout(() => resolve(true), 3000))
}

const LazyLarge = lazy(async () => {
  await delay()

  return import('../../components/large')
})

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
        {/* <Suspense fallback={<div>Loading...</div>}>
          <LazyLarge />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLarge />
        </Suspense> */}
        {/* 
        <Large />
        <Large /> */}
      </section>
    </main>
  )
}
