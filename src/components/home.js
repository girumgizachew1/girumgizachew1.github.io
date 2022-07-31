import { useEffect,useState } from "react";
import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import TypeAnimation from 'react-type-animation';
import UseScript  from "./useScript";
function Home( {url} ) {
    
    const [loading, setloading] = useState(false);
    UseScript(url)
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
        <div className='relative h-full w-full'>
        <canvas className="" id="canvas" ><UseScript></UseScript></canvas>
        
        <div className='absolute inset-0 px-16 py-5 text-gray-400 italic'>
            <h2>&lt;html&gt;</h2>
            <h2 className='px-6' >&lt;body&gt;</h2>
            
            <div className='mt-24'>
                <div>
                    <h2 className='px-6'  >&lt;h1&gt;</h2>
                    <div className='not-italic	 px-12 text-7xl font-bold font-serif text-red-500' >
                        <h1 className="text-gray-700">
                        <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl hover:animate-bounce"
                                cursor={false}
                                sequence={[
                                'H',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    100,
                                    'e',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    200,
                                    'y',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                        </h1>
                        <h1 className="text-gray-700" ><TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                'I ',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    100,
                                    'A',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    200,
                                    'm',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    300,
                                    ', ',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    400,
                                    'G',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    500,
                                    'i',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    600,
                                    'r',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    700,
                                    'u',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 hover:text-8xl"
                                cursor={false}
                                sequence={[
                                    800,
                                    'm',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                        </h1>
                        <h1 className="text-gray-700">
                        <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    
                                        'A Full-Stack web Developer',
                                    2000,
                                        'A Software Engineer',
                                    2000,
                                        'A graphics Designer',
                                        2000,
                                ]}
                                wrapper="a"
                                repeat={Infinity}
                            />
                        </h1>
                    </div>
                    <h2 className='px-6'>&lt;h1/&gt;</h2>
                </div>
                <div className='px-6' >
                    <h2>&lt;p/&gt;</h2>
                        <p className='not-italic text-xl px-6 text-gray-700 font-mono' >Frontend Developer / Backend Developer</p>
                    <h2>&lt;p/&gt;</h2>
                </div>
            </div>
            <button className='not-italic bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 border border-red-600 hover:border-transparent rounded px-10 m-12'>
                Contact Me
            </button>
        </div>
        
        </div>
        }
        </div>
    )
}

export default Home
