
"use client"

import { useState } from "react"

export default function MobileNavBar() {
    const [activeIcon, setActiveIcon] = useState(null)
    // @ts-ignore
    const handleIconClick = (icon) => {
        setActiveIcon(icon)
    }
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between p-4 bg-white rounded-full shadow-md w-[300px]">
            <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition-colors ${
                    activeIcon === "home" ? "bg-primary text-primary-foreground" : "bg-[#fbbf24] text-white"
                }`}
                onClick={() => handleIconClick("home")}
            >
                <HomeIcon className={`w-6 h-6 ${activeIcon === "home" ? "font-bold" : ""}`} />
            </div>
            <div
                className={`cursor-pointer transition-colors ${activeIcon === "chart" ? "text-primary" : "text-gray-500"}`}
                onClick={() => handleIconClick("chart")}
            >
                <BarChartIcon className="w-6 h-6" />
            </div>
            <div
                className={`cursor-pointer transition-colors ${activeIcon === "settings" ? "text-primary" : "text-gray-500"}`}
                onClick={() => handleIconClick("settings")}
            >
                <SettingsIcon className="w-6 h-6" />
            </div>
        </div>
    )
}

// @ts-ignore
function BarChartIcon(props) {
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
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    )
}

// @ts-ignore
function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}

// @ts-ignore
function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}
