import Layout from '../components/Layout/layout'
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";


export default function Home() {
	return (

		<Layout home>

			<Head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{
					__html: `
				{
					"@context": "https://schema.org",
					"@type": "AutoRepair",
					"name": "ReserBaja",
					"image": "https://scontent.ftij1-2.fna.fbcdn.net/v/t1.6435-9/121831665_1774147389415170_8025320505899116000_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeH5sb8Ls9Q7gQ5A4zNrCx3sehSQWJMxjwR6FJBYkzGPBFHPzRfB7UKC252RedVHiqoCtRGPmjUivOunoBOVHqQ-&_nc_ohc=D8O2S0g4kSUAX_5foza&_nc_ht=scontent.ftij1-2.fna&oh=39b7fda7687e6044f8a3caead3c83b2c&oe=60A609EF",
					"@id": "https://reserbaja.com",
					"url": "https://reserbaja.com",
					"telephone": "6642911263",
					"priceRange": "50-150",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "Blvd. Federico Benítez López #33 G",
						"addressLocality": "Tijuana",
						"postalCode": "22114",
						"addressCountry": "MX"
					},
					"review": {
							"@type": "Review",
							"reviewBody":"Tienen gran variedad de alarmas a costos muy accesibles y una instalación rápida eficiente.",
							"reviewRating": {
								"@type": "Rating",
								"ratingValue": "5",
								"bestRating": "5"
							},
							"author": {
								"@type": "Person",
								"name": "Hugo Cravioto"
							}
					},
					"geo": {
						"@type": "GeoCoordinates",
						"latitude": 32.4954715,
						"longitude": -116.95123
					},
					"openingHoursSpecification": [{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday"
						],
						"opens": "09:00",
						"closes": "18:00"
					},{
						"@type": "OpeningHoursSpecification",
						"dayOfWeek": "Saturday",
						"opens": "09:00",
						"closes": "15:00"
					}],
					"sameAs": [
						"https://www.facebook.com/reserbaja",
						"https://www.instagram.com/alarmasreserbaja/"
					] 
				}
				` }} />
			</Head>

			<section id={styles.land}>
				<div className={styles.image}>
					<Image width={525} height={350} priority="true" loading="eager" alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/land.jpg" />
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
				<h1 className={styles.titles}>Dicen de nosotros</h1>
			</section>


		</Layout >

	)
}

