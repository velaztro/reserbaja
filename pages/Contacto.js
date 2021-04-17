
import styles from "../components/Toolbar/toolbar.module.css";
import Image from "next/image";
import Layout from "../components/layout";
import Head from "next/head";


const Contacto = () => {
    return (
        <Layout contacto>
            <Head />
            <h1></h1>
            <div id="wrapper">
                <a target='_blank' rel='noopener' href="https://g.page/ReserBaja?share" className={styles.listMenu}> <Image alt="Ubicacion ReserBaja" className={styles.icons} src="/Images/menu/location.svg" width={50} height={50} />Ubicacion</a>
                <a target='_blank' rel='noopener' href="https://api.whatsapp.com/send?phone=526642911263‬&text=¡Hola!%20Quisiera%20mas%20informacion%20de:%20" className={styles.listMenu}> <Image alt="Whatsapp ReserBaja" className={styles.icons} src="/Images/menu/whatsapp.svg" width={50} height={50} />WhatsApp</a>
                <a href="tel:+529720474" className={styles.listMenu}> <Image alt="Celular Telefono ReserBaja" className={styles.icons} src="/Images/menu/phone.svg" width={50} height={50} /> Llamar</a>
                <a href="mailto:reserbaja@gmail.com?subject=<COTIZACIÓN>" className={styles.listMenu}> <Image alt="Correo ReserBaja" className={styles.icons} src="/Images/menu/email.svg" width={50} height={50} />Correo</a>
                <a href="/#/" className={styles.listMenu}> <Image alt="Cotizacion ReserBaja" className={styles.icons} src="/Images/menu/quotation.svg" width={50} height={50} />Cotizacion</a>
                <a href="http://m.me/reserbaja?ref=webpage" className={styles.listMenu}> <Image alt="Messenger ReserBaja" className={styles.icons} src="/Images/menu/messenger.svg" width={50} height={50} />Messenger</a>
            </div>

            <style jsx>{`
            #wrapper {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                margin-top: 5%
            }
            `}</style>
        </Layout>
    )
}

export default Contacto
