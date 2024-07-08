

import  ButtonLead  from "@/components/ButtonLead"

export default function HeroPanel() {
    return (
        <div className="min-h-screen bg-[#f8e8c8] flex flex-col items-center justify-center p-4">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between">
                <div className="space-y-6 text-center lg:text-left lg:max-w-md">
                    <div className="flex justify-center lg:justify-start">
                        <img src="/img_1.png" alt="Streaky Logo" />
                    </div>
                    <h1 className="text-4xl font-bold text-black">
                        The Viral tool to keep your community engaged for
                        <span className="block text-[#f5a623]">Coaches & Brands</span>
                    </h1>
                    <p className="text-lg text-black">
                        Create engaging challenge for your community and go viral on social media. The ultimate lead magnet to keep
                        your students working on their dream.
                    </p>
                    <ButtonLead></ButtonLead>
                    <p className="text-sm text-black">
                        Create Recurring Revenue 🐝 Viral for social media 🚀 Keep community engaged 🌐
                    </p>
                </div>
                <div className="relative mt-10 lg:mt-0">
                    <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-r from-[#f5a623] to-transparent rounded-full" />
                    <img src="/img.png" alt="App Preview" className="relative z-10 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    )
}
