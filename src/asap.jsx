import React from 'react'

import im1 from './im1.png'
import im2 from './im2.png'
import im3 from './im3.png'

const Asap = () => {
  return <section className="relative bg-black py-20 2xl:py-40 overflow-hidden">
  <div className="relative max-w-4xl px-4 lg:px-0 mx-auto py-10">
    <div className="max-w-xl mb-14 lg:mb-28">
      <span className="text-lg text-blue-400 font-semibold">A$AP HAANING CONSULTING</span>
      <h2 className="mt-8 text-5xl text-white font-bold font-heading">Software Engineer for hire.</h2>
    </div>
    <div className="relative">
      <div className="hidden lg:block absolute top-0 left-0 -ml-80">
        <img className="-ml-24 w-112 h-96 object-cover" src={im2} alt />
      </div>
      <div className="hidden lg:block absolute top-0 right-0 -mr-80">
        <img className="-mr-52 w-112 h-96 object-cover" src={im3} alt />
      </div>
      <div className="relative max-w-4xl mx-auto">
        <img className="w-full h-96 mb-12 object-cover" src={im1} alt />
      </div>
    </div>
  </div>
</section>
}

export default Asap;
