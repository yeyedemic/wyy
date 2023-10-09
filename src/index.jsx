import React from 'react';
import ReactDom from 'react-dom/client';

import '@/index.css';

import Footer from '@/Footer';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Footer />
  </div>,
);
