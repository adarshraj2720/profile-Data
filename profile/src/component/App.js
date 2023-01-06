
import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage"
import Profiledetails from "./Profiledetails"
import Post from "./Post";
import Gallery from "./Gallery";
import Todo from "./Todo";


function App() {


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