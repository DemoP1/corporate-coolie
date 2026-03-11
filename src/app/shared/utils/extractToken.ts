export type Payload={
    sub:number,
    user:string
}

export const extractToken= (token:string | null):Payload | null =>{
    try{
        const payloadBase64:any=token?.split('.')[1]
        const payloadJson=atob(payloadBase64);
        const payload:Payload=JSON.parse(payloadJson)
        return payload;

    }
    catch{
        return null
    }
}