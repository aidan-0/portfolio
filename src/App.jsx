import React from 'react';
import Header from './Header';
import Content from './Content';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className='page-content'>
      <Header />
      <div className='main-content'>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
