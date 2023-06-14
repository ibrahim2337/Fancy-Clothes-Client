import { useQuery } from "@tanstack/react-query";



const useCourse = () => {
  const {data: course = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
        const res = await fetch('https://fancy-clothes-server.vercel.app/course');
        return res.json();
    }
})

return {course, loading, refetch}
};

export default useCourse;