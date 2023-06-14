import { FallingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex justify-center">
            <FallingLines
                color="#D99904"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
            />
        </div>
    );
};

export default Loader;