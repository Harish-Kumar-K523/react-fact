import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function TemporaryName() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<TemporaryName />, document.getElementById("root"))