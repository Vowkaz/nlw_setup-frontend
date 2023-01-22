import * as Popover from '@radix-ui/react-popover';
import * as Progress from "@radix-ui/react-progress";
import clsx from "clsx";
import dayjs from "dayjs";
import HabitList from "./habitList";
import {useState} from "react";

interface ProgressBarProps {
    date: Date,
    amount?: number,
    defaultCompleted?: number
}

function Habits({amount = 0, defaultCompleted = 0, date}: ProgressBarProps) {
    const [completed, setCompleted] = useState(defaultCompleted)

    const completedPercent = amount > 0
        ?
        Math.round((completed / amount) * 100)
        :
        0;

    const dayAndMonth = dayjs(date).format('DD/MM')
    const dayOfWeek = dayjs(date).format('dddd')

    function handleAmountCompletedChanged(completed: number) {
        setCompleted(completed)
    }

    return (
        <Popover.Root>
            <Popover.Trigger className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors focus:ring-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-bg", {
                "bg-amber-300 border-amber-200": completedPercent >= 20,
                "bg-amber-400 border-amber-300": completedPercent >= 40,
                "bg-amber-500 border-amber-400": completedPercent >= 60,
                "bg-amber-600 border-amber-500": completedPercent >= 80,
            })}/>
            <Popover.Portal>
                <Popover.Content
                    className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col "
                >
                    <Popover.Arrow
                        className="fill-zinc-800"
                        height={8}
                        width={16}
                    />

                    <span
                        className="font-semibold text-zinc-300"
                    >
                        {dayOfWeek}
                    </span>
                    <span
                        className="at-1 font-extrabold leading-tight text-3xl"
                    >
                        {dayAndMonth}
                    </span>

                    {/*<div className="h-3 roundex-xl bg-zinc-700 w-full mt-4">*/}
                    {/*<div className="h-3 bg-amber-400 w-3/4"/>*/}
                    {/*</div>*/}
                    <Progress.Root
                        className="h-3 roundex-xl bg-zinc-700 w-full mt-4"
                    >
                        <Progress.Indicator
                            className="h-3 bg-amber-400 transition-all"
                            aria-valuenow={completedPercent}
                            style={{
                                width: `${completedPercent}%`
                            }}
                        />
                    </Progress.Root>

                    <HabitList date={date} onCompletedChanged={handleAmountCompletedChanged} />

                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default Habits