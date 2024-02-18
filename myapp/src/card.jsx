//
import react from "react"

//one vimp package we need to install called AXIOS


// function Card(props){
//     console.log(props);
    
//     return ( 
//         <div>this is card</div>
//     )
// }


//2nd method...

function Card({myname,list}){
    // console.log(myname);
    // console.log(list);
    
    return ( 
        <>
        <div>this is card</div>
        <div>myname</div>
       {/* <h1> {details.name.first}</h1> */}

        <ul>
            {/* {details.gender} */}
            
            {/* {details.name.first} */}
            {/* vimp funtion to iterate list array */}
            {list.map(l=>(
                <li  key={l} >{l}</li>
            ))}
        </ul>
        
        </>
    )
}
export default Card