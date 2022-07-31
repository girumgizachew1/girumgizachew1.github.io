import React from 'react'

function work() {
    return (
        <div>
            <div className='px-16 py-5 text-gray-400 italic'>
            <h2>&lt;html&gt;</h2>
            <h2 className='px-6' >&lt;body&gt;</h2>
            
            <div className='mt-24'>
                <div>
                    <h2 className='px-6'  >&lt;h1&gt;</h2>
                    <div className='not-italic	 px-12 text-7xl font-mono text-black' >
                        <h1>
                            HI,
                        </h1>
                        <h1>
                            I'm girum,
                        </h1>
                        <h1>
                            Software Engineer,
                        </h1>
                    </div>
                    <h2 className='px-6'>&lt;h1/&gt;</h2>
                </div>
                <div className='px-6' >
                    <h2>&lt;p/&gt;</h2>
                        <p className='not-italic text-xl px-6 text-black font-mono' >Frontend Developer / Backend Developer</p>
                    <h2>&lt;p/&gt;</h2>
                </div>
            </div>
            <button className='not-italic bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 border border-red-500 hover:border-transparent rounded px-10 m-12'>
                Contact Me
            </button>
        </div>
        </div>
    )
}
        export default work
