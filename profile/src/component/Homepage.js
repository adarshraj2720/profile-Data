import { useEffect, useState } from "react"
import React from "react"
import { NavLink } from "react-router-dom";


function Homepage() {

    let [profile, setprofile] = useState([])


    useEffect(() => {
        fetch("https://panorbit.in/api/users.json").then((res) => res.json())
            .then((data) => setprofile(data.users))
    }, [])

    return (
        <div className="account-page">
            <div className="account">
                <h1>Select an account</h1>
                {
                    profile.map((e) => {
                        return (
                            <>
                                <NavLink to={`/details/${e.id}`}>
                                    <button className="acc-btn"  key={e.id}>
                                        {e.name}
                                    </button>
                                </NavLink>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Homepage