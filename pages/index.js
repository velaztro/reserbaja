import Layout from '../components/Layout/layout'
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Head from 'next/head';
import Pic from '../public/Images/index/land.jpg'
import Car1 from "../public/Images/index/car1.png"
import Car2 from "../public/Images/index/car2.png"


export default function Home() {
	return (

		<Layout home>

			<Head>
				<link rel="apple-touch-icon" type='image/png' sizes="180x180" href="/favicons/apple-touch-icon.png?v=Gv6nAlj7bz" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=Gv6nAlj7bz" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=Gv6nAlj7bz" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=Gv6nAlj7bz" color="#5bbad5" />
				<link rel="shortcut icon" href="/favicons/favicon.ico?v=Gv6nAlj7bz" />
				<meta name="theme-color" content="#f4f4f4" />
			</Head>

			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-GPMR08P54M"
				onLoad={() => {
					window.dataLayer = window.dataLayer || [];
					function gtag() {
						dataLayer.push(arguments);
					}
					gtag('js', new Date());
					gtag('config', 'G-GPMR08P54M');
				}}
			/>

			<section id={styles.land}>
				<div className={styles.image}>
					<Image src={Pic} priority layout="responsive" alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" />
				</div>
				<div className={styles.flexTitle}>
					<h2 className={styles.landTitle}>En <span>RESERBAJA</span> tu carro esta seguro.</h2>
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.titles}>Nosotros</h2>
				<div className={styles.nosotros}>
					<p className={styles.text}>
						Nos ubicamos en <strong>Tijuana</strong>, en uno de los principales bulevares de la ciudad, <strong>Blvd. Federico Benitez.</strong>
					</p>
					<Image src={Car1} className={styles.images} alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" />
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.titles}>Lo que ofrecemos</h2>
				<div className={styles.ofrecemos}>
					<p className={styles.text}>
						En <strong>RESERBAJA</strong> te ofrecemos excelente calidad en servicios para tu carro, tales como: <strong>alarmas para carro, cerrajeria, estereos, camaras y mas.</strong><br /><br />
						Encuentras con nosotros marcas de alarmas como <strong>Viper, Pointer.</strong>
					</p>
					<Image alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src={Car2} />
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.titles}>Dicen de nosotros</h2>
			</section>

		</Layout >

	)
}

