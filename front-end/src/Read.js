import React, { useEffect, useState } from "react";
import { read1 } from "./API";

 export const Reading=(kumar)=>{
     const[employee,setEmployee]=useState({
         "resName":"",
         "resArea":"",
         "respay":0,
         "resSKills":[]
     })
     useEffect(()=>{
         callReading ()
     })
     const callReading=()=>{
         setEmployee(read1(kumar.who))
     }
     return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="card col-lg-7 col-md-10 col-sm-12 p-4 bg-dark text-light">
                    <h1 className="card-title text-center">{employee.resName}</h1>
                    <div className="card-body">
                        <p className="float-start">{employee.resArea}</p>
                        <p className="float-end">{employee.resPay}</p>
                        <p className="text-center">{employee.resSkills}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}