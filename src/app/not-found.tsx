import styles from './not-found.module.css'
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="page">
      <main className={styles.notFound}>
        <h2 className='page-title'>404 | Page not found</h2>
        <div className="stacks flipped"></div>
        <div className={`main ${styles.main}`}>
          <div className={styles.content}>
            <p>
              Sorry, we couldn&apos;t find the page you&apos;re looking for, but let&apos;s help you find where you need to go!
            </p>
            <br />
            <form action="/search" method="get" className={styles.searchBar}>
              <input
                type="text"
                name="q"
                className={styles.searchInput}
                placeholder="Type any keyword..."
                aria-label="Search the site"
              />
              <button type="submit" className="btn">
                <Image src="/icon/search.svg" alt="Search icon" width={30} height={30} />
              </button>
            </form>
          </div>
        </div>
        <div className="stacks"></div>
      </main>
    </div>
  )
}