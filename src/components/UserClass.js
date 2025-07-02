import React from "react"

class UserClass extends React.Component{
    constructor (props){
        super(props);
        
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
       console.log(this.props.name+ " child constructor ")
     }
    async componentDidMount(){
        this.timer=setInterval(()=>{
        console.log("namaste react app");
        },1000);

        clearInterval(this.timer);

        
        console.log(this.props.name+" Child Component Did Mount");

        const data= await fetch ("https://api.github.com/users/rakeshdevcode");
        const json =await data.json();
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log(this.props.name+"compomnent update");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log(this.props.name+"compomnent unmount")

    }

    render (){
      //  console.log(this.props.name+" child render")
      const {name,bio,location,avatar_url}=this.state.userInfo
    return (
        <div className="user-card">
            <img className="user-class-img w-[150px] h-[150px] rounded-lg hover:bg-red-500" src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h4>Bio: {bio}</h4>

            <h3>Location: {location}</h3>
            {/* <h4>Contact: {contact}</h4> */}

        </div>
        )
    }
}

export default UserClass;
