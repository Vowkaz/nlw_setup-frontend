import Habits from "./habits";
import generateRangeDatesFromYearStart from "../util/generate-range-between-dates";

function Summary() {

    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const summaryDates = generateRangeDatesFromYearStart()

    const minSummaryDateSize = 18 * 7
    const amountMinDay = minSummaryDateSize - summaryDates.length

    return (
        <div className="w-full flex ">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((e, i) => {
                    return (
                        <div
                            key={`${e}-${i}`}
                            className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center"
                        >
                            {e}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(e => {
                    return <Habits
                        key={e.toString()}
                        amount={2}
                        completed={5}/>
                })}
                {amountMinDay > 0 && Array.from({length: amountMinDay}).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed "
                        />
                    )
                })}
            </div>
        </div>


    )
}

export default Summary

