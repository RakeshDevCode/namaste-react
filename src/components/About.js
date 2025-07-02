import UserContext from "../utils/UserContext";
import { Button } from "./Button";
import User from "./User"
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor (props){
    super(props)
   // console.log("parent constructor")
  }
  componentDidMount(){
 //   console.log("Parent Component Did Mount")
  }
  render(){ 
  //  console.log("parent render")
    return(
    <div>
      <h1>About Class Component</h1>
      
         <UserContext.Consumer>
         
          {({loggedInUser})=>  (  <div><h1 className="text-lg font-bold ">LoggedIn User:{loggedInUser}</h1>
          </div> )}
        </UserContext.Consumer>
      
      <h2>This is Namaste react project</h2>
      <Button/>
        <UserClass
        name={"First"}
        location={"Dehradun Class"}
        contact={"twitter@conectwithme"}
      />
    </div>
    )
  }
}
export default About;
