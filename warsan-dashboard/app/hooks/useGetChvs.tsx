
import { useEffect, useState } from "react";
import { getChvs } from "@/app/utilities/utils";

interface ChvData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  location_name: string;
  hospital :string
}

const useGetChvs = ()=>{
  const [chvs, setchvs] = useState<ChvData[]>([]);
  useEffect(()=>{
    (async()=>{
      const chvs = await getChvs();
      setchvs(chvs);
      console.log('Filtered CHVs:', chvs);

    })();
  },[])

  return {chvs}
}

export default useGetChvs;