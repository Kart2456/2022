import React from 'react';
import map from './map2.png';
import map2 from './map3.png';
import MediaQuery from 'react-responsive'


const styles = {
    map: {
        marginTop: '200px',
        backgroundImage: `url(${map})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        width: '100%',
        height: '100vh',
    },
}

const stylesmin = {
    map: {
        marginTop: '200px',
        backgroundImage: `url(${map2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        width: '100%',
        height: '50vh',
    },
}

export default function Map() {
    return (
        <div >
            <MediaQuery minWidth={930}>
                <a href="https://www.google.com/maps/place/%D0%9B%D0%B5%D1%81%D0%BE%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F+%D1%83%D0%BB.,+23,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+344041/@47.227506,39.6528861,17z/data=!3m1!4b1!4m5!3m4!1s0x40e3b8c1601b0ff3:0x4392d39f78b22822!8m2!3d47.227506!4d39.6550748"><img style={styles.map} /></a>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={929}>
                <a href="https://www.google.com/maps/place/%D0%9B%D0%B5%D1%81%D0%BE%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B0%D1%8F+%D1%83%D0%BB.,+23,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83,+%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+344041/@47.227506,39.6528861,17z/data=!3m1!4b1!4m5!3m4!1s0x40e3b8c1601b0ff3:0x4392d39f78b22822!8m2!3d47.227506!4d39.6550748"><img style={stylesmin.map} /></a>
            </MediaQuery>
        </div>
    );
}

