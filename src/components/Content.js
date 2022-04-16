import React, { useEffect, useState } from "react";
import NavDrawer from "./NavDrawer";
import "./conetnt.css"
export default function Content (){
    const [data, setData] = useState([]);
    const [data1, setData1] =  useState([]);

    useEffect (() => {
        const url = "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
        async function fetchData (){
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            // console.log(data)
            // console.log(data[0])
            // const data1 = data[0]["available"]
            // const x = data[0]["available"]
            setData(data)
        }
        fetchData()
    }, [])

    const slot22 = async() => {
        setData1(data[0]['available'])   
    }

    const slot23 = async() => {
        setData1(data[1]['available'])   
    }

    const slot24 = async() => {
        setData1(data[2]['available'])   
    }

    const slot25 = async() => {
        setData1(data[3]['available'])   
    }


    return (
        <>
        <div className="">
            <NavDrawer/>
        </div>
        <div className="" id="body" >
            <h2 className="py-5 px-5"><b><span className="border-b-4 border-blue-500 py-2">Bo</span><span className="border-b-4 border-red-500 py-2">ok</span> Demo Session Slot</b></h2>
        
        <h4 className="py-5 px-5 "><b>Select Date</b></h4>
        <div role="group">     
        <div className="flex px-5 ml-5 inline-flex pb-4">
            <button onClick={slot22} className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>22</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>
        

        <div className="flex px-5 ml-5 inline-flex pb-4">
            <button onClick={slot23} className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>23</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>

        <div className="flex px-5 ml-5 inline-flex pb-4">
            <button onClick={slot24} className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>24</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>

        <div className="flex px-5 ml-5 inline-flex pb-4">
            <button onClick={slot25} className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>25</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>

        <div className="flex px-5 ml-5 inline-flex">
            <button className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>26</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>

        <div className="flex px-5 ml-5 inline-flex pb-4">
            <button className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>27</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>

        <div className="flex px-5 ml-5 inline-flex pb-4">
            <button className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded">  
                <div className="p-5 outline outline-blue-700 rounded">
                    <p>Mon</p>
                    <h6>28</h6>
                    <p>Feb</p>
                </div> 
            </button>
        </div>

        </div>


        <h4 className="py-5 px-5"><b>Select Slot</b></h4>
        {
                   data1.map((value)=>
                       
                        <>
                        <div role="group"className="inline-flex pb-5">
                        <div className="flex px-5 ml-5 inline-flex">
                            <button className="focus:bg-green-700 focus:text-black focus:outline focus:outline-green-700 focus:rounded p-2 px-5 mx-5 outline outline-blue-700 rounded flex inline-flex">  
                                <b>{value.hour} : {value.min} PM - {value.hour + 1} : {value.min} PM </b>
                            </button> 
                        </div>
                        </div>
                        </>
                   )
        
        }

       <div className="p-5 ml-5">
            <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Proceed to pay
            </button>
        </div>
        </div>

        </>
    )
}