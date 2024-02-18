import React, { useEffect, useState } from "react"
import Card from "./card"
import Axios from "axios"


function App(){

    //  const [details ,setDetails] = useState() //made hooks and introsuce useState
    // // // get request=>  
    //  const fetchDetails = async () => {
    // const {data} =await Axios.get("https://randomuser.me/api") //url
    // console.log("RESPONSE::" ,data );
    //  const details=data.results[0]
    //  setDetails(details)
    //   }
    //   console.log("RESPONSE::" ,data );
    //lets save result part in details
    //  details=data.results[0]
    // setDetails(details)
    // console.log("details:",details);


    let list1 = ["parvej","vaid","op"]
    //use effect hook
    // useEffect( () =>{  //when page reload it atomatically make a request
    //     fetchDetails();
    // } , [])
  
    return ( 
        // <div>AppK</div> //pasing info inside my card
        //i want to use this my name =>this is some value passed into me=>i want to grab this in my card=>my component can receive this information using (PROS )
     <>

     <div>App</div>   
     <Card myname="parvej"  list={list1}   />  
     <button >get details</button>
     <button >get2 details1</button>
     </>
       
       
    )
}

export default App