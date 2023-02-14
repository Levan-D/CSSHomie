/** @format */

import { useState } from "react"
import SideMenu from "../../../../components/wrappers/SideMenu"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import {
  resetState as resetStateAction,
  setType,
  setKind,
  setRadialShape,
  setStopColor,
  setStopOpacity,
  setStopPercentage,
  addNewStop,
  deleteStop,
} from "../linearGradientSlice"

import TypePicker from "./TypePicker"
import KindPicker from "./KindPicker"
import StopsDisplay from "./StopsDisplay"
import StopsSlider from "./StopsSlider"
import RadialOps from "./RadialOps"

const LinearGradientSidemenu = () => {
  const dispatch = useAppDispatch()
  const { type, kind, radialShape, stops } = useAppSelector(store => store.linearGradient)
  // repeating-linear-gradient(45deg, #3f87a6, #ebf8e1 15%, #f69d3c 20%);

  const resetState = (): void => {
    dispatch(resetStateAction())
  }

  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Gradient config`} resetState={resetState} visibility={true}>
        <div className="menuContainer m-4  pb-4  ">
          <TypePicker />
          <KindPicker />
          {type === "radial" && <RadialOps />}
          <StopsSlider />
          <StopsDisplay />

          <div className="btnPrimary mx-auto mt-4" onClick={() => dispatch(addNewStop())}>
            New Stop
          </div>
        </div>
      </SideMenu>
    </div>
  )
}

export default LinearGradientSidemenu
