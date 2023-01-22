import Habits from "./habits";
import generateRangeDatesFromYearStart from "../util/generate-range-between-dates";
import {useEffect, useState} from "react";
import {api} from "../lib/axios";
import dayjs from "dayjs";

type Summary = {
    id: string;
    date: string;
    amount: number;
    completed: number;
}[]

function Summary() {

    const [summary, setSummary] = useState<Summary>([])

    useEffect(() => {
        api.get('summary').then(resp => {
            setSummary(resp.data)
        })
    }, [])

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
                {summary.length > 0 && summaryDates.map(e => {

                    const dayInSummary = summary.find(day => {
                        return dayjs(e).isSame(day.date, 'day')
                    })

                    return <Habits
                        key={e.toString()}
                        date={e}
                        amount={dayInSummary?.amount}
                        defaultCompleted={dayInSummary?.completed}
                    />
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

