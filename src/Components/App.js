import React from 'react';
import Client from './Client';
import Content from './Content';
import Cover from './Cover';
import "./CSS/App.css";
import Feature from './Feature';
import Footer from './Footer';

function App() {
  return (
    <div >
      <Cover />
      <Content />
      <Feature />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
