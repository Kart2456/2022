import React from 'react';
import MediaQuery from 'react-responsive'

const styles = {
    block: {
        marginRight: '8.6%',
        marginLeft: '8.6%',
        textAlign: 'center',
        marginTop: '150px',
        marginBottom: '150px',
    },

    textbig: {
        fontSize: '2.25rem',
        fontWeight: '500',
    },

    textsmall: {
        fontSize: '1.125rem',
    }
}

const stylesbig = {
    block: {
        marginRight: '8.6%',
        marginLeft: '8.6%',
        textAlign: 'center',
        marginTop: '150px',
        marginBottom: '150px',
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    textbig: {
        fontSize: '2.25rem',
        fontWeight: '500',

    },

    textsmall: {
        fontSize: '1.125rem',
    },
}

const stylesmin = {
    block: {
        marginRight: '8.6%',
        marginLeft: '8.6%',
        textAlign: 'center',
        marginTop: '150px',
        marginBottom: '150px',
    },

    textbig: {
        marginTop: '150px',
        fontSize: '1.7rem',
        fontWeight: '500',
    },

    textsmall: {
        fontSize: '1.125rem',
        marginRight: '8.6%',
        marginLeft: '8.6%',
    }
}

export default function Inform() {
    return (   
        <div id = "AboutCompany">
            <MediaQuery minWidth={1501}>
            <div style={stylesbig.block}>
                <p style={stylesbig.textbig}>О компании</p>
                <p style={stylesbig.textsmall}>ИП «Остриков» осуществляет свою деятельность на рынке недвижимости с 1994 года и является одной из самых крупных частных компаний в Ростове-на-Дону.</p>
                <p style={stylesbig.textsmall}>Основные направления деятельности компании - предоставление в аренду офисных помещений, отапливаемых и неотапливаемых складов. Всего в девелоперском портфеле компании — 15 тыс. кв. м. коммерческой недвижимости. В настоящее время компанией сдано в эксплуатацию более 12 тыс. кв. м.</p>
                <p style={stylesbig.textsmall}></p>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={659} maxWidth={1500}>
            <div style={styles.block}>
                <p style={styles.textbig}>О компании</p>
                <p style={styles.textsmall}>ИП «Остриков» осуществляет свою деятельность на рынке недвижимости с 1994 года и является одной из самых крупных частных компаний в Ростове-на-Дону.</p>
                <p style={styles.textsmall}>Основные направления деятельности компании - предоставление в аренду офисных помещений, отапливаемых и неотапливаемых складов. Всего в девелоперском портфеле компании — 15 тыс. кв. м. коммерческой недвижимости. В настоящее время компанией сдано в эксплуатацию более 12 тыс. кв. м.</p>
                <p style={styles.textsmall}></p>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={659}>
                <p style={stylesmin.textbig}>О компании</p>
                <p style={stylesmin.textsmall}>ИП «Остриков» осуществляет свою деятельность на рынке недвижимости с 1994 года и является одной из самых крупных частных компаний в Ростове-на-Дону.</p>
                <p style={stylesmin.textsmall}>Основные направления деятельности компании - предоставление в аренду офисных помещений, отапливаемых и неотапливаемых складов. Всего в девелоперском портфеле компании — 15 тыс. кв. м. коммерческой недвижимости. В настоящее время компанией сдано в эксплуатацию более 12 тыс. кв. м.</p>
                <p style={stylesmin.textsmall}></p>
            </MediaQuery>
        </div> 
    );
}