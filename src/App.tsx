import Habits from "./components/habits";
import './styles/global.css';
function App() {
    return (
        <>
        <Habits completed={3} />
        <Habits completed={2} />
        <Habits completed={1} />
        <Habits completed={4} />
        <Habits completed={67} />
        <Habits completed={2} />
        </>
    )
}

export default App