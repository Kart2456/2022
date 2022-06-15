import React from 'react';
import Plitka from './component';
import Clock from './clock.png';
import Camera from './cam.png';
import Urna from './urna.png';
import Doc from './doc.png';
import Home from './home.png';
import Location from './location.png';
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
        marginBottom: '40px'
    },

    plitka: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    
    grid: {
        marginBottom: '40px',
    }
}

const stylessr = {
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
        marginBottom: '40px'
    },

    plitka: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    
    grid: {
        marginBottom: '40px',
        fontSize: '2rem'
    }
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
        fontSize: '1.7rem',
        fontWeight: '500',
        marginBottom: '40px'
    },

    plitka: {
        display: 'grid',
        gridTemplateColumns: '1fr',
    },
    
    gridmin: {
        marginBottom: '40px',
        fontSize: '1rem'
    }
}
export default function Plus() {
    return (
        <div style={styles.block}>
            <MediaQuery minWidth={1000}>
            <p style={styles.textbig}>Почему нас выбирают?</p>
            <div style={styles.plitka}>
                <Plitka style={styles.grid} img={Location} text="Удобное расположение" textinfo="Мы находимся в черте города, поэтому к объектам легко добираться, как на общественном, так и на личном транспорте."/>
                <Plitka style={styles.grid} img={Camera} text="Круглосуточное видеонаблюдение и охрана" textinfo="Объекты охраняются круглосуточно, на всей территории ведется постоянное видеонаблюдение."/>
                <Plitka style={styles.grid} img={Clock} text="Доступ к объекту 24/7" textinfo="Возможность постоянного доступа. Вы можете воспользоваться своим объектом в любое время дня и ночи 365 дней в году. "/>
                <Plitka style={styles.grid} img={Doc} text="Прямой договор аренды" textinfo="Вы заключаете договор с собственником, без комиссии и посредников."/>
                <Plitka style={styles.grid} img={Home} text="Возможность получить юридический адрес" textinfo="Если Вам необходим юридический адрес для регистрации фирмы, Вы можете получить его при аренде офиса или склада."/>
                <Plitka style={styles.grid} img={Urna} text="Регулярная уборка помещений" textinfo="У нас всегда чисто — мы проводим уборку несколько раз в неделю."/>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={659} maxWidth={1000}>
            <p style={stylessr.textbig}>Почему нас выбирают?</p>
            <div style={stylessr.plitka}>
                <Plitka style={styles.grid} img={Location} text="Удобное расположение" textinfo="Мы находимся в черте города, поэтому к объектам легко добираться на общественном и личном транспорте."/>
                <Plitka style={styles.grid} img={Camera} text="Круглосуточное видеонаблюдение и охрана" textinfo="Объекты охраняются круглосуточно, на всей территории ведется постоянное видеонаблюдение."/>
                <Plitka style={styles.grid} img={Clock} text="Доступ к объекту 24/7" textinfo="Возможность постоянного доступа. Вы можете воспользоваться своим объектом в любое время дня и ночи 365 дней в году. "/>
                <Plitka style={styles.grid} img={Doc} text="Прямой договор аренды" textinfo="Вы заключаете договор с собственником, без комиссии и посредников."/>
                <Plitka style={styles.grid} img={Home} text="Возможность получить юридический адрес" textinfo="Если Вам необходим юридический адрес для регистрации фирмы, Вы можете получить его при аренде офиса или склада."/>
                <Plitka style={styles.grid} img={Urna} text="Регулярная уборка помещений" textinfo="У нас всегда чисто — мы проводим уборку несколько раз в неделю."/>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={659}>
            <p style={stylesmin.textbig}>Почему нас выбирают?</p>
            <div style={stylesmin.plitka}>
            <Plitka style={styles.grid} img={Location} text="Удобное расположение" textinfo="Мы находимся в черте города, поэтому к объектам легко добираться на общественном и личном транспорте."/>
                <Plitka style={styles.grid} img={Camera} text="Круглосуточное видеонаблюдение и охрана" textinfo="Объекты охраняются круглосуточно, на всей территории ведется постоянное видеонаблюдение."/>
                <Plitka style={styles.grid} img={Clock} text="Доступ к объекту 24/7" textinfo="Возможность постоянного доступа. Вы можете воспользоваться своим объектом в любое время дня и ночи 365 дней в году. "/>
                <Plitka style={styles.grid} img={Doc} text="Прямой договор аренды" textinfo="Вы заключаете договор с собственником, без комиссии и посредников."/>
                <Plitka style={styles.grid} img={Home} text="Возможность получить юридический адрес" textinfo="Если Вам необходим юридический адрес для регистрации фирмы, Вы можете получить его при аренде офиса или склада."/>
                <Plitka style={styles.grid} img={Urna} text="Регулярная уборка помещений" textinfo="У нас всегда чисто — мы проводим уборку несколько раз в неделю."/>
            </div>
            </MediaQuery>
        </div>
    );
}