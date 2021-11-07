import React, { useState } from 'react';
import './styles.css';
import { payment_methods, spending_categories } from '../utils/Options';

const History = (props) => {

    const [show] = useState(props.show);
    const [history] = useState(JSON.parse(localStorage.getItem('data')));

    return (
        <div>
            {(show && history) && (
                <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
                    <div
                        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                        <div
                            className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                        >
                            <p className="font-semibold text-gray-800">Spending History</p>
                            <a href="/">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </a>
                        </div>
                        <div className="flex px-10 py-5 bg-gray-50">
                            <div className="flex flex-col text-lg sm:flex-row items-center mb-5 sm:space-x-5">
                                <table border={1}>
                                    <tbody>
                                    <tr>
                                        <th>Total Spent ($)</th>
                                        <th>Spending Category</th>
                                        <th>Payment Method</th>
                                    </tr>
                                    {history.map((el, idx) => (
                                        <tr key={idx}>
                                            <td>{el.total}</td>
                                            <td>{spending_categories[el.spending_category]}</td>
                                            <td>{payment_methods[el.payment_method]}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <hr/>
                        </div>
                        <div
                            className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                        >
                            {/*<button*/}
                            {/*    className="font-semibold text-gray-600"*/}
                            {/*    onClick={() => handleConfirmation(false)}>*/}
                            {/*    Cancel*/}
                            {/*</button>*/}
                            <a
                                className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
                                href="/"
                            >
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default History;
