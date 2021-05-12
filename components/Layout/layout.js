import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Toolbar from "../Toolbar/Toolbar";

const Layout = ({ children }) => {
	return (
		<>
			<div id='cont' className={styles.container}>
				<Head>
					<title>Reser Baja - Alarma para tu carro - Tijuana, B.C.</title>
					<meta name="description" content="En Reser Baja te ofrecemos alarma para tu carro, cerrajeria automotriz, GPS, estereos y mas. En Reser Baja tu carro esta seguro." />
				</Head>

				<header className={styles.header} id="blurHeader">
					<Link href="/">
						<div className={styles.title}>
							<h1 className={styles.headerTitle}>ReserBaja</h1>
							<span className={styles.headerSubtitle}>SEGURIDAD AUTOMOTRIZ</span>
						</div>
					</Link>
				</header>

				<main className={styles.main} id="blurMain">
					{children}
				</main>

				<footer className={styles.footer} id="blurFooter">
					<p>RESERBAJA 2021</p>
					<p>Tijuana, Baja California, Mexico</p>
				</footer>
			</div>

			<Toolbar />

			<style jsx global>{`

				@font-face {
					font-family: 'Noto Sans JP'
					src: url('/fonts/woff2/woff2-bold.woff2') format('woff2'),
					url('/fonts/woff/NotoSansJP-Bold.woff') format('woff'),
					url('/fonts/ttf/NotoSansJP-Bold.ttf') format('ttf');
					font-weight: 700;
					font-style: normal;
				}
				@font-face {
					font-family: 'Noto Sans JP'
					src: url('/fonts/woff2/woff2-regular.woff2') format('woff2'),
					url('/fonts/woff/NotoSansJP-Regular.woff') format('woff'),
					url('/fonts/ttf/NotoSansJP-Regular.ttf') format('ttf');
					font-weight: 400;
					font-style: normal;
				}
				@font-face {
					font-family: 'Noto Sans JP'
					src: url('/fonts/woff2/NotoSansJP-Medium.woff2') format('woff2'),
					url('/fonts/woff/NotoSansJP-Medium.woff') format('woff'),
					url('/fonts/ttf/NotoSansJP-Medium.ttf') format('ttf');
					font-weight: 500;
					font-style: normal;
				}

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Noto Sans JP', sans-serif;
                }

                html,
                body {
                    height: 100%;
                    width: 100%;
                }

                #__next {
                    min-height: 100%;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>

		</>
	);
};

export default Layout;
