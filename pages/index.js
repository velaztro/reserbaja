import Layout from '../components/layout'
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";


export default function Home() {
	return (

		<Layout home>

			<Head>
				<link
					rel="preload"
					href="/Image/index/land.jpg"
					as="image"
				/>
			</Head>

			<section id={styles.land}>
				<div className={styles.image}>
					<Image width={450} height={300} priority="true" loading="eager" alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/land.jpg" layout="responsive" />
				</div>
				<div className={styles.flexTitle}>
					<h2 className={styles.landTitle}>En <b style={{color: "#0e86ff"}}>RESERBAJA</b> tu carro esta seguro.</h2>
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.titles}>Nosotros</h2>
				<p className={styles.text}>
					En <strong>RESERBAJA</strong> te ofrecemos excelente calidad en servicios para tu carro, tales como: <strong>alarmas, cerrajeria, estereos, camaras y mas.</strong>
				</p>
				<Image className={styles.images} width={550} height={420} alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/car1.png" layout="responsive" />
				<p className={styles.text}>
					Nos ubicamos en <strong>Tijuana</strong>, en uno de los principales bulevares de la ciudad, <strong>Blvd. Federico Benitez.</strong>
				</p>
				<br />
			</section>

			<section className={styles.section}>
				<h2 className={styles.titles}>Lo que ofrecemos</h2>
				<p className={styles.text}>
					Encuentras con nosotros marcas de alarmas como <strong>Viper, Pointer.</strong>
				</p>
				<Image width={550} height={420} alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/car2.png" layout="responsive" />
			</section>

			<section className={styles.section}>
				<h1 className={styles.titles}>Dicen de nosotros</h1>
			</section>


		</Layout >

	)
}

