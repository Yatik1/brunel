import Image from "../components/Image"
import logo from "../assets/logo.svg"
import { RxCross1 } from "react-icons/rx";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";


const FormPage = () => {

  const navigate = useNavigate()
  const onclick = function() {
    navigate("/")
  }

  return (
   <>
     <div className="py-3 mx-4 px-4 flex items-center justify-between">
      <div className="sm:px-[2.3rem] px-5 mt-1 rounded-full flex items-center justify-between">
        <Image
         className="sm:w-[10rem] sm:h-[6rem] w-[5.5rem] h-[3.5rem] flex justify-center items-center"
         src={logo} 
        />
      </div>
      <Button 
        icon={<RxCross1 />}
        onClick={onclick}
        className="border sm:p-6 p-3"
      />
    </div>
    <div className="flex flex-col items-center justify-center gap-y-4">
        <p className="font-grace text-[#2DA950] text-3xl">Registration Form</p>
        <h3 className="md:text-[5rem] text-3xl leading-10 text-center md:leading-[5rem] font-inter font-medium tracking-tighter">Start your success<br />journey here!</h3>
        <Form />
    </div>

   </>
  )
}

export default FormPage
