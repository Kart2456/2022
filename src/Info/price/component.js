import React, { useRef } from 'react';
import MediaQuery from 'react-responsive'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import close from './close.svg'

const styles = {
  fon: {
    marginTop: '30px',
    width: '1100px',
    backgroundColor: '#FDFDFD',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '12px',
    boxShadow: '0 5px 13px #E3E3E3',
    display: 'flex',
    paddingBottom: '22px',
  },

  img: {
    textAlign: 'left',
    marginRight: '2%',
    marginLeft: '2%',
    marginTop: '2%',
    width: '302px',
    borderRadius: '5px'
  },

  block: {
    width: '740px',
    margin: 0,
  },

  name: {
    color: '#0B132A',
    fontSize: '1.5rem',
    fontWeight: '500',
    marginBottom: '10px'
  },

  price: {
    color: '#0B132A',
    fontSize: '1.125rem',
    fontWeight: '500',
    margin: 0,
    marginBottom: '10px'
  },

  info: {
    color: '#3C4454',
    fontSize: '1rem',
    margin: 0,
    marginBottom: '10px'
  },

  cena: {
    color: '#F76A08',
    fontSize: '1.125rem',
    fontWeight: '500',
    margin: 0,
  },

  miniimg: {
    marginRight: '12px',
    alignSelf: 'center',
    marginRight: '8px',
    marginBottom: '5px',
    width: '176px',
    borderRadius: '5px',
  },

  button: {
    border: 'none',
    backgroundColor: '#FFF',
    padding: '0px',
    color: '#4F84EB',
    fontSize: '1rem',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Rubik',
    marginRight: '-8px'
  },

  pop: {
    textAlign: 'right',
    marginRight: '8px',

  },

  cl: {
    width: '36px'
  },

  cont: {
    display: 'flex',
    flexFlow: 'column',
    marginLeft: '10px'
  },

  popup: {
    textAlign: 'center',
  }
}

const stylessr = {
  dve: {
    display: 'flex',
    marginLeft: '10%',
    marginRight: '10%',
  },

  fon: {
    marginTop: '30px',
    width: '350px',
    backgroundColor: '#FDFDFD',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '12px',
    boxShadow: '0 3px 7px #E3E3E3',
    textAlign: 'center',
  },

  img: {
    margin: '5%',
    marginBottom: '0px',
    width: '302px',
    borderRadius: '5px',
  },

  block: {
    margin: 0,
  },

  name: {
    marginTop: '18px',
    marginBottom: '0px',
    color: '#0B132A',
    fontSize: '1.5rem',
    fontWeight: '500',
    marginBottom: '0px',
    margin: '6%',
    textAlign: 'left',
  },

  price: {
    color: '#0B132A',
    fontSize: '1.125rem',
    fontWeight: '500',
    margin: 0,
    marginBottom: '10px',
    margin: '6%',
    textAlign: 'left',
    marginTop: '10px',
  },

  info: {
    marginTop: '20px',
    color: '#3C4454',
    fontSize: '1rem',
    margin: 0,
    marginBottom: '10px',
    margin: '6%',
    textAlign: 'left',
  },

  cena: {
    color: '#F76A08',
    fontSize: '1.125rem',
    fontWeight: '500',
    margin: 0,
  },

  miniimg: {
    marginRight: '12px',
    alignSelf: 'center',
    marginRight: '8px',
    marginBottom: '5px'
  },

  cnopka: {
    border: 'none',
    fontSize: '1rem',
    color: '#959595',
    width: '250px',
    background: '#4F84EB',
    color: '#F2F2F2',
    padding: '18px 26px',
    display: 'inline',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Rubik',
    margin: '5%',
    marginTop: '2%',
  },
}

