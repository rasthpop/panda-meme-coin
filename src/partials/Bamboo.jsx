import React from "react";

export default function Bamboo(){
    return(
        <div className='flex flex-row justify-between  fixed top-0 left-0 h-[100vh] w-[100vw]'>
        <div className="absolute bottom-0 w-1/6"> <img src={'src/images/bamboo1.png'} /> </div>
        <div className="absolute bottom-0 right-0 w-1/6" > <img  src={'src/images/bamboo2.png'} /> </div>
        </div>           
    );
}