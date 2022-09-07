/* eslint-disable react/style-prop-object */
import React, {useState, useEffect} from 'react'
import BarLoader from "react-spinners/BarLoader";
import TypeAnimation from 'react-type-animation';

function Skill() {
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
                <div className=' text-red-600 flex flex-col place-items-center pt-64'>
                     <p className='text-bs py-2 pl mb-2 font-bold text-gray-400 drop-shadow-2xl' >Giri is Thinking</p>
                    <div className='blur-sm' >
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
            <div className='flex flex-col' >
                <div className='basis-1/2 px-1 lg:px-16 py-1 lg:py-5 text-gray-400 italic leading-relaxed'>
                <h2>&lt;html&gt;</h2>
                <h2 className='px-2 lg:px-6' >&lt;body&gt;</h2>
                
                <div className=' mt-1 lg:mt-10 pl-1 lg:pl-10'>
                    <div>
                        <h2 className='lg:px-6'  >&lt;h2&gt;</h2>
                        <div className='not-italic	lg:px-12 text-4xl lg:text-5xl font-mono font-bold text-red-500 hover:text-4xl lg:hover:text-5xl hover:text-red-700' >
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
                    <div className='px-2 lg:px-6 flex flex-col lg:flex-row' >
                        <div className='basis-1/2'>
                        <h2>&lt;p/&gt;</h2>
                            <p className='not-italic text-lg lg:px-6 text-gray-800 leading-relaxed' >I am a Fullstack web Developer/ Software Engineer in AdissAbeba/Ethiopia with professional Frontend development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics. well orginized person, problem solver, independent employee with high attention to detail 
                            <button className='not-italic text-red-600 mt-2'>
                                Do you wanna make something special?
                            </button>
                            </p>
                        <h2>&lt;p/&gt;</h2>
                    </div>
                
                <div className='mx-auto basis-1/2 flex flex-col w-full px-4' >
                    <div className='basis-1/2 flex flex-col lg:-mt-40'>
                        <div className='py-2 ' >
                        <p>Front-End</p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                                <div className="bg-red-500 h-1.5  rounded-full w-11/12"></div>
                            </div>    
                        </div>
                        <div className='py-2' >
                        <p>Back-End</p>
                            <div className="w-full bg-gray-200 rounded-full   h-1.5  dark:bg-gray-700">
                                <div className="bg-cyan-600  h-1.5 rounded-full w-10/12"></div>
                            </div>    
                        </div>
                        <div className='py-2' >
                        <p>ReactJS</p>
                            <div className="w-full bg-gray-200 rounded-full  h-1.5  dark:bg-gray-700">
                                <div className="bg-green-600  h-1.5  rounded-full w-9/12"></div>
                            </div>    
                        </div>
                        <div className='py-2' >
                        <p> Product Development'
                              </p>
                            <div className="w-full bg-gray-200 rounded-full  h-1.5 dark:bg-gray-700">
                                <div className="bg-red-600  h-1.5 rounded-full w-8/12"></div>
                            </div>    
                        </div> 
                    </div>
                    <div className='basis-1/2 flex flex-col xl:flex-row lg:pr-20 mt-20 ' >
                        <div className='basis-1/2 h-64 lg:h-64 w-full  bg-red-500 rounded-lg' >
                            <p className='p-6  text-xl text-white  ' >Frontend Developer</p>
                            <p className='px-6 py-1  text-lg text-white' >From 2020</p>
                            <p className='p-6  text-lg text-white' >Creative and Award winning developer that can design a beautifull websites and bring your online business to life</p>

                        </div>
                        <div className='basis-1/2 lg:h-64 h-64 w-full  bg-red-500 rounded-lg' >
                            <p className='px-6 py-1  text-xl text-white' >Backend Developer</p>
                            <p className='px-6 py-1  text-lg text-white' >From 2020</p>
                            <p className='px-6 py-1  text-lg text-white' >Creative and Award winning developer that can design a beautifull websites and bring your online business to life</p>

                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className='mt-12' >
                    <h2 className='px-6' >&lt;/body&gt;</h2>
                    <h2>&lt;/html&gt;</h2>
                </div>
            </div>
                
            </div>
            }
        </div>
    )
}
        export default Skill
