
import { useState } from "react"

import girlimg from '../images/girl.jpeg'

import Login from "./Login"

function Header(props) {

    let [show, setshow] = useState(true)

    function handlelogin() {
        setshow(!show)
    }

    return (
        <>
            <header className="flex-between">
                <strong>{props.title}</strong>
                <figure onClick={handlelogin} className="flex1" >
                    <img className="profileicon" src={girlimg} alt="profile-icon"></img>
                    <span className="username">{props.userdata?.name}</span>
                    <span className="username">{props.name} </span>
                </figure>
                {
                    show === false ? <Login userdata={props.userdata} /> : ""
                }
            </header>
        </>
    )
}

export default Header