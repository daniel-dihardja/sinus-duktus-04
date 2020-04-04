import React from 'react';

import { Provider } from 'react-redux'
import store from './store'

import './App.css';
import { Canvas } from './canvas/Canvas';
import {Setup} from "./setup/Setup";

function App() {
  return (
    <div className="App">
      <Canvas></Canvas>
      <Setup></Setup>
    </div>
  );
}

export default App;
