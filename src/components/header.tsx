import logo from "../assets/logo.svg";
import plus from "../assets/plus.svg";

function Header() {
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logo} alt="logo"/>
            <button
                type="button"
                className="border border-violet-900 font-semibold rounded-lg px-6 py-4 flex items-center gap-2 hover:border-violet-300"
            >
                <img src={plus} className="text-xl" alt="plus"/>
                New Habit
            </button>
        </div>
    )
}

export default Header