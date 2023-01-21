import {Check} from "phosphor-react";

function newHabitForm() {
    return (
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual o seu compromisso
            </label>

            <input
            type="text"
            id="title"
            placeholder="ex.: Exercicios, Dormir melhor, etc..."
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline"
            autoFocus
            />

            <label className="font-semibold leading-tight mt-4">
                Qual a recorrencia?
            </label>
            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-700 hover:bg-green-600">
                <Check size={28} weight="bold"/>
                Confirmar
            </button>

        </form>
    )
}

export default newHabitForm