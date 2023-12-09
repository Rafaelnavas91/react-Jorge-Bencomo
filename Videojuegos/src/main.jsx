import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyAMcE0Zomy6vmCy_Cnuzu1cosrAq1CajBk",
  authDomain: "jorge-react.firebaseapp.com",
  projectId: "jorge-react",
  storageBucket: "jorge-react.appspot.com",
  messagingSenderId: "545126930197",
  appId: "1:545126930197:web:31c2045ec03c56421cbb1c",
  measurementId: "G-F60H22L995"
};


initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
