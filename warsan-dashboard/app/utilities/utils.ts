

export const getChvs = async ()=>{
    const url = './api/get-chvs';

    try{
        const response = await fetch (url);
        const result = await response.json();
        console.log("chvs:",result);
        return result
        

    }
    catch(error:any){
        return error.message
    }
}

interface healthworkerData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  hospital: string;
  phone_number: string;
}



export const createHealthworker = async (healthworker: healthworkerData) => {
  const url = `/api/create-healthworker`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(healthworker),
      
      
    });
  
    
    const result = await response.json();
   

    return result;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};


export const getLocations = async ()=>{
  const url = '/api/get-locations';
  try{
      const response = await fetch (url);
      const result = await response.json();
      return result
  }
  catch(error:any){
      return error.message
  }
}