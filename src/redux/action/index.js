export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

export const minusItem=(product)=>{
    return{
        type:"MINUS",
        payload:product
    }
}

export const delCart=(product)=>{
    return{
        type:"DELete",
        payload:product
    }
}