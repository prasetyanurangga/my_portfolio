/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw, apply, theme } from "@twind";
import { useState } from "preact/hooks";

interface NavOverlayProps {
  currentMenu: string;
}

export default function NavOverlay(props: NavOverlayProps) {


	const [showMenu, setShowMenu] = useState(false)

	return (
		<>
			<div class={tw`flex justify-between items-center fixed top-0 w-full p-8 bg-white z-10`}>
				<span class={tw`text-small`}>MyPortfolio</span>
				<svg onClick={() => setShowMenu(true)} class={tw`lg:hidden cursor-pointer w-8 h-8`} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <div class={tw`hidden lg:flex justify-between items-center flex-row`}>
        	<div class={tw`cursor-pointer text-small py-1 mx-2 transition ease-in-out duration-150 ${props.currentMenu === "home" ? 'border(b-1 black)' : 'hover:border(b-1 gray-300)'}`}>Home</div>
        	<div class={tw`cursor-pointer text-small py-1 mx-2 transition ease-in-out duration-150 ${props.currentMenu === "about_me" ? 'border(b-1 black)' : 'hover:border(b-1 gray-300)'}`}>About Me</div>
        	<div class={tw`cursor-pointer text-small py-1 mx-2 transition ease-in-out duration-150 ${props.currentMenu === "contact" ? 'border(b-1 black)' : 'hover:border(b-1 gray-300)'}`}>Contact</div>
        </div>
			</div>
			<div class={tw`w-full h-full z-20 fixed top-0 left-0 right-0 bottom-0 transition  ease-in-out  delay-150  backdrop-filter duration-300  ${showMenu ? 'visible opacity-100 backdrop-blur-md' : 'invisible opacity-0 backdrop-blur-none'} `}>
				<div class={tw`w-full h-full bg(black opacity-60) flex items-center flex-col justify-center relative`}>
					<svg onClick={() => setShowMenu(false)} class={tw`cursor-pointer absolute top-10 right-10 w-8 h-8 text-white`} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
					  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
					</svg>
					<span class={tw`text-4xl cursor-pointer border(b-2 transparent) transition ease-in-out delay-50 duration-200 text-white border(b-1 white) text-extrabold p-8 mx-2`}>Menu</span>
					<span class={tw`text-4xl cursor-pointer border(b-2 transparent) transition ease-in-out delay-50 duration-200 font-light hover:border(b-1 gray-300) text-gray-300 p-8 mx-2`}>About Me</span>
					<span class={tw`text-4xl cursor-pointer border(b-2 transparent) transition ease-in-out delay-50 duration-200 font-light hover:border(b-1 gray-300) text-gray-300 p-8 mx-2`}>Contact</span>
				</div>
			</div>
		</>
	)
}