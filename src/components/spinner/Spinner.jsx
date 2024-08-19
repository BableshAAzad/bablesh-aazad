import spin from "./spinner4.gif";

function Spinner() {
    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <img className="my-5" src={spin} alt="Loading" width={100} height={100} />
        </div>
    );
}

export default Spinner;
