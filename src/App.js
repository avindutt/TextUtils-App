import React, { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [modeName, setModeName] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert('');
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#213c50';
      setModeName('Enable Light Mode');
      showAlert(': Dark mode has been enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setModeName('Enable Dark Mode');
      showAlert(': Light mode has been enabled', 'success');
    }
  }
  
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} modeName={modeName}/>
      <Alert alert= {alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </>
  );
}

export default App;