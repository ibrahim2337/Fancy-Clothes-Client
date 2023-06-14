import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Fashion Design `;
    }, [title]);
};
export default useTitle;