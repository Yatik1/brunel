
const Footer = () => {
  return (
    <div className="p-4 sm:p-10 mt-[5rem]">
        <footer className="border bg-[#F5F5F5] text-[#1C1C1C] rounded-3xl">
      <div className="md:h-[9rem] mx-auto sm:py-10 p-5 flex sm:flex-row flex-col md:gap-6 gap-y-2 justify-between items-center font-mdeium px-6">
        <p className="text-start text-black">
            &copy; Talup 2023. All rights reserved 
        </p>
        <span className="flex flex-row gap-x-5">
            <p className="underline">Term & Conditions</p> 
            <p className="underline">Privacy Policy</p> 
        </span>
        
      </div>
    </footer >
    </div>
  )
}

export default Footer