import { NavLink } from "react-router-dom"
import { useEffect,useState } from "react"

function Login(props) {

    let [data, setdata] = useState([])
   
    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then((res) => res.json())
            .then((data) => setdata(data.users))
    }, [])
    console.log(data)


    return (
        <div className="login">
            <h4>{props?.userdata.name}</h4>
            <h4 className="email">{props?.userdata.email}</h4>
            {
                data.slice(0,2).map((e)=>{ 
                    return(
                        <>
                        <NavLink to={`/details/${e.id}`}>
                        <h4>{e.name}</h4>
                        </NavLink>
                        
                        </>
                    )
                })
            }
            <NavLink to="/">
                <button className="signout-btn">SignOut </button>
            </NavLink>

        </div>
    )
}

export default Login