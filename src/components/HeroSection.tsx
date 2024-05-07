import Image from "./Image"
import board from "../assets/image.svg"
import Button from "./Button"
import { FaArrowRight } from "react-icons/fa";
import backEffect from "../assets/backEffect.svg"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
       
       <div className="flex flex-col items-center justify-center gap-y-4">
         <div className="font-grace text-[#2DA950] text-3xl">Success stories</div>
          <h3 className="md:text-[5rem] text-3xl leading-10 text-center md:leading-[5rem] font-medium tracking-tighter">Every success journey <br /> we’ve encountered.</h3>
       </div>
 
       <div className="flex lg:flex-row flex-col md:items-start items-center justify-center mt-[3rem] md:mt-[6rem] gap-x-4 w-fit md:px-[3rem]">
        
         <div className="flex items-center justify-center">
          <Image 
            src={board}
            className="lg:w-[60rem] md:w-[50rem] sm:w-[35rem] w-[25rem]"
          />
         </div>
         
         <div className="relative flex flex-row lg:items-start items-center justify-center lg:mt-[6rem]">
            <div className="lg:ml-[-12rem] ml-[3rem] p-8">
              <h2 className="md:text-[2.5rem] text-[1.5rem] md:leading-[45px] leading-7 tracking-tight font-medium font-[#1C1C1C]">Enhance fortune 50 company’s insights teams research capabilities.</h2>
            
            <div className="absolute top-[6.5rem] md:top-[9rem] lg:top-[21rem] lg:left-[-10rem]">
               <Button 
                label="Explore More"
                className="p-4 md:p-5 mt-[2rem] text-white bg-[#1C1C1C] lg:mt-7 hover:bg-white hover:text-black hover:border border-black"
                icon={<FaArrowRight />}
               />
            </div>
            <Image 
                src={backEffect}
                className="absolute lg:hidden lg:top-0 lg:w-[25rem] z-[-999] top-[-14rem] left-[12rem] "
            />
            </div>
         </div>
       </div>

    </div>
  )
}

export default HeroSection