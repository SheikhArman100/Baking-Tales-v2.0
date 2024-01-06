import { axiosPublic } from '@/libs/axios/config.js'
import { useQuery } from '@tanstack/react-query'

const useProducts = () => {
  return useQuery({
    queryKey:["products"],
    queryFn:async()=>{
       await new Promise((resolve) => setTimeout(resolve, 5000));
        const response=await axiosPublic.get("product/all")
        return response.data
    }
  })
}

export default useProducts