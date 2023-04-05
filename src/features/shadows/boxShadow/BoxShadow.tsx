/** @format */

import Shape from "./Shape"
import BoxShadowOutput from "./BoxShadowOutput"
import BoxShadowSidemenu from "./boxShadowSidemenu/BoxShadowSidemenu"
import TableOfContents from "../../../components/TableOfContents"
import { blogData } from "./Data"
import BlogGenerator from "../../../components/BlogGenerator"

const BoxShadow = () => {
  const TOCData = blogData.sections.map(section => section.id)
  TOCData.unshift(blogData.id)
  TOCData.unshift(`Tool`)
  return (
    <main className=" my-16 mx-4">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">box shadows</span> for
        your project with ease
      </h1>
      <p className="mb-8 text-center font-cursiveCustom text-base">
        Scroll below for tips & tricks
      </p>
      <TableOfContents TOCData={TOCData} />
      <div
        id="Tool"
        className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-36 "
      >
        <BoxShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <BoxShadowOutput />
      <div className="mx-auto mt-56 max-w-3xl ">
        <BlogGenerator data={blogData} />
      </div>
    </main>
  );
}

export default BoxShadow
