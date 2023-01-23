/** @format */

import React from "react"

const MultipleShadows = () => {
  return (
    <section id="Multiple shadows">
      <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Multiple shadows</h3>
      <p>
        Adding depth and dimension to web designs can be achieved by utilizing multiple
        box shadows. This can be accomplished by applying multiple shadows to an element
        using the CSS 'box-shadow' property. By comma-separating different values, you can
        create unique and visually interesting effects that can add depth and dimension to
        your designs.
      </p>

      <div>
        <h4 className="font-bold my-8 font-cursiveCustom">Rule used below:</h4>
        <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="flex gap-4 ">
            <div className="text-blue-300">
              box-shadow<span className="text-white px-[4px]">:</span> <br />
            </div>
            <div className="text-green-300">
              inset -14px -15px 22px -2px rgba(0, 0, 0,0.35),
              <br /> 0px 0px 0px 4px rgba( 150, 150, 150,1), <br />
              8px 12px 4px 0px rgba(255, 255, 255,0.29)
              <span className="text-white pl-[4px] ">;</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold my-8 font-cursiveCustom">Result:</h4>
        <div className="bg-slate-200 text-slate-900 px-8 py-5 rounded-xl w-fit mx-auto my-8   shadow-[inset_-8px_-8px_8px_0px_rgba(0,0,0,0.25),0px_0px_0px_2px_rgba(100,100,100,1),8px_12px_4px_0px_rgba(255,255,_255,0.30)] ">
          <blockquote>
            <q>
              Do you think God stays in heaven because he, too,
              <br />
              lives in fear of what he's created here on earth?
            </q>
            <p className="text-right font-bold mt-4  text-slate-900   ">
              &mdash; Dr. Romero
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default MultipleShadows