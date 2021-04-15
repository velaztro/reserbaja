import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import style from '../styles/Home.module.css'
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (

    <Layout home>

      <Head><title>{siteTitle}</title></Head>
      
      <Image width={550} height={420} alt="seguridad automotriz carro auto alarmas cerrajeria auto estereo auto carro car alarms car stereo car keys duplicate" src="/Images/index/car1.png" layout="responsive" />
      <section className={styles.section}>
        <p>
          En <strong>RESERBAJA</strong> te ofrecemos excelente calidad en servicios para tu carro, tales como: <strong>alarmas, cerrajeria, estereos, camaras y mas.</strong>
        </p>
        <br />
        <p>
          Nos ubicamos en <strong>Tijuana</strong>, en uno de los principales bulevares de la ciudad, <strong>Blvd. Federico Benitez.</strong>
        </p>
        <br />
        <p>
          Encuentras con nosotros marcas de alrmas como <strong>Viper, Pointer.</strong>
        </p>
      </section>


    </Layout >

  )
}

