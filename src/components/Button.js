import { Link } from "react-router"

export const Button= ()=>{
  return(
      <Link to="/"
    className="bg-gray-300 w-[100px] h-[50px] font-extrabold hover:bg-blue-600 text-gray-800 px-4 rounded inline-flex items-center"
    >
 Home
  </Link>)
}