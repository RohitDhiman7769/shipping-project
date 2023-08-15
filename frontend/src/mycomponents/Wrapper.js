import Navbar from "./Navbar"

const Wrapper = ({ children }) => {
    console.log('called')
    return (
        <>
            <Navbar />
            { children }
        </>

    )
};

export default Wrapper;