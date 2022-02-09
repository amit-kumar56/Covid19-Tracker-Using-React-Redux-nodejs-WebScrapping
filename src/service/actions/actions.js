export const goToAction =(data)=>{
    console.warn("action",data)
    return {
        type:"TRACKER",
        data:data
    }
}

