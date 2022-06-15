import React from 'react';
import PlitkaPrice from './component'
import './infoprice.css'
import testbigimg from './testbigimg.png';
import miniimgg from './image.png';
import MediaQuery from 'react-responsive'

const styles = {
    nameblock: {
        fontSize: '2.25rem',
        fontWeight: '500',
        textAlign: 'center',
    },

    vibor: {
        gridTemplateColumns: '1fr 1fr 1fr',
        textAlign: 'center',
    },

    knopka2: {
        marginLeft: '30px',
        marginRight: '30px',
    }
}
const stylessr = {
    nameblock: {
        fontSize: '2.25rem',
        fontWeight: '500',
        textAlign: 'center',
    },

    vibor: {
        textAlign: 'center',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    knopka2: {
        margin: '0',
        marginBottom: '15px',
        marginTop: '15px',
    }
}

const stylesmin = {
    nameblock: {
        fontSize: '1.7rem',
        fontWeight: '500',
        textAlign: 'center',
    },

    vibor: {
        textAlign: 'center',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    knopka2: {
        margin: '0',
        marginBottom: '15px',
        marginTop: '15px',
    }
}


export default function Price() {
    return (
        <div id = "Price">
            <MediaQuery minWidth={1101}>
                <p style={styles.nameblock}>Прайс</p>
                <div style={styles.vibor}>
                    <button className="knopka">Складские площадки</button>
                    <button className="knopka" style={styles.knopka2}>Крытые склады</button>
                    <button className="knopka">Офисные помещения</button>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={659} maxWidth={1100}>
                <p style={stylessr.nameblock}>Прайс</p>
                <div style={stylessr.vibor}>
                    <button className="knopka">Складские площадки</button>
                    <button className="knopka" style={stylessr.knopka2}>Крытые склады</button>
                    <button className="knopka">Офисные помещения</button>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={659}>
                <p style={stylesmin.nameblock}>Прайс</p>
                <div style={stylesmin.vibor}>
                    <button className="knopka">Складские площадки</button>
                    <button className="knopka" style={stylesmin.knopka2}>Крытые склады</button>
                    <button className="knopka">Офисные помещения</button>
                </div>
            </MediaQuery>
                <PlitkaPrice img={testbigimg} name="Площадка №15, площадь 1500 м²" price="80" info="Возможно хранение различных габаритных, крупногабаритных объектов, материалов, техники и др. Покрытие площадки твердое, грунтощебеночное. Открытая складская площадка расположена на территории АО Оборонпромкомплекс (Ростов-на-Дону, ул. Доватора, 154/1)." miniimg={miniimgg}/>
                <PlitkaPrice img={testbigimg} name="Площадка №15, площадь 1500 м²" price="80" info="Возможно хранение различных габаритных, крупногабаритных объектов, материалов, техники и др. Покрытие площадки твердое, грунтощебеночное. Открытая складская площадка расположена на территории АО Оборонпромкомплекс (Ростов-на-Дону, ул. Доватора, 154/1)." miniimg={miniimgg}/>
                <PlitkaPrice img={testbigimg} name="Площадка №15, площадь 1500 м²" price="80" info="Возможно хранение различных габаритных, крупногабаритных объектов, материалов, техники и др. Покрытие площадки твердое, грунтощебеночное. Открытая складская площадка расположена на территории АО Оборонпромкомплекс (Ростов-на-Дону, ул. Доватора, 154/1)." miniimg={miniimgg}/>
        </div>
        
    );
}