const stylesmin = {
  dve: {
    display: 'flex',
    marginLeft: '10%',
    marginRight: '10%',
  },

  fon: {
    marginTop: '30px',
    width: '310px',
    backgroundColor: '#FDFDFD',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '12px',
    boxShadow: '0 3px 7px #E3E3E3',
    textAlign: 'center',
  },

  img: {
    margin: '4%',
    marginBottom: '0px',
    width: '90%',
    borderRadius: '5px',
  },

  block: {
    margin: 0,
  },

  name: {
    marginTop: '18px',
    marginBottom: '0px',
    color: '#0B132A',
    fontSize: '1.25rem',
    fontWeight: '500',

    margin: '6%',
    textAlign: 'left',
  },

  price: {
    color: '#0B132A',
    fontSize: '1rem',
    fontWeight: '500',
    margin: 0,
    marginBottom: '10px',
    margin: '6%',
    textAlign: 'left',
    marginTop: '10px',
  },

  info: {
    marginTop: '20px',
    color: '#3C4454',
    fontSize: '0.95rem',
    margin: 0,
    marginBottom: '10px',
    margin: '6%',
    textAlign: 'left',
  },

  cena: {
    color: '#F76A08',
    fontSize: '1rem',
    fontWeight: '500',
    margin: 0,
  },

  miniimg: {
    marginRight: '12px',
    alignSelf: 'center',
    marginRight: '8px',
    marginBottom: '5px'
  },

  cnopka: {
    border: 'none',
    fontSize: '1rem',
    color: '#959595',
    width: '250px',
    background: '#4F84EB',
    color: '#F2F2F2',
    padding: '18px 26px',
    display: 'inline',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Rubik',
    margin: '5%',
    marginTop: '2%',
  }
}

function MiniImages(props) {
  let count = 0;
  const image = props.imgs.map(img => {
    count += 1;
    if (count > 1) {
      return (
        <img style={styles.miniimg} src={img.image} />
      )
    } else {
      return (null)
    }
  });
  return (
    <div>
      {image}
    </div>
  )
}


export default function PlitkaPrice(props) {
  const ref = useRef();
  const contentStyle = { width: '200px' };
  const closeTooltip = () => ref.current.close();
  const PopupExample = (pprops) => {
    return (
      <Popup ref={ref} contentStyle={contentStyle} trigger={<button style={pprops.style}>Больше фото</button>} position="middle center" arrow={false}>
        <div>
          <div style={styles.popup}>
            <div style={styles.pop}>
              <button type="button" style={styles.button} onClick={closeTooltip}><img style={styles.cl} src={close} /></button>
            </div>
            <div style={styles.cont}>
              {(props.amount >= 2) &&
                <MiniImages imgs={props.miniimg} />
              }
            </div>
          </div>
        </div>
      </Popup>
    )
  };
  return (
    <div>
      <MediaQuery minWidth={1101}>

        <div style={styles.fon}>
          {(props.amount >= 1) &&
            <img style={styles.img} src={props.img} />
          }
          <div style={styles.block}>
            <p style={styles.name}>{props.name}</p>
            <p style={styles.price}>Аренда площадки: от <span style={styles.cena}>{props.price}</span> руб/м2 в месяц (в т.ч. НДС 20%)</p>
            <p style={styles.info}>{props.info}</p>
            {(props.amount >= 2) &&
              <MiniImages imgs={props.miniimg} />
            }
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={930} maxWidth={1100}>
        <div style={stylessr.fon}>
          {(props.amount >= 1) &&
            <img style={stylessr.img} src={props.img} />
          }
          <div style={stylessr.block}>
            <p style={stylessr.name}>{props.name}</p>
            <p style={stylessr.price}>Аренда площадки: от <span style={styles.cena}>{props.price}</span> руб/м2 в месяц (в т.ч. НДС 20%)</p>
            <p style={stylessr.info}>{props.info}</p>
          </div>
          <PopupExample miniimg={props.miniimg} style={stylessr.cnopka} />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={370} maxWidth={929}>
        <div style={stylessr.fon}>
          {(props.amount >= 1) &&
            <img style={stylessr.img} src={props.img} />
          }
          <div style={stylessr.block}>
            <p style={stylessr.name}>{props.name}</p>
            <p style={stylessr.price}>Аренда площадки: от <span style={styles.cena}>{props.price}</span> руб/м2 в месяц (в т.ч. НДС 20%)</p>
            <p style={stylessr.info}>{props.info}</p>
          </div>
          <PopupExample miniimg={props.miniimg} style={stylessr.cnopka} />

        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={369}>
        <div style={stylesmin.fon}>
          {(props.amount >= 1) &&
            <img style={stylesmin.img} src={props.img} />
          }
          <div style={stylesmin.block}>
            <p style={stylesmin.name}>{props.name}</p>
            <p style={stylesmin.price}>Аренда площадки: от <span style={styles.cena}>{props.price}</span> руб/м2 в месяц (в т.ч. НДС 20%)</p>
            <p style={stylesmin.info}>{props.info}</p>
          </div>
          <PopupExample miniimg={props.miniimg} style={stylesmin.cnopka} />
        </div>
      </MediaQuery>
    </div>
  );
}
