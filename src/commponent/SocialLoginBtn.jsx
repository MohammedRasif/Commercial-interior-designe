import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../Hook/useAuth";
const SocialLoginBtn = () => {
    const {googleLogin} = useAuth()
    return (
        <div className="flex justify-center m-3 text-2xl">
                <button onClick={()=>googleLogin()} className="pr-3"><FaGoogle></FaGoogle></button>
                <button className="pr-3"><FaFacebook></FaFacebook></button>
                <button><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLoginBtn;