import React, { useEffect, useState } from "react"

import map from '../images/map.png'
import girlimg from '../images/girl.jpeg'

import Aside from "./Aside";
import Chat from "./Chat";
import Header from "./Header";


function Profiledetails(props) {

    let [data, setdata] = useState([])

    let [showchat, setshowchat] = useState(false)


    let path = window.location.pathname.replace("/details/", "")
    let a = Number(path)


    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then((res) => res.json())
            .then((data) => setdata(data.users))
    }, [])

    let userdata = data.filter((e) => e.id === a)[0]
    console.log(userdata)
    localStorage.setItem("userdata", JSON.stringify(userdata));


    function handlechat() {
        setshowchat(!showchat)
    }

    return (
        <>
            <main className="flex padding">
                <Aside userdata={userdata} />

                <section className="detailspart">
                    <Header userdata={userdata} title="Profile" />

                    <div className="flex profiledetails">
                        <div className="detailpart">
                            <div className="namepart" >
                                <figure className="girlfig">
                                    <img className="girlimg" src={girlimg} alt="img" />
                                </figure>

                                <h2 className="nickname">{userdata?.name}</h2>
                                <h2>username:<span className="colorchange">{userdata?.username}</span></h2>
                                <h2>e-mail:<span className="colorchange">{userdata?.email}</span></h2>
                                <h2>phone:<span className="colorchange">{userdata?.phone}</span></h2>
                                <h2>website:<span className="colorchange">{userdata?.website}</span></h2>
                            </div>

                            <h3>Company</h3>
                            <h2>Name:<span className="colorchange"> {userdata?.company.name}</span></h2>
                            <h2>catchPhrase:<span className="colorchange">{userdata?.company.catchPhrase}</span></h2>
                            <h2>bs:<span className="colorchange">{userdata?.company.bs}</span></h2>
                        </div>
                        <div className="addresspart">
                            <h5>Address:</h5>
                            <div className="abcd">
                                <h2>street: <span className="colorchange"> {userdata?.address.street} </span> </h2>
                                <h2>suite:<span className="colorchange"> {userdata?.address.suite} </span> </h2>
                                <h2>city: <span className="colorchange">{userdata?.address.city} </span> </h2>
                                <h2>zipcode:<span className="colorchange">{userdata?.address.zipcode} </span> </h2>
                            </div>
                            <img className="map" src={map} alt="map" />
                            <div className="flex-end">
                                <span className="lat-lang">lat: <span className="colorchange1"> {userdata?.address.geo.lat}</span></span>
                                <span className="lat-lang">lng:<span className="colorchange1">{userdata?.address.geo.lng} </span> </span>
                            </div>


                        </div>
                    </div>
                </section>
            </main>
            <div>
                <div onClick={handlechat} className="chat flex-between">
                    <span>Chats</span>
                    <span>🔝</span>
                </div>
                {
                    showchat === true ?
                        <Chat open={showchat} />
                        :
                        ""
                }

            </div>
        </>
    )
}

export default Profiledetails