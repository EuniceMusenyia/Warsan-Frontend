

export const getChvs = async ()=>{
    const url = './api/get-chvs';

    try{
        const response = await fetch (url);
        const result = await response.json();
        return result

    }
    catch(error:any){
        return error.message
    }
}




interface UsersData {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;


  }
export const createHealthworker = async (userData: UsersData) => {
    const url = `/api/create-healthworker`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  };
