/** @jsx h */
import { h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";

export default function Home() {

  const navGalleryStyle = apply`cursor-pointer text-small p-3 mx-2`

  const [indexNavGallery, setIndexNavGallery] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const activeNavgallery = (index) => {
    if(indexNavGallery === index) {
      return apply`border(b-2 black)`
    } else {
      return apply`hover:border(b-2 gray-300)`
    }
  }

  const itemNavGallery = [ "All", "Web", "Mobile" ," Other" ]



  return (
    <main>
        <div class={tw`text-center flex justify-center items-center min-h-screen flex-col bg-white`}>
          <h1 class={tw`tracking-tight font-normal`}>
            <span class={tw`text-4xl`}>Hi 👋, I'm Angga</span>
          </h1>
          <span class={tw`text-small mt-3`}>Mobile & Web Developer</span>
        </div>

        <div class={tw`min-h-screen p-5 bg-slate-100`}>
          <div class={tw`flex-row flex justify-between items-center`} >
            <div>
              <h1 class={tw`tracking-tight font-normal`}>
                <span class={tw`text-4xl`}>Weekend Project</span>
              </h1>
              <span class={tw`text-small mt-3`}>some open projects that I have made</span>
            </div>

            <div>
              {
                itemNavGallery.map((item, index) => <span  class={tw`${navGalleryStyle} ${activeNavgallery(index)}`} onClick={() => setIndexNavGallery(index)}>{item}</span >)
              }
            </div>
          </div>

          <div class={tw`grid grid-cols-4 gap-4 mt-6`}>
            <div class={tw`border-rounded shadow-md h-80 relative cursor-pointer`} 

              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
             <img class={tw`h-full w-full object-cover absolute`} src="https://picsum.photos/200/300"/>
             { isShown &&  <div class={tw`h-full w-full bg-gray-500 bg-opacity-50 absolute`}></div> }
            </div>
            <div class={tw`border-rounded shadow-md h-80 relative cursor-pointer`} 

              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
             <img class={tw`h-full w-full object-cover absolute`} src="https://picsum.photos/200/300"/>
             { isShown &&  <div class={tw`h-full w-full bg-gray-500 bg-opacity-50 absolute`}></div> }
            </div>
            <div class={tw`border-rounded shadow-md h-80 relative cursor-pointer`} 

              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
             <img class={tw`h-full w-full object-cover absolute`} src="https://picsum.photos/200/300"/>
             { isShown &&  <div class={tw`h-full w-full bg-gray-500 bg-opacity-50 absolute`}></div> }
            </div>
            <div class={tw`border-rounded shadow-md h-80 relative cursor-pointer`} 

              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
             <img class={tw`h-full w-full object-cover absolute`} src="https://picsum.photos/200/300"/>
             { isShown &&  <div class={tw`h-full w-full bg-gray-500 bg-opacity-50 absolute`}></div> }
            </div>
          </div>
        </div>
    </main>
  );
}
