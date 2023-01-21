/** @format */

import React from "react"

const TDEffects = () => {
  return (
    <section id="3D effects">
      <h3 className="font-cursiveCustom text-xl mb-4 mt-24">3D effects</h3>
      <p>If you layer inner and outer shadows you can create the perception of depth.</p>
      <h4 className="font-bold my-8">Rules used below:</h4>
      <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className=" flex gap-4 ">
          <div className="text-blue-300">
            1&#41; box-shadow<span className="text-white px-[4px]">:</span> <br />
          </div>
          <div className="text-green-300">
            inset -5px -5px 16px -10px rgba(220, 220, 220,0.6), <br />
            inset 5px 5px 16px 2px rgba(0, 0, 0,1), <br />
            inset 12px 12px 4px 150px rgba(0, 0, 0,0.05)
            <span className="text-white pl-[4px] ">;</span>
          </div>
        </div>
        <div className="flex gap-4  mt-4 ">
          <div className="text-blue-300">
            2&#41; box-shadow<span className="text-white px-[4px]">:</span> <br />
          </div>
          <div className="text-green-300">
            inset -30px -30px 30px -10px rgba( 0, 0, 0,1), <br /> inset -15px -18px 53px
            20px rgba( 31, 31, 31,0.7),
            <br /> inset -40px -60px 52px 81px rgba( 64, 64, 64,1),
            <br /> inset 12px 12px 20px 150px rgba(255, 255, 255,1),
            <br /> 12px 12px 4px 0px rgba(255,255,255,0.2);
            <span className="text-white pl-[4px] ">;</span>
          </div>
        </div>
      </div>
      <h4 className="font-bold  my-8">Results:</h4>
      <div className="lg:flex justify-center gap-8 ">
        <div className="bg-transparent mx-auto text-white px-12 py-16 rounded-xl w-fit shadow-[inset_-5px_-5px_16px_-10px_rgba(220,_220,_220,0.6),inset_5px_5px_16px_2px_rgba(0,_0,_0,1),inset_12px_12px_4px_150px_rgba(0,_0,_0,0.05)] ">
          <blockquote>
            <q className="    text-lg text-slate-500 ">
              Roads? Where we're going we don't need roads.
            </q>
            <p className="text-right font-bold mt-4  text-lg text-slate-500">
              &mdash; Doc Brown
            </p>
          </blockquote>
        </div>
        <div className="bg-black  mx-auto mt-6 lg:mt-0 text-gray-500 px-12 py-16 rounded-full  w-[200px] h-[200px] shadow-[inset_-30px_-30px_30px_-10px_rgba(_0,_0,_0,1),inset_-15px_-18px_53px_20px_rgba(_31,_31,_31,0.7),inset_-40px_-60px_52px_81px_rgba(_64,_64,_64,1),inset_12px_12px_20px_150px_rgba(255,_255,_255,1),12px_12px_12px_0px_rgba(0,0,0,1)] ">
          <blockquote>
            <q className="    text-lg text-gray-400  ">Yo Adrian!</q>
            <p className="text-right font-bold mt-4   text-lg">- Rocky</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default TDEffects
