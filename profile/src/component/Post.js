import Aside from "./Aside"
import Header from "./Header"

function Post(props) {


    const localItems = localStorage.getItem("userdata");
    let data = JSON.parse(localItems);

    return (
        <>
            <main className="flex padding">
                <Aside />
                <section className="detailspart width">
                    <Header title="Post" name={data.name} />
                    <h1>Coming Soon</h1>
                </section>
            </main>
        </>
    )
}

export default Post