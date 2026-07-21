import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {Provider}  from "react-redux";
import {store} from "./redux/store";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
{/* StrictMode is a tool for highlighting potential problems in an application. 
  Like Fragment, StrictMode does not render any visible UI. 
  It activates additional checks and warnings for its descendants. */}

{/* BrowserRouter is a router implementation that uses the HTML5 history API (pushState, replaceState and the popstate event)
   to keep your UI in sync with the URL. It is the parent component that 
   keeps track of the history of your app and provides the routing context to all its children. */}

{/* Provider is a component that makes the Redux store available to any nested components that need to access the Redux store. 
  It wraps the entire application and provides the store to all components within it. The store is passed as a prop to the Provider component,
   allowing any component in the app to connect to the Redux store and access its state or dispatch actions. */}
