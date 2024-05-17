import React from "react";

type ModalType ={
    isVisible:boolean,
}

const Modal:React.FC<ModalType> = ({isVisible})=>{
    if(!isVisible) return null;
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">Modal
            <div className="w-[600px]">
                <button className="text-white text-xl place-self-end">X</button>
                <div className="bg-white p-2">modal</div>
            </div>
        </div>
    )
}