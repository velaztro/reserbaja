import Layout from '../../components/Layout/layout'
import Image from "next/image";
import styles from '../../styles/alarmas.module.css'
import { PrismaClient } from "@prisma/client"
import Link from 'next/link';
import Head from "next/head";


const Alarmas = ({ alarmas }) => {

    return (
        <Layout>

            <Head>
                <title>Reser Baja - Alarma para tu carro</title>
                <meta name="description" content="En Reser Baja encuentra la mejor alarma para tu carro en Tijuana. En ReserBaja tu carro esta seguro." />
            </Head>

            <section className={styles.section}>
                <h1 className={styles.title}>Alarmas</h1>

                <div className={styles.wrap}>
                    {alarmas.map(alarma => (
                        <div className={styles.product} key={alarma.id}>
                            <div style={{ fontSize: '8vw' }}>
                                {alarma.title}
                            </div>
                            <div>
                                <Image src={alarma.image} width={450} height={350} />
                            </div>
                            <div style={{ fontSize: '6vw' }}>
                                Precio: ${alarma.price} USD
                            </div>
                            <Link href="/#/">
                                <a className={styles.btn} >Mas informacion</a>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* <ul>
                    {alarmas.map(alarma => (
                        <li key={alarma.id}>
                            { alarma.title }
                            { alarma.price }
                        </li>
                    ))}
                </ul> */}
            </section>

        </Layout>
    )
}

export default Alarmas

export async function getStaticProps(context) {
    const prisma = new PrismaClient()
    const alarmas = await prisma.alarmas.findMany()

    return {
        props: { alarmas }
    }
}