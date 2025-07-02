import { useRouteError } from "react-router";

const Error = ()=>{

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>
                 404 Error<br/> loading page  
            </h1>
              
                 Page not Found
            <h3>
                {err.status} : {err?.statusText|| "Unknown Error"}
            </h3>
        </div>
    )
}

export default Error;