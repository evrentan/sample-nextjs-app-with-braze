import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BrazeComponent from "../components/braze-component";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sample Next.js App with Braze</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className={styles.title}>
                    Welcome to Sample Next.js App with Braze!
                </h1>

                <p className={styles.description}>
                    It rocks, yeahh 🚀🤘🏻
                </p>
            </main>

            <BrazeComponent />

            <footer>
                <a
                    href="https://evrentan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img
                        src="https://images.ctfassets.net/sgc8uslaht6m/5053xqiD6rGY5Z3xDASnAo/d2aac01b8a69286b667605d2f16a4bef/evrentan-full.jpg?w=720&h=697&q=50&fm=webp"
                        alt="Evren Tan" className={styles.logo}/>
                </a>
            </footer>

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo,
                    Monaco,
                    Lucida Console,
                    Liberation Mono,
                    DejaVu Sans Mono,
                    Bitstream Vera Sans Mono,
                    Courier New,
                    monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system,
                    BlinkMacSystemFont,
                    Segoe UI,
                    Roboto,
                    Oxygen,
                    Ubuntu,
                    Cantarell,
                    Fira Sans,
                    Droid Sans,
                    Helvetica Neue,
                    sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
