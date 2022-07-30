/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw, apply, theme } from "@twind";
import { useRef, useState } from "preact/hooks";
import Gallery from "./Gallery.tsx";
import NavOverlay from "../components/NavOverlay.tsx";

export default function Landing() {

	const refGallery = useRef(null)

	const executeScroll = () => {
	    console.log(refGallery)
	    refGallery.current.scrollIntoView({
	    	behavior: 'smooth'
	    })  
	}

	return (
		<>
				<div class={tw`text-center flex justify-center items-center min-h-screen flex-col bg-white relative`} >
					
			        <h1 class={tw`tracking-tight font-normal`} >
			          <span class={tw`text-4xl`}>Hi <span class={tw`animate-wiggle`}>👋</span>, I'm Angga</span>
			        </h1>
			        <span class={tw`text-small mt-3`}>a Mobile & Web Developer</span>

			        <svg onClick={executeScroll} class={tw`cursor-pointer absolute bottom-20 animate-bounce w-8 h-8`} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
			          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
			        </svg>
		      	</div>
		      	<div class={tw`min-h-screen p-8`} ref={refGallery}>
			        <Gallery />
			    </div>

			    <div class={tw`min-h-screen mt-10 p-8`}>
			        <Gallery />
			    </div>
		   <NavOverlay currentMenu="home"/>
		    
      	</>
	)
}
