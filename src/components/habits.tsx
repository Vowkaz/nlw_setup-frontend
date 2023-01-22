import * as Popover from '@radix-ui/react-popover';
import * as Progress from "@radix-ui/react-progress";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import {Check} from "phosphor-react";

interface ProgressBarProps {
    amount: number,
    completed: number
}
function Habits({ amount, completed }: ProgressBarProps) {

    const completedPercent =  Math.round((amount/ completed) * 100)

    return (
        <Popover.Root>
            <Popover.Trigger className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
                "bg-amber-300 border-amber-200": completedPercent >= 20,
                "bg-amber-400 border-amber-300": completedPercent >= 40,
                "bg-amber-500 border-amber-400": completedPercent >= 60,
                "bg-amber-600 border-amber-500": completedPercent >= 80,
            })}/>
            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col ">
                    <Popover.Arrow className="fill-zinc-800" height={8} width={16}/>
                    <span className="font-semibold text-zinc-300">terca</span>
                    <span className="at-1 font-extrabold leading-tight text-3xl">17/1</span>

                    {/*<div className="h-3 roundex-xl bg-zinc-700 w-full mt-4">*/}
                        {/*<div className="h-3 bg-amber-400 w-3/4"/>*/}
                    {/*</div>*/}
                    <Progress.Root className="h-3 roundex-xl bg-zinc-700 w-full mt-4" >
                        <Progress.Indicator  className="h-3 bg-amber-400"
                                             aria-valuenow={completedPercent}
                                             style={ {
                                                 width: `${completedPercent}%`
                                             }}
                        />
                    </Progress.Root>

                    <div className="mt-6 flex flex-col gap-3">
                        <Checkbox.Root
                            className="flex items-center gap-3 group"
                        >
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-amber-300 group-data-[state=checked]:border-amber-300">
                                <Checkbox.Indicator ><Check className="text-zinc-900" size={20}/></Checkbox.Indicator>
                            </div>
                            <span className="font-semibold text-zinc-100 leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-300"> Eat something</span>
                        </Checkbox.Root>

                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default Habits