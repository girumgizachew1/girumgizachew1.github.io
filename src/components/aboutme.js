import { useEffect,useState } from "react";
import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import TypeAnimation from 'react-type-animation';

function Aboutme() {
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
            <div className='w-screen h-screen mx-auto' >
            <div className=' text-red-600 flex flex-col place-items-center pt-72'>
                 <p className='text-bs py-2 pl mb-2 font-bold text-gray-400' >Giri is Thinking</p>
                    <div className='' >
                    <BarLoader
                        color="#FF0404"
                        cssOverride={{}}
                        height={4}
                        loading
                        speedMultiplier={1}
                        width={350}
                        />
                        </div>
                </div>
            </div>
        :
   <div className='flex flex-col w-100vh' >
            <div className='basis-1/2 md:px-16 md:py-5 text-gray-400 italic leading-relaxed'>
            <h2>&lt;html&gt;</h2>
            <h2 className='px-6' >&lt;body&gt;</h2>
            
            <div className='mt-4 lg:mt-12 px-1 md:pl-10'>
                <div>
                    <h2 className='px-1'  >&lt;h2&gt;</h2>
                    <div className='not-italic  md:px-4 md:text-5xl	 px-2 text-5xl font-mono font-bold text-red-600 hover:text-red-800 hover:text-5xl ' >
                        <h1>
                        <TypeAnimation
                                cursor={false}
                                sequence={[
                                'About Me!',
                                ]}
                                wrapper="a"
                                repeat={3}
                            />
                             
                        </h1>
                    </div>
                    <h2 className='px-1'>&lt;h2/&gt;</h2>
                </div>
                <div className='px-2 flex flex-col md:flex md:flex-row mx-auto' >
                    <div className='basis-1/2'>
                    <h2>&lt;p/&gt;</h2>
                        <p className='not-italic text-lg -px-6 md:px-2 text-gray-800 leading-relaxed' >I am a Fullstack web Developer/ Software Engineer in AdissAbeba/Ethiopia with professional Frontend development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics. well orginized person, problem solver, independent employee with high attention to detail<br/> 
                        <button className='not-italic text-red-600 mt-2'>
                            Do you wanna make something special?
                        </button>
                        </p>
                    <h2>&lt;p/&gt;</h2>  
                    </div>
                    <div className='basis-1/2' >
                    <h2>&lt;p/&gt;</h2>
                        <p className='not-italic text-lg px-2 text-gray-800 leading-relaxed' >I am a Fullstack web Developer/ Software Engineer in AdissAbeba/Ethiopia with professional Frontend development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics. well orginized person, problem solver, independent employee with high attention to detail <br/> 
                        <button className='not-italic text-red-600 mt-2'>
                            Do you wanna make something special?
                        </button>
                        </p>
                    <h2>&lt;p/&gt;</h2>  

                    </div>
                </div>
            </div>
            
            <div className='mt-24' >
                <h2 className='px-6' >&lt;/body&gt;</h2>
                <h2>&lt;/html&gt;</h2>
            </div>
        </div>
        </div>
}</div>
)
}
export default Aboutme
