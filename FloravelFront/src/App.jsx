import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import ScrollToTop from './Layout/ScrollToTop';
import Layout from './Components/Layout'

function App() {
  return (
    <h1 class="text-3xl font-bold underline">
    Hello world!
    </h1>
  );
}

export default App;