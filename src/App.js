import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import React from 'react';



function App() {
  return (
    <>
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Sidebar />
    </div>
    </>
  );
}

export default App;
