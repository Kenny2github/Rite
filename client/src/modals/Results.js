import React, { useState } from 'react';

const Results = (props) => {

    const [show, setShow] = useState(props.show);
    const [results, setResults] = useState(props.results);

    const handleConfirmation = (confirmed) => {
        if(results && confirmed) {
            if(!localStorage.getItem('data'))
                localStorage.setItem('data', JSON.stringify([]));
            else {
                let data = JSON.parse(localStorage.getItem('data'));
                data.push({
                    'total': results.total,
                    'spending_category': results.spending_category,
                    'payment_method': results.payment_method
                });
                localStorage.setItem('data', JSON.stringify(data));
                // reset results just in case
                setResults({});
            }
        }
        setShow(false);
    }

    return (
        <div>
            {(show && results) && (
                <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
                    <div
                        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                        <div
                            className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                        >
                            <p className="font-semibold text-gray-800">Summary</p>
                            <button onClick={() => handleConfirmation(false)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col px-6 py-5 bg-gray-50">
                            <div className="flex flex-col text-lg sm:flex-row items-center mb-5 sm:space-x-5">
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-semibold text-gray-700">Total Spent</p>
                                    <p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        {results.total}
                                    </p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-semibold text-gray-700">Shopping Category</p>
                                    <p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        {results.spending_category}
                                    </p>
                                </div>
                                <br/>
                                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p className="mb-2 font-semibold text-gray-700">Payment Method</p>
                                    <p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        {results.payment_method}
                                    </p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                        <div
                            className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                        >
                            <button
                                className="font-semibold text-gray-600"
                                onClick={() => handleConfirmation(false)}>
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
                                onClick={() => handleConfirmation(true)}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Results;