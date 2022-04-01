let myemployees=[
    {
        "resName":"kumaraganesan",
        "resPay":200000,
        "resArea":"Salem",
        "resSkills":["Java","JavaScript","Python"]
    },
    {
        "resName":"giri venkatesh",
        "resPay":200000,
        "resArea":"Salem",
        "resSkills":["JavaScript","Python"]
    },
    {
        "resName":"kavin",
        "resPay":10000,
        "resArea":"Chennai",
        "resSkills":["Java"]
    },
    {
        "resName":"Nantha",
        "resPay":50000,
        "resArea":"Banglore",
        "resSkills":["Java","Python"]
    },
]

export const create=(obj)=>{
    myemployees.push(obj)
}

export const list=()=>{
    return myemployees
}
export const read1=(index)=>{
    return myemployees[index]
}

export const fetchExact=(name)=>{
    const tmp=myemployees.filter((element)=>{
        return element.resName===name
    })
    return tmp[0]
}
export const alter=(place,data)=>{
    myemployees[place]=data
}