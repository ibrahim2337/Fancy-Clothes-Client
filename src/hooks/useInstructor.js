
import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "./global"

const useInstructor = ()=>{
  

    const { isLoading,refetch, data:course } = useQuery ({
      queryKey: ['course',],
      queryFn: async () => {
        const response = await fetch(`${BASE_URL}/get_instructors`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      },
    })
    return {course,isLoading ,refetch}
  
  }
  export default useInstructor;