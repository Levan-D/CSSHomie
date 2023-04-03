/** @format */

import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { pageButtonsType } from "../../data/PageButtons"

type DropeDownType = {
  category: pageButtonsType
  subMenuVis: string
  windowWidth: number
  handleSubMenuClick: (path: string) => void
}

const DropDown = ({
  category,
  subMenuVis,
  windowWidth,
  handleSubMenuClick,
}: DropeDownType) => {
  const { pathArray } = useAppSelector(store => store.navbar)
  return (
    <div>
      <ul
        className={` ${
          windowWidth > 540
            ? pathArray[0] === category.catPath && "  block  md:hidden"
            : subMenuVis === category.catPath && "  !block  md:hidden"
        } static   hidden   translate-x-[0]  translate-y-[2px] rounded-lg  border-0  bg-none from-[#151f36]  to-slate-900 px-4 py-2 duration-200  md:absolute md:translate-x-[-30px] md:border-2 md:bg-gradient-to-r md:group-hover:block`}
      >
        {category.catCon.map((btn, index) => (
          <li
            key={index}
            onClick={() => handleSubMenuClick(category.catPath)}
            className={`   ${
              windowWidth > 540 ? pathArray[1] === btn.path && " !bg-secondary-300" : ""
            } 
            shrink-0 cursor-pointer select-none rounded-2xl   py-1 px-4 font-cursiveCustom text-base  font-bold duration-300 active:brightness-75 md:text-lg md:hover:bg-secondary-200 `}
          >
            <Link className="p-1" to={category.catPath + "/" + btn.path}>
              {btn.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown
