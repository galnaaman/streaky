


export function ChallangeDays() {
    return (
        <div>
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
                Are you going to crush it <span className="text-yellow-500">today</span>?
            </div>
            <div className="flex flex-row overflow-x-auto space-x-2 md:space-x-4">
                <div
                    className="bg-yellow-500 p-4 rounded-lg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <BirdIcon className="text-3xl md:text-4xl lg:text-5xl"/>
                </div>
                <div
                    className="bg-yellow-500 p-4 rounded-lg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <BirdIcon className="text-3xl md:text-4xl lg:text-5xl"/>
                </div>
                <div
                    className="bg-yellow-500 p-4 rounded-lg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <div className="text-center">
                        <div className="text-xl text-black md:text-2xl lg:text-3xl">27</div>
                        <div className="text-sm md:text-base lg:text-lg">Fri</div>
                    </div>
                </div>
                <div
                    className="bg-gray-800 p-4 rounded-lg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <div className="text-center">
                        <div className="text-xl md:text-2xl lg:text-3xl">29</div>
                        <div className="text-sm md:text-base lg:text-lg">Sat</div>
                    </div>
                </div>
                <div
                    className="bg-gray-800 p-4 rounded-lg flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <div className="text-center">
                        <div className="text-xl md:text-2xl lg:text-3xl">30</div>
                        <div className="text-sm md:text-base lg:text-lg">Sun</div>
                    </div>
                </div>
            </div>
        </div>
    );



}

// @ts-ignore
function BirdIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 7h.01" />
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
            <path d="m20 7 2 .5-2 .5" />
            <path d="M10 18v3" />
            <path d="M14 17.75V21" />
            <path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </svg>
    )
}
