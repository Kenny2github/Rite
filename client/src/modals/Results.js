import React, {useState} from 'react';

const Results = (props) => {

    const [show, setShow] = useState(props.show);

    return (
        <div>
            {console.log(show)}
            {show && (
                <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
                    <div
                        className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                        <div
                            className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                        >
                            <p className="font-semibold text-gray-800">Summary</p>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex flex-col px-6 py-5 bg-gray-50">
                            {/*<p className="mb-2 font-semibold text-gray-700">Bots Message</p>*/}
                            {/*<textarea*/}
                            {/*    type="text"*/}
                            {/*    name=""*/}
                            {/*    placeholder="Type message..."*/}
                            {/*    className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"*/}
                            {/*    id=""*/}
                            {/*></textarea>*/}
                            <div className="flex flex-col text-lg sm:flex-row items-center mb-5 sm:space-x-5">
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-semibold text-gray-700">Total Spent</p>
                                    <p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        Data
                                    </p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <p className="mb-2 font-semibold text-gray-700">Shopping Category</p>
                                    <p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        Data
                                    </p>
                                </div>
                                <br/>
                                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p className="mb-2 font-semibold text-gray-700">Payment Method</p>
                                    <p className="w-full text-base p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        Data
                                    </p>
                                </div>
                            </div>
                            <hr/>

                            {/*<div className="flex items-center mt-5 mb-3 space-x-4">*/}
                            {/*    <input*/}
                            {/*        className="inline-flex rounded-full"*/}
                            {/*        type="checkbox"*/}
                            {/*        id="check1"*/}
                            {/*        name="check1"*/}
                            {/*    />*/}
                            {/*    <label className="inline-flex font-semibold text-gray-400" htmlFor="check1">*/}
                            {/*        Add a crew</label*/}
                            {/*    ><br/>*/}
                            {/*    <input*/}
                            {/*        className="inline-flex"*/}
                            {/*        type="checkbox"*/}
                            {/*        id="check2"*/}
                            {/*        name="check2"*/}
                            {/*        checked*/}
                            {/*    />*/}
                            {/*    <label className="inline-flex font-semibold text-blue-500" htmlFor="check2">*/}
                            {/*        Add a specific agent</label*/}
                            {/*    ><br/>*/}
                            {/*</div>*/}
                            {/*<div*/}
                            {/*    className="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm"*/}
                            {/*>*/}
                            {/*    <div className="flex flex-row items-center">*/}
                            {/*        <img*/}
                            {/*            className="w-10 h-10 mr-3 rounded-full"*/}
                            {/*            src="https://randomuser.me/api/portraits/lego/7.jpg"*/}
                            {/*            alt=""*/}
                            {/*        />*/}
                            {/*        <div className="flex flex-col">*/}
                            {/*            <p className="font-semibold text-gray-800">Xu Lin Bashir</p>*/}
                            {/*            <p className="text-gray-400">table.co</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <h1 className="font-semibold text-red-400">Remove</h1>*/}
                            {/*</div>*/}
                        </div>
                        <div
                            className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                        >
                            <button className="font-semibold text-gray-600">Cancel</button>
                            <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
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
