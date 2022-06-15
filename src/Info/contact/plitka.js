import React from 'react';

const styles = {
    block: {
        marginTop: '20px',
        marginLeft: '30px',
        fontSize: '1rem',
        marginBottom: '25px',
        color: '#3D4454',
        display: 'flex',
        alignItems: 'center'
    },

    img: {
        height: '36px'
    },

    text: {
        margin: '0',
        marginLeft: '9px',
        textAlign: 'left',
    }
}
export default function Plitka(props) {
    return (
        <div style={styles.block}>
            <img style={styles.img} src= {props.img} />
            <p style={styles.text}>{props.text}</p>
        </div>
    );
}