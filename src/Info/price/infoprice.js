import React, { useState, useEffect } from 'react';
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

function RenderPlitkaPrice(props) {
  const plitkaPack = props.items.map(item => {
    if (item.type == props.type) {
      let firstImg;
      let allOtherImgs;
      if (item.images.length != 0) {
        firstImg = item.images[0].image
        allOtherImgs = item.images
      }
      return (
        <PlitkaPrice amount={item.images.length} key={props.items.indexOf(item).toString()} img={firstImg} name={item.title} price={item.price} info={item.description} miniimg={allOtherImgs} />
      )
    }
  });
  return (
    <div style={styles.korobka}>
      <MediaQuery minWidth={1101}>
        {plitkaPack}
      </MediaQuery>
      <MediaQuery minWidth={930} maxWidth={1100}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginRight: '10%', marginLeft: '10%' }}>
          {plitkaPack}
        </div>
      </MediaQuery>
      <MediaQuery minWidth={370} maxWidth={929}>
        {plitkaPack}
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={369}>
        {plitkaPack}
      </MediaQuery>
    </div>
  )
}

export default function Price() {
  const warehousesUrl = 'http://arenda-ostrov.ru/api/warehouses/';
  const [items, setItems] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const types = [
    'Storage Areas',
    'Covered Warehouses',
    'Office Rooms'
  ]
  const [type, setType] = useState(types[0]);

  let warehouses;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(warehousesUrl)
      const fetchedData = await response.json(response)
      setItems(fetchedData)
      setLoaded(true)
    }
    fetchData()
  }, [])
  let amount;
  if (isLoaded) {
    warehouses = items;
    if (warehouses.images != undefined) {
      amount = warehouses.images.length
    }
  }

  if (!isLoaded) {
    return (null)
  }
  else {
    return (
      <div id="Price">
        <MediaQuery minWidth={1101}>
          <p style={styles.nameblock}>Прайс</p>
          <div style={styles.vibor}>
            <button className="knopka" onClick={() => setType(types[0])}>Складские площадки</button>
            <button className="knopka" onClick={() => setType(types[1])} style={styles.knopka2}>Крытые склады</button>
            <button className="knopka" onClick={() => setType(types[2])}>Офисные помещения</button>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={659} maxWidth={1100}>
          <p style={stylessr.nameblock}>Прайс</p>
          <div style={stylessr.vibor}>
            <button className="knopka" onClick={() => setType(types[0])}>Складские площадки</button>
            <button className="knopka" onClick={() => setType(types[1])} style={styles.knopka2}>Крытые склады</button>
            <button className="knopka" onClick={() => setType(types[2])}>Офисные помещения</button>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={659}>
          <p style={stylesmin.nameblock}>Прайс</p>
          <div style={stylesmin.vibor}>
            <button className="knopka" onClick={() => setType(types[0])}>Складские площадки</button>
            <button className="knopka" onClick={() => setType(types[1])} style={styles.knopka2}>Крытые склады</button>
            <button className="knopka" onClick={() => setType(types[2])}>Офисные помещения</button>
          </div>
        </MediaQuery>
        <RenderPlitkaPrice items={warehouses} type={type} />
      </div>

    );
  }
}
