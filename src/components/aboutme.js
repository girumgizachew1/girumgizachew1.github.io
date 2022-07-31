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
            <div className='basis-1/2 px-16 py-5 text-gray-400 italic leading-relaxed'>
            <h2>&lt;html&gt;</h2>
            <h2 className='px-6' >&lt;body&gt;</h2>
            
            <div className='mt-24 pl-10'>
                <div>
                    <h2 className='px-6'  >&lt;h2&gt;</h2>
                    <div className='not-italic	 px-12 text-6xl font-mono font-bold text-gray-800 hover:text-red-600 hover:text-7xl ' >
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
                    <h2 className='px-6'>&lt;h2/&gt;</h2>
                </div>
                <div className='px-6' >
                    <h2>&lt;p/&gt;</h2>
                        <p className='not-italic text-lg px-6 text-gray-800 leading-relaxed' >I am a Fullstack web Developer/ Software Engineer in AdissAbeba/Ethiopia with professional Frontend development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics. well orginized person, problem solver, independent employee with high attention to detail 
                        <button className='not-italic text-red-600 mt-2'>
                            Do you wanna make something special?
                        </button>
                        </p>
                    <h2>&lt;p/&gt;</h2>
                </div>
            </div>
            
            <div className='mt-24' >
                <h2 className='px-6' >&lt;/body&gt;</h2>
                <h2>&lt;/html&gt;</h2>
            </div>
        </div>
            <div className='basis-1/2' >

            </div>
        </div>
}</div>
)
}
export default Aboutme
