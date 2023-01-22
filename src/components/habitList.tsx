import * as Checkbox from "@radix-ui/react-checkbox";
import {Check} from "phosphor-react";
import {useEffect, useState} from "react";
import {api} from "../lib/axios";
import dayjs from "dayjs";

interface HabitsProps {
    date: Date,
    onCompletedChanged: (completed: number) => void
}

interface HabitsInfoProps {
    possibleHabits: {
        id: string,
        title: string,
        created_at: string
    }[],
    completedHabits: string[]
}

function HabitList({date, onCompletedChanged}: HabitsProps) {
    const [habitsInfo, setHabitsInfo] = useState<HabitsInfoProps>()

    useEffect(() => {
        api.get('/day', {
            params: {
                date: date.toISOString()
            }
        }).then(resp => {
            setHabitsInfo(resp.data)
        })
    }, [])

    const isDateInPast = dayjs(date)
        .endOf('day')
        .isBefore(new Date())

    async function handleToggleHabits(habitId: string) {
        const isHabitToggled = habitsInfo!.completedHabits.includes(habitId)

        await api.patch(`/habits/${habitId}/toggle`)

        let completedHabits: string[] = []

        if (isHabitToggled) {
            completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
        } else {
            completedHabits = [...habitsInfo!.completedHabits, habitId]
        }

        setHabitsInfo({
            possibleHabits: habitsInfo!.possibleHabits,
            completedHabits
        })

        onCompletedChanged(completedHabits.length)

    }

    return (

        <div
            className="mt-6 flex flex-col gap-3"
        >
            {habitsInfo?.possibleHabits.map(e => {
                return (
                    <Checkbox.Root
                        key={e.id}
                        onCheckedChange={() => {
                            handleToggleHabits(e.id)
                        }}
                        disabled={isDateInPast}
                        checked={habitsInfo?.completedHabits.includes(e.id)}
                        className="flex items-center gap-3 group focus:outline-none"
                    >

                        <div
                            className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800
                    group-data-[state=checked]:bg-amber-300 group-data-[state=checked]:border-amber-300
                    group-focus:ring-2 group-focus:ring-offset-1 group-focus:ring-offset-bg group-focus:ring-amber-200"
                        >

                            <Checkbox.Indicator>

                                <Check
                                    className="text-zinc-900"
                                    size={20}
                                />

                            </Checkbox.Indicator>

                        </div>

                        <span
                            className="font-semibold text-zinc-100 leading-tight
                    group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-300"
                        >
                            {e.title}
                </span>

                    </Checkbox.Root>
                )
            })}


        </div>
    )
}

export default HabitList