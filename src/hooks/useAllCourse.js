import { useQuery } from "@tanstack/react-query";



const useAllCourse = () => {
  const {data: course = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
        const res = await fetch('https://fancy-clothes-server.vercel.app/course-all');
        return res.json();
    }
})

return {course, loading, refetch}
};

export default useAllCourse;