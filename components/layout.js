import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
//import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from 'react'


export const siteTitle = "ReserBaja | Seguridad Automotriz";

const Layout = ({ children }) => {

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(true);
        setShowContact(false);
        setOpac(true);
    }

    const [showContact, setShowContact] = useState(false);
    function toggleContact() {
        setShowContact(true);
        setShowMe(false);
        setOpac(true);
    }

    function closeMenu() {
        setShowMe(false);
        setShowContact(false);
        setOpac(false);
    }

    const [opac, setOpac] = useState();


    return (
        <div className={styles.container} id={ opac ? styles.opacity : null}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Negocio de auto alarmas, cerrajeria automotriz, estereos y mas."
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
            </Head>

            <header className={styles.header}>
                <h1 className={styles.headerTitle}>ReserBaja</h1>
                <h2 className={styles.headerSubtitle}>SEGURIDAD AUTOMOTRIZ</h2>
            </header>

            <main>
                {children}
            </main>

            <div className={styles.bottom}>


                <div id={styles.productsMenu} className={showMe ? styles.show : null}>
                    <p className={styles.titleMenu}>Servicios y Productos <span onClick={closeMenu} className={styles.closeMenu}>&#10005;</span></p>
                    <div className={styles.listArea}>
                        <div className={styles.listGroup}>
                            <a href="/#/" className={styles.listMenu}>Alarmas</a>
                            <a href="/#/" className={styles.listMenu}>Cerrajeria</a>
                            <a href="/#/" className={styles.listMenu}>Faros</a>
                            <a href="/#/" className={styles.listMenu}>Estereo</a>
                            <a href="/#/" className={styles.listMenu}>Camaras</a>
                            <a href="/#/" className={styles.listMenu}>x</a>
                            <a href="/#/" className={styles.listMenu}>c</a>
                            <a href="/#/" className={styles.listMenu}>q</a>
                            <a href="/#/" className={styles.listMenu}>w</a>
                            <a href="/#/" className={styles.listMenu}>e</a>
                            <a href="/#/" className={styles.listMenu}>e</a>
                            <a href="/#/" className={styles.listMenu}>e</a>
                            <a href="/#/" className={styles.listMenu}>e</a>
                            <a href="/#/" className={styles.listMenu}>e</a>
                            <a href="/#/" className={styles.listMenu}>x</a>
                            <a href="/#/" className={styles.listMenu}>x</a>
                        </div>
                    </div>
                </div>

                <div id={styles.contactMenu} className={showContact ? styles.showContact : null}>
                    <div className={styles.titleContact}>Contacto<span onClick={closeMenu} className={styles.closeMenu}>&#10005;</span></div>
                    <div className={styles.listArea}>
                        <div className={styles.listGroup}>
                            <a target='_blank' rel='noopener' href="https://g.page/ReserBaja?share" className={styles.listMenu}> <Image alt="Ubicacion ReserBaja" className={styles.icons} src="/Images/menu/location.svg" width={50} height={50} />Ubicacion</a>
                            <a target='_blank' rel='noopener' href="https://api.whatsapp.com/send?phone=526642911263‬&text=¡Hola!%20Quisiera%20mas%20informacion%20de:%20" className={styles.listMenu}> <Image alt="Whatsapp ReserBaja" className={styles.icons} src="/Images/menu/whatsapp.svg" width={50} height={50} />WhatsApp</a>
                            <a href="tel:+529720474" className={styles.listMenu}> <Image alt="Celular Telefono ReserBaja" className={styles.icons} src="/Images/menu/phone.svg" width={50} height={50} /> Llamar</a>
                            <a href="mailto:reserbaja@gmail.com?subject=<COTIZACIÓN>" className={styles.listMenu}> <Image alt="Correo ReserBaja" className={styles.icons} src="/Images/menu/email.svg" width={50} height={50} />Correo</a>
                            <a href="/#/" className={styles.listMenu}> <Image alt="Cotizacion ReserBaja" className={styles.icons} src="/Images/menu/quotation.svg" width={50} height={50} />Cotizacion</a>
                            <a href="http://m.me/reserbaja?ref=webpage" className={styles.listMenu}> <Image alt="Messenger ReserBaja" className={styles.icons} src="/Images/menu/messenger.svg" width={50} height={50} />Messenger</a>
                            <a href="/#/" className={styles.listMenu}>c</a>
                            <a href="/#/" className={styles.listMenu}>q</a>
                            <a href="/#/" className={styles.listMenu}>w</a>
                            <a href="/#/" className={styles.listMenu}>e</a>
                        </div>
                    </div>
                </div>

                <div className={styles.nav}>
                    <Link href='/'>
                        <a className={styles.navList} onClick={closeMenu}>
                            <Image alt="Inicio ReserBaja" src="/Images/home.svg" alt='pagina de inicio' width={30} height={30} />
                            <span>Inicio</span>
                        </a>
                    </Link>
                    <a className={styles.navList} onClick={toggle} >
                        <Image alt="Alarmas estereos cerrajeria auto carro ReserBaja" src="/Images/product.svg" alt='menu de servicios' width={30} height={30} />
                        <span>Servicios</span>
                    </a>
                    <a className={styles.navList} onClick={toggleContact} >
                        <Image alt="Contacto Informacion ReserBaja" src="/Images/contact.svg" alt='menu de contacto' width={30} height={30} />
                        <span>Contacto</span>
                    </a>
                </div>

            </div>

            <style global jsx>
                {`
                * {
                    font-family: 'Poppins', sans-serif;
                }
                `}
            </style>

        </div>

    )
}

export default Layout
