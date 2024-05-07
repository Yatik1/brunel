// import { FormEvent, useState } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name:z.string().min(2 , {message:"Name must be at least 2 characters long"}),
  email:z.string().email({message : "Enter a valid email address."})
})

type FormFields = z.infer<typeof schema>

const Form = () => {

  const {register,handleSubmit,setError,
    formState : {errors , isSubmitting}
  } = useForm<FormFields>({
    defaultValues : {
      email: ""
    },
    resolver:zodResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit:SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      navigate("/submit")
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 font-inter flex flex-col justify-center items-center gap-y-6">
       <input 
          {...register("name")}
          type="text"
          className="md:px-10 md:py-8 px-4 py-4 border focus:outline-none rounded-full md:w-[26rem] text-[20px] bg-[#EFEFEF] font-[#827A7A]"
          placeholder="Enter your name"
       /> 
       { errors.name && (
        <div className="text-[#FF0808] font-bold mt-[-1.3rem]">{errors.name.message}</div>
       )}
       <input 
          {...register("email")}
          type="email"
          className="md:px-10 md:py-8 px-4 py-4 border focus:outline-none rounded-full md:w-[26rem] text-[20px] bg-[#EFEFEF] font-[#827A7A]"
          placeholder="Enter your email" 
       />
        {errors.email && (
        <div className="text-[#FF0808] font-bold mt-[-1.3rem]">{errors.email.message}</div>
      )}

       <Button
         label="Submit"
         disabled={isSubmitting}
         className="mt-4 md:px-10 md:py-8 px-5 py-4 mb-4 text-white bg-black md:w-[26rem] w-[15rem] text-[20px] disabled:opacity-25 disabled:cursor-not-allowed hover:bg-[#1c1c1c]"
       />
       {errors.root && <div className="text-[#FF0808] font-bold">{errors.root.message}</div>}
       
    </form>
  )
}

export default Form