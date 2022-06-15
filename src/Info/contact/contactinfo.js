import React from 'react';
import Map from './map';
import clock from './clock.png';
import email from './email.png';
import location from './location.png';
import phone from './phone.png';
import Plitka from './plitka.js';
import MediaQuery from 'react-responsive'

const styles = {
    block: {
        marginTop: '150px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    fon: {
        marginTop: '30px',
        width: '320px',
        height: '350px',
        backgroundColor: '#FDFDFD',
        borderRadius: '12px',
        boxShadow: '0 5px 13px #E3E3E3',
        paddingBottom: '22px',
        position: 'absolute',
        backgroundColor: '#F9f9f9',
        left: 'auto',
        right: 'auto',
        margin: '0 auto',
        left: '0',
        right: '0',
        transform: 'translateY(90%)'
    },

    name: {
        fontWeight: '500',
        fontSize: '1.25rem',
        margin: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '40px',
    },

    text: {
        margin: '0',
    },

    blue: {
        color: '#4879EF',
        margin: '0',
    },

    red: {
        color: '#F97C05',
        margin: '0',
    },

    grid: {
        marginTop: '50px',
        textAlign: 'left',
        display: 'flex',
        textAlign: 'left',
    },
}

const stylesmin = {
    fon: {
        marginTop: '30px',
        width: '320px',
        height: '350px',
        backgroundColor: '#FDFDFD',
        borderRadius: '12px',
        paddingBottom: '22px',
        backgroundColor: '#F9f9f9',
        textAlign: 'center',
        paddingBottom: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    name: {
        fontWeight: '500',
        fontSize: '1.7rem',
        margin: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '40px',
        marginBottom: '20px'
    },

    text: {
        margin: '0',
    },

    blue: {
        color: '#4879EF',
        margin: '0',
    },

    red: {
        color: '#F97C05',
        margin: '0',
    },

    grid: {
        marginTop: '50px',
        textAlign: 'left',
        display: 'flex',
        textAlign: 'left',
    },
}

export default function Contact() {
    return (
        <div id = "Contact" style={styles.block}>
            <MediaQuery minWidth={930}>
                <div style={styles.fon}>
                    <div style={styles.name}>
                        <p style={styles.text}>Как до нас <span style={styles.blue}>добраться</span> и</p>
                        <p style={styles.text}>как с нами <span style={styles.red}>связаться</span></p>
                    </div>
                    <Plitka style={styles.grid} img={phone} text="8 (863) 298-51-98"/>
                    <Plitka style={styles.grid} img={email} text="ostrov009@mail.ru"/>
                    <Plitka style={styles.grid} img={clock} text="Работаем Пн-Пт: 9:00-18:00"/>
                    <Plitka style={styles.grid} img={location} text="Ростов-на-Дону, ул. Лесопарковая, 23"/>
                </div>
                <Map />
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={929}>
                <div style={stylesmin.fon}>
                    <div style={stylesmin.name}>
                        <p style={stylesmin.text}>Как до нас <span style={styles.blue}>добраться</span> и</p>
                        <p style={stylesmin.text}>как с нами <span style={styles.red}>связаться</span></p>
                    </div>
                    <Plitka style={stylesmin.grid} img={phone} text="8 (863) 298-51-98"/>
                    <Plitka style={stylesmin.grid} img={email} text="ostrov009@mail.ru"/>
                    <Plitka style={stylesmin.grid} img={clock} text="Работаем Пн-Пт: 9:00-18:00"/>
                    <Plitka style={stylesmin.grid} img={location} text="Ростов-на-Дону, ул. Лесопарковая, 23"/>
                </div>
                <Map />
            </MediaQuery>
        </div>
    );
}