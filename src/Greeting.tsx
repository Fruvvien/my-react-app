import React from "react";

interface GreetingProps{
    name:string,
    age: number
}


function Greeting(props: GreetingProps){
    return(
        <h2>Hello, {props.name}! age: {props.age}</h2>
    )
}

export default Greeting;