import { NavLink } from "react-router-dom"


function Aside(props) {


    const path = window.location.pathname

    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to={`/details/2`}>
                            <a href="#" className={path.includes('details') ? "white" : "silver"}>Profile</a>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/post'>
                            <a href="#" className={path.includes('post') ? "white" : "silver"}>Posts</a>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/gallery'>
                            <a href="#" className={path.includes('gallery') ? "white" : "silver"}>Gallery</a>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/todo'>
                            <a href="#" className={path.includes('todo') ? "white" : "silver"}>ToDo</a>
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Aside