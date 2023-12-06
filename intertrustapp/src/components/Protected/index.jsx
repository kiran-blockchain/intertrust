import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

const Protected = (props) => {
    console.log(props);
    const auth = useSelector(x=>x.auth)
    if (auth.token=='') {
        return <Navigate to="/" />
    }
    return props.children
}
export default Protected;