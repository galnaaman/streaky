
import Header from "@/components/Header";
import {StudentAvatar} from "@/app/challange/_components/StudentAvatar";
import {ChallangeDays} from "@/app/challange/_components/ChallangeDays";

export default function Component() {
    return (
        <div className="bg-black text-white p-4 space-y-4 md:p-8 lg:p-12">
            <Header />
            <StudentAvatar />
            <ChallangeDays />
            <div className="relative">
                <img
                    src="https://i.ytimg.com/vi/M8ea_6JbBCY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEKCFZ1_hnXlJdH37-J3JX_Q6Irg"
                    alt="Video thumbnail"
                    className="rounded-lg w-full md:h-[300px] lg:h-[400px] object-cover"
                />
            </div>
            <div className="space-y-2">
                <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
                    <div>
                        <div className="text-lg font-bold md:text-xl lg:text-2xl">Task 1</div>
                        <div className="text-sm text-gray-400 md:text-base lg:text-lg">
                            Create 1 video Script <PencilIcon className="inline-block" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text"></span>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-warning"/>
                        </label>
                    </div>
                </div>
                <div className="bg-yellow-500 p-4 rounded-lg flex items-center justify-between">
                    <div>
                        <div className="text-lg font-bold md:text-xl lg:text-2xl">Task 1</div>
                        <div className="text-sm md:text-base lg:text-lg">
                            Shoot First video <VideoIcon className="inline-block" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text"></span>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-warning"/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
                Your <span className="text-yellow-500">Progress</span>
            </div>
            <div className="grid grid-cols-7 gap-2 md:grid-cols-14 lg:grid-cols-21">
                {Array(35)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${
                                i % 2 === 0 ? "bg-yellow-500" : "bg-gray-800"
                            } rounded-lg`}
                        />
                    ))}
            </div>
            <div className="flex justify-between text-gray-500 text-sm md:text-base lg:text-lg">
                <span>D</span>
                <span>S</span>
                <span>T</span>
                <span>Q</span>
                <span>Q</span>
                <span>S</span>
                <span>S</span>
            </div>
            {/*<MobileNavBar />*/}
        </div>

    )
}



// @ts-ignore
function PencilIcon(props) {
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
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
        </svg>
    )
}

// @ts-ignore
function PlayIcon(props) {
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
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )

}

// @ts-ignore
function VideoIcon(props) {
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
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}
