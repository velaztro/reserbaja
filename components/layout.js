import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
//import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";
import Toolbar from "./Toolbar/Toolbar";

export const siteTitle =
	"ReserBaja | Seguridad Automotriz | Auto Alarmas | En Tijuana";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>ReserBaja | Seguridad Automotriz | Auto Alarmas | En Tijuana</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="En ReserBaja te ofrecemos servicios relacionados con seguridad automotriz, auto alarmas, cerrajeria automotriz, estereos y mas. En ReserBaja tu carro esta seguro." />
			</Head>

			<header className={styles.header} id="blurHeader">
				<h1 className={styles.headerTitle}>ReserBaja</h1>
				<span className={styles.headerSubtitle}>SEGURIDAD AUTOMOTRIZ</span>
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
                    height: 100%;
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
