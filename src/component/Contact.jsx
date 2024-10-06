import axios from "axios";
import React from "react";
import { useForm} from "react-hook-form"
import toast from "react-hot-toast";



const Contact = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
      const userDetails = {
        name : data.name,
        email : data.email,
        message : data.message
      }
      try{
          await axios.post("https://getform.io/f/ajjezvea",userDetails);
          toast.success("Your message has been sent");
      }catch{
        console.log(err);
        toast.error("Something went wrong");
      }
    }

  return (
    <>
      <div
        name="Contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form 
          // action="https://getform.io/f/ajjezvea" 
          // method="POST"
          className="bg-slate-300 w-96 px-8 py-6 rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("name", { required: true })} 
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"

              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Enter your email</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email", { required: true })} 
                id="name"
                name="email"
                type="text"
                placeholder="abc@gmail.com"

              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="message"
                type="text"
                placeholder="Drop your message"
                {...register("message", { required: true })} 
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
