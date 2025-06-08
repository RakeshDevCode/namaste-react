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
      <h1>About</h1>
      <h2>This is Namaste react project</h2>
      <User/>
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
