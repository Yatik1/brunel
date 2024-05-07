import Image from "../components/Image"
import logo from  "../assets/logo.svg"
import done from "../assets/success.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SubmitPage = () => {
  
  const [countStart , setCountStart] = useState(false)
  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate()

  useEffect(() => {
    setCountStart(true)
    function startCountDown() {
      if (countStart) {
        const timer = setTimeout(() => {
          if (countdown === 1) {
            navigate('/');
          } else {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }
        }, 1000);
  
        return () => clearTimeout(timer);
      }
    }
      startCountDown()  
  }, [countStart, countdown, navigate]);

  return (
    <div className="py-3 mx-4 px-4">
     <nav className="md:px-[2.3rem] px-5 mt-1 rounded-full flex items-start justify-start">
        <Image
         className="md:w-[10rem] md:h-[6rem] w-[5.5rem] h-[3.5rem] flex justify-center items-center"
         src={logo} 
        />
      </nav>

      <section className="flex flex-col items-center justify-center md:mt-[4rem] mt-[3rem]">
         <Image 
           src={done}
         />
         <p className="font-grace text-[#2DA950] text-[2.3rem] md:mt-[3rem] mt-2">Success Submitted</p>
         <h3 className="md:text-[5rem] md:text-3xl text-[2.5rem] leading-10 text-center md:leading-[5rem] font-inter font-medium tracking-tight text-[#1c1c1c]">Congratulations</h3>
         <h4 className="font-inter md:text-3xl text-[1rem] mt-7 text-center md:w-[50rem] h-[105px] text-[#727272]">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</h4>

         {
        countStart && (
            <>
            <h4 className="font-inter md:mt-10 mt-20 text-center p-4 text-[#727272] md:text-2xl text-md">Redirecting you to Homepage in <span className="font-bold text-black">{countdown} Seconds</span></h4>
           </>
        )
       }
      </section>
    </div>
  )
}

export default SubmitPage
