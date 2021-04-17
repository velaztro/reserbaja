import styles from "./toolbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'


const Toolbar = ({blur}) => {

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(true);
        setShowContact(false);
        document.getElementById('blurMain').style.filter = 'blur(10px)';
        document.getElementById('blurHeader').style.filter = 'blur(10px)';
        document.getElementById('blurFooter').style.filter = 'blur(10px)';
        document.body.style.overflow = 'hidden';
    }

    const [showContact, setShowContact] = useState(false);
    function toggleContact() {
        setShowContact(true);
        setShowMe(false);
        document.getElementById('blurMain').style.filter = 'blur(10px)';
        document.getElementById('blurHeader').style.filter = 'blur(10px)';
        document.getElementById('blurFooter').style.filter = 'blur(10px)';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        setShowMe(false);
        setShowContact(false);
        document.getElementById('blurMain').style.filter = 'none';
        document.getElementById('blurHeader').style.filter = 'none';
        document.getElementById('blurFooter').style.filter = 'none';
        document.body.style.overflow = 'initial';
    }
    

    return (

        <div className={styles.bottom}>

            <div id={styles.productsMenu} className={showMe ? styles.show : styles.hide}>
                <p className={styles.titleMenu}>Servicios y Productos <span onClick={closeMenu} className={styles.closeMenu}>&#10005;</span></p>
                <div className={styles.listArea}>
                    <div className={styles.listGroup}>
                        <Link href="/servicios/alarmas" passHref ><a onClick={closeMenu} className={styles.listMenu}>Alarmas</a></Link>
                        <a href="/#/" className={styles.listMenu}>Cerrajeria</a>
                        <a href="/#/" className={styles.listMenu}>Faros</a>
                        <a href="/#/" className={styles.listMenu}>Estereo</a>
                        <a href="/#/" className={styles.listMenu}>Camaras</a>
                    </div>
                </div>
            </div>

            <div id={styles.contactMenu} className={showContact ? styles.show : styles.hide}>
                <div className={styles.titleContact}>Contacto<span onClick={closeMenu} className={styles.closeMenu}>&#10005;</span></div>
                <div className={styles.listArea}>
                    <div className={styles.listGroup}>
                        <a target='_blank' rel='noopener' href="https://g.page/ReserBaja?share" className={styles.listMenu}> <Image alt="Ubicacion ReserBaja" className={styles.icons} src="/Images/menu/location.svg" width={50} height={50} />Ubicacion</a>
                        <a target='_blank' rel='noopener' href="https://api.whatsapp.com/send?phone=526642911263‬&text=¡Hola!%20Quisiera%20mas%20informacion%20de:%20" className={styles.listMenu}> <Image alt="Whatsapp ReserBaja" className={styles.icons} src="/Images/menu/whatsapp.svg" width={50} height={50} />WhatsApp</a>
                        <a href="tel:+529720474" className={styles.listMenu}> <Image alt="Celular Telefono ReserBaja" className={styles.icons} src="/Images/menu/phone.svg" width={50} height={50} /> Llamar</a>
                        <a href="mailto:reserbaja@gmail.com?subject=<COTIZACIÓN>" className={styles.listMenu}> <Image alt="Correo ReserBaja" className={styles.icons} src="/Images/menu/email.svg" width={50} height={50} />Correo</a>
                        <a href="/#/" className={styles.listMenu}> <Image alt="Cotizacion ReserBaja" className={styles.icons} src="/Images/menu/quotation.svg" width={50} height={50} />Cotizacion</a>
                        <a href="http://m.me/reserbaja?ref=webpage" className={styles.listMenu}> <Image alt="Messenger ReserBaja" className={styles.icons} src="/Images/menu/messenger.svg" width={50} height={50} />Messenger</a>
                    </div>
                </div>
            </div>

            <div className={styles.nav}>
                <Link href='/'>
                    <button onTouchStart={null} className={styles.navList} onClick={closeMenu}>
                        <Image alt="Inicio ReserBaja" src="/Images/home.svg" alt='pagina de inicio' width={30} height={30} />
                        <span>Inicio</span>
                    </button>
                </Link>
                <button onTouchStart={null} className={styles.navList} onClick={toggle} >
                    <Image alt="Alarmas estereos cerrajeria auto carro ReserBaja" src="/Images/product.svg" alt='menu de servicios' width={30} height={30} />
                    <span>Servicios</span>
                </button>
                <button onTouchStart={null} className={styles.navList} onClick={toggleContact} >
                    <Image alt="Contacto Informacion ReserBaja" src="/Images/contact.svg" alt='menu de contacto' width={30} height={30} />
                    <span>Contacto</span>
                </button>
            </div>

        </div>

    )
}

export default Toolbar
