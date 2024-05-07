import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import Button from "./Button"
import Image from "./Image"
import { MdOutlineNavigateNext } from "react-icons/md";

function Navbar() {

  const navigate = useNavigate();
  const onclick = function() {
     navigate("/form")
   }

  return (
    <div className="p-5">
      <div className="sm:px-[2.3rem] px-5 mt-1 border border-gray-300 rounded-full flex items-center justify-between">

        <Image
          className="sm:w-[10rem] sm:h-[6rem] w-[5.5rem] h-[3.5rem] flex justify-center items-center"
          src={logo} 
        />

        <div className="hidden sm:flex flex-row gap-5 items-center justify-center">
          <Button 
            label="Get Projects"        
            className="p-4 md:p-5 text-black bg-white hover:bg-[#f1f1f1] border border-gray-300 w-[9rem] font-medium"
            onClick={onclick}
          />
          <Button 
            label="Onboard Talent"
            className="p-4 md:p-5 text-white bg-black w-[10rem] font-semibold hover:bg-[#4E4E4E]"
          />
        </div>

        <Button 
        icon={<MdOutlineNavigateNext />}
        onClick={onclick}
        className="border p-3 sm:hidden hover:bg-[#4b4a4a] hover:text-white"
      />

      </div>
    </div>
  )
}

export default Navbar
