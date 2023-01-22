import * as Popover from '@radix-ui/react-popover';

function Habits() {
    return (
        <Popover.Root>
            <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg "/>
            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col ">
                    <Popover.Arrow className="fill-zinc-800" height={8} width={16}/>
                    <span className="font-semibold text-zinc-300">terca</span>
                    <span className="at-1 font-extrabold leading-tight text-3xl">17/1</span>

                    <div className="h-3 roundex-xl bg-zinc-700 w-full mt-4">
                        <div className="h-3 bg-amber-400 w-3/4"/>
                    </div>

                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default Habits