import React from "react";
import  { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App";
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="98946538407-4k5pr38hpks6rkoiqjklarsrprsf8rhc.apps.googleusercontent.com">
  <Provider store={store}>
    <App />
  </Provider>
  </GoogleOAuthProvider>

);
