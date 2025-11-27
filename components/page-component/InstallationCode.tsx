'use client'

import { CopyCode } from "./Buttons";

const InstallationCode = ({data} : {data : string}) => {
    const HandleCopy = () => {
        CopyCode(data);
    }
    return (
        <div className="mb-5">
            <h1 className="font-sans font-bold mb-2">Installation</h1>
            <div onClick={HandleCopy} className="bg-card flex justify-start items-center w-full h-15 px-3 rounded-sm overflow-x-auto scrollbar-hide cursor-pointer">
                <p className="font-mono text-sm whitespace-nowrap">{data}</p>
            </div>
        </div>
    )
}

export default InstallationCode;