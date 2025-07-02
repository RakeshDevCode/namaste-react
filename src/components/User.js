import { useEffect, useState } from "react";

const User =({name})=>{
    const [count, setCount]= useState(0);
    const [count2]=useState(1);

    useEffect(()=>{
     // api calls
     const timer= setInterval(()=>{
        console.log("namaste react app");
      },1000);
    console.log("useEffect");

    return ()=>{
        clearInterval(timer);
        console.log("useEffect Return")
    }
    },[]);
    console.log("render");

    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact:  twitter@user</h4>

        </div>
    );
};

export default User;