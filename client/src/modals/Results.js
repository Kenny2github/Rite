import React, { useState } from 'react';
import { payment_methods, spending_categories } from '../utils/Options';
import Confirmation from '../alerts/Confirmation';

const Results = (props) => {

    const [show, setShow] = useState(props.show);
    const [results, setResults] = useState(props.results);
    const [showAlert, setShowAlert] = useState(false);

    const handleConfirmation = (confirmed) => {
        if(results && confirmed) {
            console.log(results)
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
                setResults(null);
            }
        }
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            setShow(false);
        }, 2000)
    }

    const updateResults = (total, cat, meth) => {
        setResults({
            total,
            'spending_category': cat,
            'payment_method': meth
        });
    }

    return (
        <div>
            {(show && results) && (
                <div>
                    {showAlert && (<Confirmation/>)}
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
                            <div className="flex px-6 py-5 bg-gray-50">
                                <div className="flex flex-col text-lg sm:flex-row items-center mb-5 sm:space-x-5">
                                    <div className="w-full sm:w-1/2">
                                        <p className="mb-2 font-semibold text-gray-700">Total Spent ($)</p>
                                        {/*<p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">*/}
                                        {/*    {results.total}*/}
                                        {/*</p>*/}
                                        <input
                                            type="number" name=""
                                            className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                                            defaultValue={results.total}
                                            onChange={(e) =>
                                                updateResults(e.target.value, results.spending_category, results.payment_method)}
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <p className="mb-2 font-semibold text-gray-700">Spending Category</p>
                                        {/*<p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">*/}
                                        {/*    {results.spending_category}*/}
                                        {/*</p>*/}
                                        <select
                                            type="text"
                                            name=""
                                            className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                            id=""
                                            defaultValue={results.spending_category}
                                            onChange={(e) =>
                                                updateResults(results.total, e.target.value, results.payment_method)}
                                        >
                                            {spending_categories.map((el, idx) => <option key={idx} value={idx}>{el}</option>)}
                                        </select>
                                    </div>
                                    <br/>
                                    <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                        <p className="mb-2 font-semibold text-gray-700">Payment Method</p>
                                        {/*<p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">*/}
                                        {/*    {results.payment_method}*/}
                                        {/*</p>*/}
                                        <select
                                            type="text"
                                            name=""
                                            className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                                            id=""
                                            defaultValue={results.payment_method}
                                            onChange={(e) =>
                                                updateResults(results.total, results.spending_category, e.target.value)}
                                        >
                                            {payment_methods.map((el, idx) => <option key={idx} value={idx}>{el}</option>)}

                                        </select>
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
                </div>
            )}
        </div>
    );
};

export default Results;
