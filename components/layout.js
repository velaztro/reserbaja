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
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="True" />
				<link rel="dns-prefetch" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet"></link>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="En ReserBaja te ofrecemos servicios relacionados con seguridad automotriz, auto alarmas, cerrajeria automotriz, estereos y mas. En ReserBaja tu carro esta seguro."/>
				<meta property="og:image" content={`https://og-image.vercel.app/${encodeURI( siteTitle )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
				<meta name="og:title" content="ReserBaja | Seguridad Automotriz | Auto Alarmas | En Tijuana"/>
				<title>ReserBaja | Seguridad Automotriz | Auto Alarmas | En Tijuana</title>
			</Head>

			<header className={styles.header} id="blurHeader">
				<h1 className={styles.headerTitle}>ReserBaja</h1>
				<h5 className={styles.headerSubtitle}>SEGURIDAD AUTOMOTRIZ</h5>
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
