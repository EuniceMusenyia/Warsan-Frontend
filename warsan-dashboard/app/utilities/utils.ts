
export const getChildRecords = async ()=>{
    const url = './api/get-child-records';

    try{
        const response = await fetch (url);
        const result = await response.json();
        return result
    }
    catch(error:any){
        return error.message
    }
}