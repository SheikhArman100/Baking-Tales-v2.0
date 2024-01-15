import { axiosPublic } from '@/libs/axios/config.js'
import { useQuery } from '@tanstack/react-query'

const useProducts = () => {
  return useQuery({
    queryKey:["products"],
    queryFn:async()=>{
        const response=await axiosPublic.get("product/all")
        return response.data
    }
  })
}

export default useProducts