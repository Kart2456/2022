import React from 'react';
import ostrov from './ostrov.svg'
import tg from './tg.png'
import MediaQuery from 'react-responsive'

const styles = {
    fon: {
        marginTop: '-4px',
        backgroundColor: '#0B132A',
        height: '170px',
        width: '100%',
    },

    block: {
        marginRight: '8.6%',
        marginLeft: '8.6%',
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    text: {
        color: '#FFFFFF',
    },

    img: {
        height: '36px',
        marginTop: '18px'
    },

    phone: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#F9F9F9',
        marginTop: '6px'
    },

    email: {
        textDecoration: 'none',
        fontSize: '1rem',
        color: '#F9F9F9'
    },
    
    geo: {
        color: '#F9F9F9',
        margin: '0',
        textAlign: 'left',
        marginTop: '12px'
    },

    dog: {
        color: '#F9F9F9',
        textAlign: 'left'
    },

    pc: {
        textDecoration: 'none',
        color: '#F9F9F9',
        height: '20px',
        marginTop: '16px',
        textAlign: 'right'
    },

    insta: {
        width: '36px',
        height: '36px',
        textAlign: 'right',
    },

    block1: {
        marginTop: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginRight: '8.6%',
        marginLeft: '8.6%',
    },

    block2: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginRight: '8.6%',
        marginLeft: '8.6%',
    },

    div: {
        textAlign: 'right'
    }

}

const stylesmin = {
    fon: {
        marginTop: '-4px',
        backgroundColor: '#0B132A',
        height: '350px',
        width: '100%',
    },

    block: {
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    text: {
        color: '#FFFFFF',
        textAlign: 'center',
    },

    img: {
        height: '36px',
        marginTop: '18px',
        textAlign: 'center',
    },

    phone: {
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#F9F9F9',
        marginTop: '20px',
        textAlign: 'center',
        marginBottom: '10px',
    },

    email: {
        textDecoration: 'none',
        fontSize: '1rem',
        color: '#F9F9F9',
        textAlign: 'center',
        marginBottom: '10px',
    },
    
    geo: {
        color: '#F9F9F9',
        margin: '0',
        textAlign: 'left',
        marginTop: '12px',
        textAlign: 'center',
        marginBottom: '20px',
    },

    dog: {
        color: '#F9F9F9',
        textAlign: 'left',
        textAlign: 'center',
    },

    pc: {
        textDecoration: 'none',
        color: '#F9F9F9',
        height: '20px',
        marginTop: '10px',
        textAlign: 'right',
        textAlign: 'center',
    },

    insta: {
        width: '36px',
        height: '36px',
        textAlign: 'center',
    },
}
export default function Footer() {
    return (
        <div>
            <MediaQuery minWidth={930}>
            <div style={styles.fon}> 
                <div style={styles.block}>
                    <img style={styles.img} src = {ostrov} />
                    <div style={styles.block1}>
                        <p style={styles.geo}>Ростов-на-Дону, ул. Лесопарковая, 23</p>
                        <a href="tel:88632985198" style = {styles.phone}>8 (863) 298-51-98</a>
                        <div style = {styles.div}>
                            <a href="https://t.me/arendaostrov"><img style={styles.insta} src = {tg} /></a>
                        </div>
                    </div>
                    <div style={styles.block2}>
                        <p style={styles.dog}>© 2022 АрендаОстов.</p>
                        <p style={styles.email}>ostrov009@mail.ru</p>
                        <a href="#" style = {styles.pc}>Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={929}>
            <div style={stylesmin.fon}> 
                <div style={stylesmin.block}>
                    <img style={stylesmin.img} src = {ostrov} />
                    <a href="tel:88632985198" style = {stylesmin.phone}>8 (863) 298-51-98</a>
                    <p style={stylesmin.geo}>Ростов-на-Дону, ул. Лесопарковая, 23</p>
                    <div style={stylesmin.div}><a href="https://t.me/arendaostrov"><img style={stylesmin.insta} src = {tg} /></a></div>
                    <p style={stylesmin.email}>ostrov009@mail.ru</p>
                    <p style={stylesmin.dog}>© 2022 АрендаОстов.</p>
                    <a href="#" style = {stylesmin.pc}>Политика конфиденциальности</a>
                </div>
            </div>
            </MediaQuery>
        </div>
    );
}