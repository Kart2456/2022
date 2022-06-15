import React from 'react';

const styles = {
    block: {
        marginBottom: '25px',
        width: '98%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        fontSize: '1.125rem',
        marginBottom: '15px',
        fontWeight: '500',
    },
    textinfo: {
        fontSize: '1rem',
        marginBottom: '15px',
    },

    img: {
        marginTop: '20px',
    }
}
export default function Plitka(props) {
    return (
        <div style={styles.block}>
            <img style={styles.img} src= {props.img} />
            <p style={styles.text}>{props.text}</p>
            <p style={styles.block}>{props.textinfo}</p>
        </div>
    );
}