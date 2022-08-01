/** @jsx h */
import { h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";

interface ItemGalleryProps {
  id: string;
  title: string;
  type: string;
}

export default function ComponentItemGallery(props: ItemGalleryProps) {

	const [ isHover, setIsHover ] = useState(false)

	return (
		<div 
				
				class={tw`border-rounded shadow-lg shadow-neutral-900 h-80 relative`}
				onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover(!isHover)}
		>
	        <img class={tw`h-full w-full object-cover transition 
	              ease-in-out 
	              delay-150 
	              duration-300  absolute ${ isHover && 'filter blur-lg' } `} src="https://picsum.photos/200/300"/>
	        <div class={tw`
	              h-full 
	              p-4
	              w-full 
	              ${ isHover ? 'bg(black opacity-20) opacity-100 visible' : 'opacity-0 invisible' } 
	              
	              absolute
	              transition 
	              ease-in-out 
	              delay-150 
	              duration-300 
	              flex 
	              items-center
	              justify-center
	              flex-col`}>
	           <span class={tw`text-2xl font-bold text-white break-words text-center w-full`}>{props.title}</span>
	           <span class={tw`text-xl font-light text-white`}>{props.type}</span>
	           <a class={tw`inline-flex transition ease-in-out duration-100 cursor-pointer justify-center text-sm text-white py-2 px-3 mt-4 border(1 white) hover:(border(1 transparent) bg-white text-black)`} href={`/${props.id}`} target="_blank" >Details →</a>
	        </div>
        </div>
	)
}