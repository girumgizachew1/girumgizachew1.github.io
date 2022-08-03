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
        <div className='relative h-full w-full overflow-y-auto'>
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
                                className="hover:text-red-600"
                                cursor={false}
                                sequence={[
                                'H',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    100,
                                    'e',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
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
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                'I ',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    100,
                                    'A',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    200,
                                    'm',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    300,
                                    ', ',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    400,
                                    'G',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600"
                                cursor={false}
                                sequence={[
                                    500,
                                    'i',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600"
                                cursor={false}
                                sequence={[
                                    600,
                                    'r',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
                                cursor={false}
                                sequence={[
                                    700,
                                    'u',
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                            <TypeAnimation
                                className="hover:text-red-600 "
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
        <div className="bg-gray-800 w-full h-screen" >
        <div className='flex flex-col' >
            <div className='basis-1/2 px-16 py-5 text-gray-400 italic leading-relaxed'>
            <div className="flex flex-row">            
                <div className='pl-10'>
                    <div>
                        <h2 className='px-6'  >&lt;h2&gt;</h2>
                        <div className='not-italic	 px-12 text-6xl font-mono font-bold text-gray-800 hover:text-red-600 hover:text-7xl ' >
                            <h1>
                            <TypeAnimation
                                    cursor={false}
                                    sequence={[
                                    'My portfolio',
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
                            <p className='not-italic text-lg px-6 text-gray-800 leading-relaxed' >I am a Fullstack web Developer/ Software Engineer in AdissAbeba/Ethiopia with professional Frontend development skills. 
                            
                            </p>
                        <h2>&lt;p/&gt;</h2>
                    </div>
                </div>
                <div>
                    <h1 className="text-9xl font-sans absolute opacity-20" >Work</h1>
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




















        </div>
 
        <div className='flex flex-row' >
                <div className='basis-1/2 px-16 py-5 text-gray-400 italic leading-relaxed'>
                <div className='mt-6 pl-10'>
                    <div>
                        <h2 className='px-6'  >&lt;h2&gt;</h2>
                        <div className='not-italic	 px-12 text-6xl font-mono font-bold text-red-600 ' >
                            <h1>
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                'Skill And',
                                ]}
                                wrapper="a"
                                repeat={3}
                            />
                            </h1>
                            <h1>
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                'Experience',
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
                            <p className='not-italic text-lg px-6 text-gray-800 leading-relaxed' >I am a Fullstack web Developer/ Software Engineer in AdissAbeba/Ethiopia with professional Frontend development skills.... 
                            <button className='not-italic text-red-600 mt-2'>
                                Wanna Read more?
                            </button>
                            </p>
                        <h2>&lt;p/&gt;</h2>
                    </div>
                </div>    
            </div>
                <div className='basis-1/2 flex flex-col  py-5' >
                    <div className='basis-1/2 flex flex-col' >
                        <div className='basis-1/2 px-16 py-5 text-gray-400 italic leading-relaxed'>
                    <div className='pl-10'>
                        <div>
                            <h2 className='px-6'  >&lt;h2&gt;</h2>
                            <div className='not-italic	 px-12 text-6xl font-mono font-bold text-red-600' >
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
                    </div>    
                 
                </div>



















                </div>
            </div>
            <div className='text-white flex flex-col bg-gray-800' >
            <div className='basis-3/5 pl-16 py-5 text-gray-400 italic leading-relaxed'>

            
            <div className=' pl-10'>
                <div>
                    <h2 className='px-6'  >&lt;h2&gt;</h2>
                    <div className='not-italic	 px-12 text-6xl font-mono font-bold text-white' >
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
                        <p className='not-italic text-lg px-6 text-white leading-relaxed' > 
                        Have a question or want to work together?
        
                        </p>
            
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
            
                </div>
            </div>
            
            <div className='' >
                <h2 className='px-6' >&lt;/body&gt;</h2>
                <h2>&lt;/html&gt;</h2>
            </div>
        </div>
         
        </div>
        </div>
        
        }
        </div>
    )
}

export default Home
