

export function StudentAvatar() {
    return (
        <div className="flex items-center space-x-4">
            <div className="avatar online">
                <div className="w-24 rounded-full">
                    <img
                        src="https://yt3.googleusercontent.com/XDA6ig1JeTk6W84g4ipe4LhkWsghnDjq1Zuod27XxRrLkthoLBC3gj_zxQcop1kSBzw3BKIj=s160-c-k-c0x00ffffff-no-rj"/>
                </div>
            </div>
            <div>
                <div className="text-lg font-bold md:text-xl lg:text-2xl">Coche name</div>
                <div className="text-sm md:text-base lg:text-lg">Level 1</div>
            </div>
        </div>
    );
}


