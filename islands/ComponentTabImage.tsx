/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";

interface tabImageProps {
  listImage : any
}

export default function ComponentTabImage({listImage}: tabImageProps) {

	const [ indexImage, setIndexImage ] = useState(0);

	return (
		<>
				<div class={tw`flex flex-col-reverse`}>
          <div class={tw`mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none`}>
            <div class={tw`grid lg:grid-cols-4 xs:grid-cols-3 gap-6`} aria-orientation="horizontal" role="tablist">
              {listImage.map((item, index) => 
              	<button onClick={() => {
              		setIndexImage(index)
              	}} class={tw`relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 ${indexImage === index && 'outline-none ring ring-offset-4 ring-opacity-50'}`} type="button">
	                <span class={tw`absolute inset-0 rounded-md overflow-hidden`}>
	                  <img src={item} alt="" class={tw`w-full h-full object-center object-cover`} data-fresh-disable-lock/>
	                </span>
	                <span class={tw`ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none`} aria-hidden="true"></span>
	              </button>
              )}
            </div>
          </div>

          <div class={tw`w-full aspect-w-1 aspect-h-1`}>
            <div aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
              <img src={listImage[indexImage]} class={tw`w-full h-full object-center object-cover sm:rounded-lg`} data-fresh-disable-lock/>
            </div>

          </div>
        </div>
		</>
	)
}
