import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

import { PublicClientApplication, EventType } from '@azure/msal-browser';

const pca = new PublicClientApplication({
    auth: {
        clientId: '784e585f-2ddb-49d1-a710-9a3343bb3a47',
        authority: 'https://login.microsoftonline.com/5a380cd7-791e-4b4c-aa94-ee0574864ac8',
        redirectUri: '/'
    },
    caches:{
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false
    },
    system:{
        loggerOptions:{
            loggerCallback: (level, message, containsPII) =>{
                console.log(message)
            },
            logLevel: "Info",
        }
    }

    
})

pca.addEventCallback(event => {
    
    if (event.eventType === EventType.LOGIN_SUCCESS){
        // console.log(event)
        pca.setActiveAccount(event.payload.account)
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
