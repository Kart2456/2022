import React from 'react';
import Fon from './blockfon.png';
import './Block.css';
import MediaQuery from 'react-responsive'




const styles = {
    OneBlock: {
        margin: 0,
        backgroundColor: '#666',
        position: 'relative',
    },

    fon: {
        backgroundImage: `url(${Fon})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        width: '100%',
        height: '440px',
        backgroundColor: '#666',
    },

    TextPlusButton: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },

    textbig: {
        fontSize: '2.25rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '0px'
    },

    textbig2: {
        fontSize: '2.25rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '10px'
        
    },

    small: {
        fontSize: '1.125rem',
        fontWeight: '400',
        color: '#F2F2F2',
        margin: 0,
    },

    contact: {
        background: 'linear-gradient(to bottom right, #4474F0, #4F84EB)',
        color: '#F2F2F2',
        fontSize: '1.125rem',
        fontWeight: '500' ,
        padding: '18px 42px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik'
    },

    price: {
        marginTop: '35px',
        marginLeft: '32px',
        background: 'linear-gradient(to bottom right, #F5560B, #F98703)',
        color: '#F2F2F2',
        fontWeight: '500' ,
        fontSize: '1.125rem',
        padding: '18px 48px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik'
    },

}

const stylesbrother = {
    OneBlock: {
        margin: 0,
        backgroundColor: '#666',
        position: 'relative',
    },

    fon: {
        backgroundImage: `url(${Fon})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        width: '100%',
        height: '440px',
        backgroundColor: '#666',
    },

    TextPlusButton: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },

    textbig: {
        fontSize: '2rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '0px'
    },

    textbig2: {
        fontSize: '2rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '10px'
        
    },

    small: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#F2F2F2',
        margin: 0,
    },

    contact: {
        background: 'linear-gradient(to bottom right, #4474F0, #4F84EB)',
        color: '#F2F2F2',
        fontSize: '1rem',
        fontWeight: '500' ,
        padding: '18px 42px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik'
    },

    price: {
        marginTop: '35px',
        marginLeft: '32px',
        background: 'linear-gradient(to bottom right, #F5560B, #F98703)',
        color: '#F2F2F2',
        fontWeight: '500' ,
        fontSize: '1rem',
        padding: '18px 48px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik'
    },

}

const stylesbrotherdva = {
    OneBlock: {
        margin: 0,
        backgroundColor: '#666',
        position: 'relative',
    },

    fon: {
        backgroundImage: `url(${Fon})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        width: '100%',
        height: '86vh',
        backgroundColor: '#666',
    },

    TextPlusButton: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        flexFlow: 'column'
    },

    textbig: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '0px'
    },

    textbig2: {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '10px'
        
    },

    small: {
        fontSize: '0.95rem',
        fontWeight: '400',
        color: '#F2F2F2',
        margin: 0,
    },

    contact: {
        marginTop: '30px',
        background: 'linear-gradient(to bottom right, #4474F0, #4F84EB)',
        color: '#F2F2F2',
        fontSize: '1rem',
        fontWeight: '500' ,
        padding: '18px 42px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik'
    },

    price: {
        marginTop: '30px',
        background: 'linear-gradient(to bottom right, #F5560B, #F98703)',
        color: '#F2F2F2',
        fontWeight: '500' ,
        fontSize: '1rem',
        padding: '18px 48px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik'
    },

}

const stylesbrothertri = {
    OneBlock: {
        margin: 0,
        backgroundColor: '#666',
        position: 'relative',
    },

    fon: {
        backgroundImage: `url(${Fon})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        width: '100%',
        height: '88vh',
        backgroundColor: '#666',
        flexFlow: 'column'
    },

    TextPlusButton: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        flexFlow: 'column',
        
    },

    textbig: {
        fontSize: '1.7rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '0px'
    },

    textbig2: {
        fontSize: '1.7rem',
        fontWeight: '500',
        color: '#F2F2F2',
        margin: 0,
        marginBottom: '10px'
        
    },

    small: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#F2F2F2',
        margin: 0,
    },

    contact: {
        marginLeft: '15px',
        marginRight: '15px',
        width: '224px',
        marginTop: '30px',
        background: 'linear-gradient(to bottom right, #4474F0, #4F84EB)',
        color: '#F2F2F2',
        fontSize: '1rem',
        fontWeight: '500' ,
        padding: '18px 42px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik',
    },

    price: {
        marginLeft: '15px',
        marginRight: '15px',
        width: '224px',
        marginTop: '30px',
        background: 'linear-gradient(to bottom right, #F5560B, #F98703)',
        color: '#F2F2F2',
        fontWeight: '500' ,
        fontSize: '1rem',
        padding: '18px 48px',
        display: 'inline',
        borderRadius: '5px',
        border: 'none',
        textAlign: 'center',
        fontFamily: 'Rubik',

    },

}

export default function Block() {
    return (
        <div style={styles.OneBlock}>
            <MediaQuery minWidth={434} maxWidth={505}>
            <div style={stylesbrothertri.fon}>
                <div style={stylesbrothertri.TextPlusButton}>
                        <p style={stylesbrothertri.textbig}>Ответственное хранение</p>
                        <p style={stylesbrothertri.textbig2}>в Ростове-на-Дону</p>
                        <button onClick={() => window.location.replace("/#Contact")} className="contactbotton" style={stylesbrothertri.contact}>Связаться с нами</button>
                        <button onClick={() => window.location.replace("/#Price")} className="contactbotton2" style={stylesbrothertri.price}>Смотреть прайс</button>
                </div>
            </div> 
            </MediaQuery>
            <MediaQuery minWidth={320} maxWidth={433}>
            <div style={stylesbrotherdva.fon}>
                <div style={stylesbrotherdva.TextPlusButton}>
                        <p style={stylesbrotherdva.textbig}>Аренда коммерческой недвижимости</p>
                        <p style={stylesbrotherdva.textbig2}>в Ростове-на-Дону</p>
                        <button onClick={() => window.location.replace("/#Contact")} className="contactbotton" style={stylesbrotherdva.contact}>Связаться с нами</button>
                        <button onClick={() => window.location.replace("/#Price")} className="contactbotton2" style={stylesbrotherdva.price}>Смотреть прайс</button>
                </div>
            </div> 
            </MediaQuery>
            <MediaQuery minWidth={506} maxWidth={551}>
            <div style={stylesbrother.fon}>
                <div style={styles.TextPlusButton}>
                        <p style={stylesbrother.textbig}>Аренда коммерческой недвижимости</p>
                        <p style={stylesbrother.textbig2}>в Ростове-на-Дону</p>
                        <button onClick={() => window.location.replace("/#Contact")} className="contactbotton" style={stylesbrother.contact}>Связаться с нами</button>
                        <button onClick={() => window.location.replace("/#Price")}  className="contactbotton2" style={stylesbrother.price}>Смотреть прайс</button>
                </div>
            </div> 
            </MediaQuery>
            <MediaQuery minWidth={552}>
            <div style={styles.fon}>
                <div style={styles.TextPlusButton}>
                        <p style={styles.textbig}>Аренда коммерческой недвижимости</p>
                        <p style={styles.textbig2}>в Ростове-на-Дону</p>
                        <button onClick={() => window.location.replace("/#Contact")} className="contactbotton" style={styles.contact}>Связаться с нами</button>
                        <button onClick={() => window.location.replace("/#Price")} className="contactbotton2" style={styles.price}>Смотреть прайс</button>
                </div>
            </div> 
            </MediaQuery>
        </div>
    );
}