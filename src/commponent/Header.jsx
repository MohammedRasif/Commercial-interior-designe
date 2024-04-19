import img from "../Image/images1.jpg"
import img1 from "../Image/image2.jpg"
import img2 from "../Image/image3.jpg"
const Header = () => {
    return (
        <div className="flex bg-gray-300 p-20 "  >
            <div className="mt-10">
            <h1 className="text-2xl">I N N O V A T I V E</h1>
            <h1 className="text-6xl font-extrabold">INTERIOR DESIGN</h1>
            <p className="text-xl pt-12">Right design and right ideas matter a lot of in interior design business. <br /> A style that makes a statement.</p>
            <button className="mt-12 px-5 py-3 font-bold border-dashed border-2 border-sky-500">DISCOVER WORK</button>
            </div>
            <div className="flex pr-20">
                <img className="h-80 w-64 mt-40 mr-5" src={img} alt="" />
                <img className="h-80 w-64 " src={img1} alt="" />
                <img className="h-80 w-64 mt-40 ml-5 " src={img2} alt="" />
                
            </div>
        </div>
    );
};

export default Header;