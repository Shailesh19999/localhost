export const Add =(item)=>{
    return{
        type: "ADD_FAV",
        payload: item
    }
    
}
export const DLT =(id)=>{
    return{
        type: "DLTCART",
        payload : id
    }
}