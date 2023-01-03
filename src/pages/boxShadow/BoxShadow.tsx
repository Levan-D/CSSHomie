/** @format */

import React, { useState } from "react"
import SideMenu from "../../components/wrappers/SideMenu"
import ReactSlider from "react-slider"
import styles from "./BoxShadow.module.css"
import Shape from "./Shape"
import type { CurrentValueType } from "./BoxShadowTypes"

const BoxShadow = () => {
  const [shadowColor, setShadowColor] = useState("0,0,0")
  const [currentValue, setCurrentValue] = useState<CurrentValueType>({
    horizontal: 12,
    vertical: 12,
    blur: 4,
    spread: 0,
    shadowOpacity: 20,
  })

  const resetState = () => {
    setShadowColor("0,0,0")
    setCurrentValue({
      horizontal: 12,
      vertical: 12,
      blur: 4,
      spread: 0,
      shadowOpacity: 20,
    })
  }

  return (
    <div>
      <SideMenu title={`Box Shadow Config`} resetState={resetState}>
        <div className="p-4 mb-4">
          {Object.keys(currentValue).map((key, i) => {
            if (key !== "shadowColor") {
              return (
                <div key={i} className="h-8 w-full mb-8 ">
                  <div className="flex justify-between">
                    <h2>{key}</h2>
                    <h2>{currentValue[key as keyof CurrentValueType]}px</h2>
                  </div>
                  <div className=" w-full h-[20px] mb-4">
                    <ReactSlider
                      className={styles.customSlider}
                      trackClassName={styles["customSlider-track"]}
                      thumbClassName={styles["customSlider-thumb"]}
                      min={key === "horizontal" || key === "vertical" ? -150 : 0}
                      max={key === "shadowOpacity" ? 100 : 150}
                      defaultValue={currentValue[key as keyof CurrentValueType]}
                      value={currentValue[key as keyof CurrentValueType]}
                      onChange={value =>
                        setCurrentValue(() => ({
                          ...currentValue,
                          [key as string]: value as number,
                        }))
                      }
                    />
                  </div>
                </div>
              )
            }
          })}
        </div>
      </SideMenu>
      <Shape currentValue={currentValue} shadowColor={shadowColor} />
    </div>
  )
}

export default BoxShadow
