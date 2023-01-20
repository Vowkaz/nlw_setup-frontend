interface HabitsProps {
    completed: number
}

import './habits.css'

function Habits(props: HabitsProps) {
    return (
        <div className="habit">
            {props.completed}
        </div>
    )
}

export default Habits