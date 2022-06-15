import React from 'react';
import Swiper from './slider';
import MediaQuery from 'react-responsive';

const styles = {
    block: {
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '150px',
    },

    textbig: {
        fontSize: '2.25rem',
        fontWeight: '500',
    }
}

const stylesmin = {
    block: {
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '150px',
    },

    textbig: {
        fontSize: '1.7rem',
        fontWeight: '500',
    }
}
export default function PhotoSlider() {
    return (
        <div id = "Gallery">
            <MediaQuery minWidth={660}>
                <div style={styles.block}>
                    <p style={styles.textbig}>Фотогалерея</p>
                    <Swiper />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={659}>
                <div style={stylesmin.block}>
                    <p style={stylesmin.textbig}>Фотогалерея</p>
                    <Swiper />
                </div>
            </MediaQuery>
        </div>
    );
}