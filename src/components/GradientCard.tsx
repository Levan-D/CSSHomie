/** @format */

import React from "react"
import { gradientSwatches } from "../data/GradientData"
import Tooltip from "./Tooltip"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setNewStops } from "../features/colors/gradientMaker/gradientSlice"

type Props = { swatch: gradientSwatches; apply?: boolean }

export default function GradientCard({ swatch, apply = false }: Props) {
  const dispatch = useAppDispatch()
  //   const kind = Gradient.kind === "repeating" ? "repeating-" : ""
  const type = swatch.type
  //   const params =
  //     Gradient.type === "linear"
  //       ? Gradient.linearParams.degree + `deg`
  //       : Gradient.type === "radial"
  //       ? `${Gradient.radialParams.shape} at ${Gradient.radialParams.coords.x}% ${Gradient.radialParams.coords.y}%`
  //       : `from ${Gradient.conicParams.degree}deg at ${Gradient.conicParams.coords.x}% ${Gradient.conicParams.coords.y}%`
  const style = swatch.stops
    .map(stop => `rgba(${stop.color}, ${stop.opacity / 100}) ${stop.percent}%`)
    .join(",")

  const gradient = `${``}${type}-gradient(${135}deg, ${style})`
  return (
    <div className="rounded-lg bg-slate-500 p-2 duration-300 hover:shadow-[0px_0px_12px_6px_rgba(255,_255,_255,0.7)]">
      <div
        style={{
          background: gradient,
        }}
        className={`group h-36 w-72 rounded-lg `}
      >
        <div className="flex h-36 w-72 items-center justify-center opacity-0 transition delay-100 duration-300 group-hover:opacity-100">
          <div className="mx-4 w-fit break-words rounded-lg bg-slate-500 bg-opacity-50 p-2 text-center">
            {`background: ${gradient};`.length > 110
              ? `background: ${gradient};`.slice(0, 110) + "..."
              : `background: ${gradient};`}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-1 pt-2">
        <div>{swatch.name}</div>
        <div className="flex  gap-2">
          {apply && (
            <Tooltip text="Applied" onClick={true}>
              <div
                onClick={() => dispatch(setNewStops(swatch.stops))}
                className="btnSecondary shadow-custom  py-1 text-sm"
              >
                Apply
              </div>
            </Tooltip>
          )}
          <Tooltip text="Copied" onClick={true}>
            <div
              onClick={() => {
                navigator.clipboard.writeText(`background: ${gradient};`)
              }}
              className="btnSecondary shadow-custom  py-1 text-sm"
            >
              Copy
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
