import Layout from '../components/Layout/layout'
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function Home() {
	return (

		<Layout home>

			<section id={styles.land}>
				<div className={styles.image}>
					<Image width={525} height={350} priority layout="responsive" alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/land.jpg" />
				</div>
				<div className={styles.flexTitle}>
					<h2 className={styles.landTitle}>En <span>RESERBAJA</span> tu carro esta seguro.</h2>
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.titles}>Nosotros</h2>
				<p className={styles.text}>
					Nos ubicamos en <strong>Tijuana</strong>, en uno de los principales bulevares de la ciudad, <strong>Blvd. Federico Benitez.</strong>
				</p>
				<Image className={styles.images} width={550} height={420} alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/car1.png" layout="responsive" />
				<p className={styles.text}>
					En <strong>RESERBAJA</strong> te ofrecemos excelente calidad en servicios para tu carro, tales como: <strong>alarmas para carro, cerrajeria, estereos, camaras y mas.</strong>
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
				<h2 className={styles.titles}>Dicen de nosotros</h2>
			</section>

			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-GPMR08P54M"
				onLoad={() => {
					window.dataLayer = window.dataLayer || [];
					function gtag(){
						dataLayer.push(arguments);
					}
					gtag('js', new Date());
					gtag('config', 'G-GPMR08P54M');
				}}
			/>

		</Layout >

	)
}

