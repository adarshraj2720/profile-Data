import React from "react"
import { useState, useEffect } from "react"

function Chat(props) {


    let [list, setlist] = useState([])

    let [showchat, setshowchat] = useState(props.open.showchat)

    console.log(props.open)

    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then((res) => res.json())
            .then((data) => setlist(data.users))
    }, [])

    function handlechat() {
        setshowchat(!showchat)
    }

    return (
        <>
            {
                showchat === true ? "" :
                    <div className="chatblock ">
                        <div onClick={handlechat} className="chat1 flex-between">
                            <span>Chats</span>
                            <span>🔝</span>
                        </div>
                        {
                            list.map((e) => {
                                return (
                                    <div key={e.id} className="chatlist flex-between">
                                        <h6>{e.name}</h6>
                                        {
                                            e.id % 2 === 0 ? <div className="active"></div> : <div className="unactive"></div>
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default Chat