import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import { UserProvider } from "./context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


