import React from 'react';

const PricingPage = () => {
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-black">

            <div
               className="block max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-auto">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Software Developer Consultant Pricing for Services</h5>
                <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-400 font-semibold mb-2 text-lg">Hourly Rate:</p>
                    <p className="text-gray-700 dark:text-gray-400">Our standard hourly rate for software development consulting services is $150.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-gray-700 dark:text-gray-400 font-semibold mb-2 text-lg">Fixed-Price Projects:</h2>
                    <p className="text-gray-700 dark:text-gray-400">For fixed-price projects, we provide customized quotes based on the specific requirements and scope of the project. Please contact us to discuss your project in detail and receive a tailored pricing proposal.</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-gray-700 dark:text-gray-400 font-semibold mb-2 text-lg">Additional Services:</h2>
                    <ul className="list-disc list-inside">
                        <li className="text-gray-700 dark:text-gray-400">TDD</li>
                        <li className="text-gray-700 dark:text-gray-400">Code Review and Optimization</li>
                        <li className="text-gray-700 dark:text-gray-400">Technical Architecture Design</li>
                    </ul>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-400">Please note that the prices mentioned above are subject to change based on the complexity and duration of the project. For a detailed and accurate pricing estimate, please contact us to discuss your specific requirements.</p>
                </div>
            </div>
        </div>


        </>
    );
};

export default PricingPage;
