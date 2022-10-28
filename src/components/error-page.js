import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)

    return(
        <div id="error-page">
            <h1>opps </h1>
            {error.message || error.statusText}
        </div>
    )
}