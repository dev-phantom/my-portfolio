import Navbar from "../components/Navbar";

const about = () => {
    return ( 
        <div className="bg-bgColor w-full h-screen text-white">
            <div>
                <Navbar />
            </div>
            <h1 className="font-semibold text-2xl">About-<span className="text-primary">me</span></h1>
        </div>
     );
}
 
export default about;