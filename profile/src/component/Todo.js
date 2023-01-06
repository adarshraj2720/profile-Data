import Header from "./Header"
import Aside from "./Aside"

function Todo() {

    const localItems = localStorage.getItem("userdata");
    let data = JSON.parse(localItems);
    return (
        <>
            <main className="flex padding">
                <Aside />
                <section className="detailspart width">
                    <Header title="ToDo" name={data.name} />
                    <h1>Coming Soon</h1>
                </section>
            </main>
        </>
    )
}

export default Todo