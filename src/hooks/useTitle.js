import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Fancy Clothes `;
    }, [title]);
};
export default useTitle;