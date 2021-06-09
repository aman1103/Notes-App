import { useLocation } from "react-router"

export default function FOF(){
    const {pathname} = useLocation();
    return(
        <h2>No match for <code>{pathname}</code></h2>
    )
}