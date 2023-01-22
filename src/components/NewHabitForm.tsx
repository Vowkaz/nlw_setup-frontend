import {Check} from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {FormEvent, useState} from "react";

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

function newHabitForm() {

    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])
    function createHabit(event: FormEvent) {
        event.preventDefault()

        console.log(title, weekDays)
    }

    function handleToggleWeekDay( e: number){
        if (weekDays.includes(e)) {
            const weekDayRemoved = weekDays.filter(day => day != e)

            setWeekDays(weekDayRemoved)
        } else {
            const weekDaysAdd = [...weekDays, e]

            setWeekDays(weekDaysAdd)
        }
    }

    return (
        <form onSubmit={createHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold select-none leading-tight">
                Qual o seu compromisso
            </label>

            <input
            type="text"
            id="title"
            placeholder="ex.: Exercicios, Dormir melhor, etc..."
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline"
            autoFocus
            onChange={event => {
                setTitle(event.target.value)
                }
            }
            />

            <label className="font-semibold select-none leading-tight mt-4">
                Qual a recorrencia?
            </label>
            <div className="flex flex-col gap-2 mt-3">
                {availableWeekDays.map((e, i) => {
                    return(
                        <Checkbox.Root
                            key={e}
                            className="flex items-center gap-3 select-none group"
                            onCheckedChange={() => handleToggleWeekDay(i)}
                        >

                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-500">
                                <Checkbox.Indicator ><Check className="text-zinc-900" size={20}/></Checkbox.Indicator>
                            </div>
                            <span className="font-extralight text-zinc-100 leading-tight"> {e}</span>
                        </Checkbox.Root>
                    )
                })}


            </div>
            <button type="submit" className="mt-6 select-none rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-700 hover:bg-green-600">
                <Check size={28} weight="bold"/>
                Confirmar
            </button>

        </form>
    )
}

export default newHabitForm