import Image from "next/image";
import { assets, stepsData, testimonialsData } from "../../public/assets";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best text to image Generator</p>
        <Image
        src='/star_icon.svg'
        height={20}
        width={20}
        alt="Placeholder image"/>
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:mex-[700px] mx-auto mt-10 text-center">Words to <span className="text-blue-600">Crafts.</span></h1>
      <p className="text-center max-w-xl mx-auto mt-5">Unleash your creativity with AI. Turn your imagination into visiual art in seconds - just type, and watch the magic happen.</p>

      <Link href='/Result'><button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">Generate Images
        <Image 
        src='/star_group.png'
        height={20}
        width={20}
        alt="Placeholder Image"/>
      </button></Link>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6).fill('').map((item, index)=>(
          <Image 
          className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
          src={index% 2 === 0 ? assets.sample_img_2: assets.sample_img_1}
          key={index}
          height={90}
          width={90}
          alt="Placeholder Image"/>
        ))}
      </div>
      <p className="mt-2 text-neutral-500">Generated images from imagify</p>



      <div className="flex flex-col items-center justify-center my-32">
        <h1 className="text-3xl sm:text-4xl">
          How it works
        </h1>
        <p className="text-lg text-gray-600 mb-8">Transform Words Into Stunning Images</p>

        <div className="space-y-4 w-full max-w-3xl text-3m">
          {stepsData.map((item,index)=>(
            <div key={index} className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursour-pointer hover:scale-[1.02] transition-all duration-300 rounded border-gray-600">
              <Image 
                
                src={item.icon}
                key={index}
                height={40}
                width={40}
                alt="Placeholder Image"/>
              <div>
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
        <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
      </div>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center ">
              <Image  
                src={assets.sample_img_1}
                height={500}
                width={500}
                alt="Placeholder Image"
                className="rounded-lg"/>
              <div>
                <h2 className="text-3xl font-medium max-w-lg mb-4 text-left">Introducing the Ai-Powered Text to Image Generator</h2>
                <p className="text-gray-600 text-left mb-4">Easily bring your ideas to life with our free AI image generator. Whether you need stunning visiuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className="text-gray-600 text-left">Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character desgins and potraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
              </div>  
      </div>

      <div className="flex flex-col items-center justify-center my-20 py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
        <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

        <div className="flex flex-wrap gap-6">
          {testimonialsData.map((testimonial, index)=>(
            <div key={index} className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col items-center">
              <Image  
                src={testimonial.image}
                height={50}
                width={50}
                alt="Placeholder Image"
                className="rounded-full"/>

              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <div className="flex mb-4 ">
                {Array(testimonial.stars).fill().map((item,index)=>(
                  <Image  
                  key={index}
                  src={assets.rating_star}
                  height={20}
                  width={20}
                  alt="Placeholder Image"
                  className=""/>
                ))}              
              </div>
              <p className="text-gray-600 text-center text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="pb-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">See Our Magic. Try Now</h1>
        <Link href='/Result'><button className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">Generate Images
                <Image  
                  src={assets.star_group}
                  height={20}
                  width={20}
                  alt="Placeholder Image"
                  className=""/>
        </button></Link>
      </div>


      
    </div>
  );
}

