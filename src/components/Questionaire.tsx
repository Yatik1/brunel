
import qna from "../assets/qna.svg"
import Image from "./Image"
import QuesSection from "./QuesSection"

const Questionaire = () => {

  return (
    <div className="lg:mt-[2rem] md:block hidden p-10">
      <div className="bg-[#E8EEE7] rounded-[2.5rem] flex lg:flex-row flex-col lg:items-start lg:justify-start items-center justify-center flex-1 gap-9 p-10 h-[40rem]">
        <div className="relative flex flex-col lg:items-start lg:justify-start items-center justify-center lg:gap-y-[1rem] gap-1 mt-3 ml-7 w-[40%] p-8">
          <p className="font-grace text-[#9E9D9D] lg:text-3xl text-[1.5rem] ">What's on your mind</p>
          <h3 className="lg:text-[2.5rem] text-[3rem] lg:w-fit w-screen text-center font-medium tracking-tighter">Ask Questions</h3>

          <Image 
            src={qna}
            className="absolute bottom-0 left-[-1rem] top-[12rem] hidden lg:block"
          />
        </div>
        
        <div className="lg:w-[60%] ">
        <QuesSection />
        </div>
       
      </div>
    </div>
  )
}

export default Questionaire