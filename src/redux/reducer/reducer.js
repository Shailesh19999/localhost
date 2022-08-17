const init ={
    carts :[]
}
export const cartreduce =(state = init, action)=>{
    switch(action.type){

        case "ADD_FAV":
            
            const itemindex = state.carts.findIndex((val)=> val.imdbID === action.payload.imdbID)
            if (itemindex >= 0){
              
            }
            else{
                const temp = {...action.payload}
                return {
                    ...state,
                    carts: [...state.carts, temp]
                 }
            }
            case "DLTCART" :
                const data = state.carts.filter((val)=> val.imdbID !== action.payload
                );
                return {
                    ...state,
                    carts : data
                }

            
               
            
            default:
                return state
    }
}