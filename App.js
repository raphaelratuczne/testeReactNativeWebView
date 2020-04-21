import React, { useState } from 'react';

import Page1 from './src/page1';
import Page2 from './src/page2';

const App = () => {

  const [verPage2, setVerPage2] = useState(false);
  const [link, setLink] = useState('');

  const abrirLink = (l) => {
    if (l) {
      setLink(l);
      setVerPage2(true);
    }
  }

  const setVoltar = () => {
    setVerPage2(false);
  }

  return verPage2 ? <Page2 uri={link} setVoltar={setVoltar}/> : <Page1 abrirLink={abrirLink}/>;
};


export default App;
