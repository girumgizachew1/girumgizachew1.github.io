import { useEffect,useState } from "react";
import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import TypeAnimation from 'react-type-animation';

function Contact() {
    const [loading, setloading] = useState(false);
    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
            setloading(false)
        },2000)
    },[])
    return (
        <div>
            { loading ?
            <div className='w-full h-screen ' >
                <div className=' text-red-600 flex-col mt-72 mx-96 px-60'>
                     <p className='text-bs py-1 mb-2 font-bold text-gray-400' >Giri is Thinking</p>
                    <div className='-ml-36' >
                    <BarLoader
                        color="#FF0404"
                        cssOverride={{}}
                        height={4}
                        loading
                        speedMultiplier={1}
                        width={400}
                        />
                        </div>
                </div>
            </div>
        :
   <div className='flex flex-row' >
            <div className='basis-3/5 pl-16 py-5 text-gray-400 italic leading-relaxed'>
            <h2>&lt;html&gt;</h2>
            <h2 className='px-6' >&lt;body&gt;</h2>
            
            <div className='mt-8 pl-10'>
                <div>
                    <h2 className='px-6'  >&lt;h2&gt;</h2>
                    <div className='not-italic	 px-12 text-6xl font-mono font-bold text-red-600 hover:text-red-600 ' >
                        <h1>
                        <TypeAnimation
                                cursor={false}
                                sequence={[
                                'Contact Me!',
                                ]}
                                wrapper="a"
                                repeat={3}
                            />
                             
                        </h1>
                    </div>
                    <h2 className='px-6'>&lt;h2/&gt;</h2>
                </div>
                <div className='px-6' >
                    <h2>&lt;p/&gt;</h2>
                        <p className='not-italic text-lg px-6 text-gray-800 leading-relaxed' > 
                        Have a question or want to work together?
        
                        </p>
                    <h2>&lt;p/&gt;</h2>
                    <h2>&lt;form&gt;</h2>
    
                    <form class="w-full mt-2 px-2">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-200" id="grid-first-name" type="text" placeholder="Name">
                                </input>
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-200" id="grid-last-name" type="Email" placeholder="Email">
                                </input>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full px-3">
                                <input class=" appearance-none block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-200" id="grid-password" type="text" placeholder="Subject">
                                </input>
                                <textarea class="appearance-none block w-full bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-200 h-28 " id="grid-password" type="text" placeholder="Message">
                                </textarea>
                            </div>
                            </div>
                            <div className="flex flex-row-reverse" >
                            <button className='not-italic bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 border border-red-600 hover:border-transparent rounded w-32 px-10 '>
                                            Send
                                </button>
                            
                            </div>
                            
                    </form>
                    <h2 className="mt-2" >&lt;/form&gt;</h2>
                </div>
            </div>
            
            <div className='mt-8' >
                <h2 className='px-6' >&lt;/body&gt;</h2>
                <h2>&lt;/html&gt;</h2>
            </div>
        </div>
            <div className='basis-2/5 bg-slate-100' >

            </div>
        </div>
}</div>
)
}
        export default Contact
