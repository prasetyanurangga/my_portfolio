/** @jsx h */
import { h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";

export default function Home() {

  const navGalleryStyle = apply`cursor-pointer text-small mt-3 mx-2`

  const [indexNavGallery, setIndexNavGallery] = useState(2);

  const activeNavgallery = (index) => {
    if(indexNavGallery === index) {
      return apply`border(b-2 black)`
    } else {
      return apply`hover:border(b-2 gray-300)`
    }
  }

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
              <span  
                class={tw`${navGalleryStyle} ${activeNavgallery(0)}`} 
                onClick={() => setIndexNavGallery(0)}
              >All</span >
              <span  class={tw`${navGalleryStyle} ${activeNavgallery(1)}`} onClick={() => setIndexNavGallery(1)}>Web</span >
              <span  class={tw`${navGalleryStyle} ${activeNavgallery(2)}`} onClick={() => setIndexNavGallery(2)}>Mobile</span >
              <span  class={tw`${navGalleryStyle} ${activeNavgallery(3)}`} onClick={() => setIndexNavGallery(3)}>Other</span >
            </div>
          </div>

          <div class={tw`grid grid-cols-4 gap-4 mt-3`}>
            <div class={tw`border-rounded shadow-md h-80 relative`} >
             <img class={tw`h-full w-full object-cover absolute`} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"/>
             
             <div class={tw`h-full w-full bg-purple-400 absolute`}></div>
            </div>
          </div>
        </div>
    </main>
  );
}
