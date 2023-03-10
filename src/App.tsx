import './styles/global.css';
import './lib/dayjs'
import Header from "./components/header";
import Summary from "./components/Summary";
// import Habits from "./components/habits";
function App() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
                <Header/>
                <Summary/>
            </div>
        </div>
    )
}

export default App