/** @jsx h */
import { h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";

interface CounterProps {
  id: string;
  title: string;
  type: string;
}

export default function ItemGallery(props: CounterProps) {

	const [ isHover, setIsHover ] = useState(false)

	return (
		<a 
				href={`/${props.id}`} 
				target="_blank" 
				class={tw`border-rounded shadow-lg shadow-neutral-900 h-80 relative cursor-pointer`}
				onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
		>
	        <img class={tw`h-full w-full object-cover transition 
	              ease-in-out 
	              delay-150 
	              duration-300  absolute ${ isHover && 'filter blur-2xl' } `} src="https://picsum.photos/200/300"/>
	        <div class={tw`
	              h-full 
	              p-4
	              w-full 
	              ${ isHover ? 'bg(black opacity-20) opacity-100' : 'opacity-0' } 
	              
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
	        </div>
        </a>
	)
}