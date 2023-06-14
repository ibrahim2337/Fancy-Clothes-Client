import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./global";


const useCart = () => {
    const { user ,loading } = useContext(AuthContext);


    const { refetch,  data: course} = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async ()=>{
            const res = await axios.get(`${BASE_URL}/course-cart?email=${user?.email}`
            )
            return res.data;
            
        },
        
      })
     
   return {course, refetch}
   
};

export default useCart;