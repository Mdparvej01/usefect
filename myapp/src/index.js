import React from "react"
import ReactDOM from "react-dom/client"
// eslint-disable-next-line no-unused-vars
import App from "./app"


//second method

// function AppOne(){
//     return ( 
//         <div>AppOne</div>
//     )
// }






const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(

    <React.StrictMode>
   <App />
    </React.StrictMode>
)