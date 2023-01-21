interface HabitsProps {
    completed: number
}

function Habits(props: HabitsProps) {
    return (
        <div className="bg-zinc-800 w-10 h-10 text-white rounded m-2 text-center flex items-center justify-center">
            {props.completed}
        </div>
    )
}

export default Habits