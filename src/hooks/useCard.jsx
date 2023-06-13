import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";

import { AuthContext } from "../provider/AuthProvider";


const useCart = () => {
    const { user ,loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    // const { refetch,  data: course} = useQuery({
    //     queryKey: ['cart', user?.email],
    //     enabled: !loading,
    //     queryFn: async ()=>{
    //         const res = await axiosSecure.get(`/course-cart?email=${user?.email}`
    //         )
    //         return res.data;
            
    //     },
        
    //   })
     
    const {refetch, data:couese} = useQuery
   return {course, refetch}
   
};

export default useCart;