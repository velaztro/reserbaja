import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import Toolbar from "../Toolbar/Toolbar";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>ReserBaja | Seguridad Automotriz | Alarma para Carro | En Tijuana</title>
				<link rel="icon" type="image/png" href="/favicon.png" />
				<meta name="description" content="En ReserBaja te ofrecemos servicios relacionados con seguridad para tu carro, alarma para carro, cerrajeria automotriz, GPS, estereos y mas. En ReserBaja tu carro esta seguro." />
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
		</div>
	);
};

export default Layout;
