const cart=[]
 const  handlecart=(state=cart,action)=>{
    const product= action.payload  
    switch(action.type){
        case "ADDITEM":
            const exist=state.find((x)=>x.id===product.id)
            if(exist){
                return state.map((x)=>
                x.id===product.id?{...x,qty:x.qty+1}:x)
            }
            else{
                const product=action.payload
                return[...state,{...product,qty:1}]
            }
            break
        case "MINUS":
            const exist1=state.find((x)=>x.id===product.id)
            if(exist1){
                
                return state.map((x)=>x.id&&x.qty!==0?{...x,qty:x.qty-1}:x)

            }
            else{
                return state.filter((x)=>x.id!==exist1.id)
            }
            break
        case "DELete":
            const exist12=state.find((x)=>x.id===product.id)
            return state.filter((x)=>x.id!==exist12.id)
            break
        default:
            return state
            break
    }
}
export default handlecart;