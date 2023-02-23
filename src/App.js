import React, { useState } from 'react';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      <Navbar title='TextUtils' mode={mode}/>
      <TextForm heading="Enter the text to analyze below"/>
    </>
  );
}

export default App;