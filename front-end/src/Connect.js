import axios from 'axios'
const link="http://localhost:8080/POC1BackEnd";

export const join=async(obj)=>{
    const hai=await axios.post(`${link}/new`,obj)
    return hai;


}