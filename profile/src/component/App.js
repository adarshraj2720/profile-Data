
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage"
import Profiledetails from "./Profiledetails"
import Post from "./Post";
import Gallery from "./Gallery";
import Todo from "./Todo";


function App() {

    let [data, setdata] = useState([])


    let path = window.location.pathname.replace("/details/", "")
    let a = Number(path)


    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then((res) => res.json())
            .then((data) => setdata(data.users))
    }, [])


    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/details/">
                    <Profiledetails />
                </Route>
                <Route path='/post'>
                    <Post />
                </Route>
                <Route path='/gallery'>
                    <Gallery />
                </Route>
                <Route path='/todo'>
                    <Todo />
                </Route>
            </Switch>
        </>
    )
}

export default App