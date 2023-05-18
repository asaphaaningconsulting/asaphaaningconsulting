import {useState} from "react";

import im1 from './wavecare.jpg'
import im2 from './rejsalligevel.png'
import im3 from './zoomfilm.png'

const Customers = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return <div className="bg-black">
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="relative p-6 md:p-16">
                {/* Grid */}
                <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                            A selection of our lead projects
                        </h2>
                        {/* Tab Navs */}
                        <nav
                            className="grid gap-4 mt-5 md:mt-10"
                            aria-label="Tabs"
                            role="tablist"
                        >
                            <button
                                type="button"
                                onClick={() => handleTabClick(1)}
                                className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                                    activeTab === 1 ? 'active' : ''
                                }`}
                                id="tabs-with-card-item-1"
                                data-hs-tab="#tabs-with-card-1"
                                aria-controls="tabs-with-card-1"
                                role="tab"
                            >
              <span className="flex">
                <span className="grow ml-6">
                  <span
                      className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                   Wavecare
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                   Wavecare is a pioneer in the creation and development of sensory-based aids for relaxation, pain relief, and sleep.
                  </span>
                </span>
              </span>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleTabClick(2)}
                                className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                                    activeTab === 2 ? 'active' : ''
                                }`} id="tabs-with-card-item-2"
                                data-hs-tab="#tabs-with-card-2"
                                aria-controls="tabs-with-card-2"
                                role="tab"
                            >
              <span className="flex">
                <span className="grow ml-6">
                  <span
                      className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                   Rejs Alligevel
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                    Rejs Alligevel is an insurance product developed by Indigo Underwriters Denmark, a Danish insurance agency.
                  </span>
                </span>
              </span>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleTabClick(3)}
                                className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 ${
                                    activeTab === 3 ? 'active' : ''
                                }`} id="tabs-with-card-item-3"
                                data-hs-tab="#tabs-with-card-3"
                                aria-controls="tabs-with-card-3"
                                role="tab"
                            >
              <span className="flex">

                <span className="grow ml-6">
                  <span
                      className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                   Zoom Film
                  </span>
                  <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                   Zoom Film produces, among other things, high-end films/videos, 3D animations, motion graphics, VFX (visual effects), visualizations, VR (virtual reality), music, live streaming, still images, and storytelling at a high level.
                  </span>
                </span>
              </span>
                            </button>
                        </nav>
                        {/* End Tab Navs */}
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-6">
                        <div className="relative">
                            {/* Tab Content */}
                            <div>
                                <div
                                    id="tabs-with-card-1"
                                    className={activeTab === 1 ? '' : 'hidden'}
                                    role="tabpanel"
                                    aria-labelledby="tabs-with-card-item-1"
                                >
                                    <img
                                        className="shadow-xl shadow-gray-201 rounded-xl dark:shadow-gray-900/[.2]"
                                        src={im1}
                                        alt="Image Description"
                                    />
                                </div>
                                <div
                                    id="tabs-with-card-2"
                                    className={activeTab === 2 ? '' : 'hidden'}
                                    role="tabpanel"
                                    aria-labelledby="tabs-with-card-item-2"
                                >
                                    <img
                                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src={im2}
                                        alt="Image Description"
                                    />
                                </div>
                                <div
                                    id="tabs-with-card-3"
                                    className={activeTab === 3 ? '' : 'hidden'}
                                    role="tabpanel"
                                    aria-labelledby="tabs-with-card-item-3"
                                >
                                    <img
                                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src={im3}
                                        alt="Image Description"
                                    />
                                </div>
                            </div>
                            {/* End Tab Content */}
                            {/* SVG Element
                            <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                                <svg
                                    className="w-16 h-auto text-orange-500"
                                    width={121}
                                    height={135}
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            {/* End SVG Element */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
                {/* Background Color */}
                <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
                    <div
                        className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"/>
                </div>
                {/* End Background Color */}
            </div>
        </div>
        {/* End Features */}
    </div>
}

export default Customers
