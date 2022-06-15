import React from 'react';
import NB from './Header/NavBar/NB';
import Block from './Header/Block';
import Inform from './Info/aboutcompany/information';
import Plus from './Info/pluscompany/plusblock';
import PhotoSlider from './Info/sliderphoto/photo';
import Price from './Info/price/infoprice';
import Contact from './Info/contact/contactinfo';
import Footer from './footer/footer';

function App() {
  return (
    <div className="site">
      <NB />
      <Block />
      <Inform />
      <Plus />
      <PhotoSlider />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
