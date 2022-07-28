/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw, apply, theme } from "@twind";
import { useRef, useState } from "preact/hooks";
import Gallery from "./Gallery.tsx";

export default function Landing() {

	const refGallery = useRef(null)
	const [showMenu, setShowMenu] = useState(false)

	const executeScroll = () => {
	    console.log(refGallery)
	    refGallery.current.scrollIntoView({
	    	behavior: 'smooth'
	    })  
	}

	return (
		<>
			
			<div class={tw`text-center flex justify-center items-center min-h-screen flex-col bg-white relative`}>
				<svg onClick={() => setShowMenu(true)} class={tw`cursor-pointer absolute top-10 right-10 w-8 h-8`} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
		            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
		        </svg>
		        <h1 class={tw`tracking-tight font-normal`} >
		          <span class={tw`text-4xl`}>Hi 👋, I'm Angga</span>
		        </h1>
		        <span class={tw`text-small mt-3`}>Mobile & Web Developer</span>

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

		    <div class={tw`w-full h-full fixed top-0 left-0 right-0 bottom-0 transition 
	              ease-in-out 
	              delay-150 
	              backdrop-filter
	              duration-300  ${showMenu ? 'visible opacity-100 backdrop-blur-md' : 'invisible opacity-0 backdrop-blur-none'} `}>
				<div class={tw`w-full h-full bg(black opacity-60) flex items-center justify-center relative`}>
					<svg onClick={() => setShowMenu(false)} class={tw`cursor-pointer absolute top-10 right-10 w-8 h-8`} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
					  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
					<span class={tw`text-4xl text-white`}>Menu</span>
				</div>
			</div>
      	</>
	)
}
