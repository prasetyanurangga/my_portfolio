/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";
import ComponentItemGallery from "./ComponentItemGallery.tsx";

interface GalleryProps {
  itemsGallery: any
  typeProject : string
  title: string,
  subString: string
}

export default function SectionGallery({itemsGallery, typeProject, title, subTitle}: GalleryProps) {

  const navGalleryStyle = apply`cursor-pointer text-small p-3 mx-2  transition ease-in-out  duration-150`

  const [indexNavGallery, setIndexNavGallery] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [indexGalleryHover, setIndexGalleryHover] = useState(null);

  const activeNavgallery = (index) => {
    if(indexNavGallery === index) {
      return apply`border(b-2 black)`
    } else {
      return apply`hover:border(b-2 gray-300)`
    }
  }

  const itemNavGallery = [ "All", "Web", "Mobile" ,"Other" ]

  const currentItemGallery = itemsGallery.filter((item) => (item.type === itemNavGallery[indexNavGallery] || (itemNavGallery[indexNavGallery] === "All" && itemNavGallery.includes(item.type))))

  const handleChangeNavItemGallery = async (index: number) => {
    setLoading(true)
    await new Promise(f => setTimeout(f, 150));
    setIndexNavGallery(index)
    await new Promise(f => setTimeout(f, 150));
    setLoading(false)
  }

  return (
    <>
      <div class={tw`min-h-screen mt-10 py-8  xs:px-8 lg:px-16`}>
        <div class={tw`flex xs:flex-col md:flex-col lg:flex-row justify-between items-center mb-6`} >
          <div>
            <h1 class={tw`tracking-tight font-normal`}>
              <span class={tw`text-4xl`}>{title}</span>
            </h1>
            <span class={tw`text-small mt-3`}>{subTitle}</span>
          </div>

          <div class={tw`xs:mt-4 lg:mt-0 flex-row flex`} >
            {
              itemNavGallery.map((item, index) => <div  class={tw`${navGalleryStyle} ${activeNavgallery(index)}`} onClick={() => handleChangeNavItemGallery(index)}>{item}</div >)
            }
          </div>
        </div>

        <div class={tw`grid xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-8 mt-6 transition 
              ease-in-out
              duration-150 ${ !loading ? 'opacity-100' : 'opacity-0'  }`}>
          {
            currentItemGallery.map((item, indexGallery) => 
              <ComponentItemGallery 
                title={item.name} 
                id={item.id} 
                type={item.type}
                imageUrl={item.thumb_photo}
                typeProject={typeProject}
              />
            )
          }
        </div>
      </div>
    </>

  );
}
