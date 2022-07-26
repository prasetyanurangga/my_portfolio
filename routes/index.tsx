/** @jsx h */
import { h  } from "preact";
import { useRef } from "preact/hooks";
import Gallery from "../islands/Gallery.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { tw } from "@twind";
import Helmet from 'preact-helmet';

export default function Index() {
  const myRef = useRef(null)
  const executeScroll = () => {
    console.log(myRef)
     myRef.current.scrollIntoView()  
  }
  return (
    <MainLayout>
      <main >
          <div class={tw`text-center flex justify-center items-center min-h-screen flex-col bg-white relative`}>
            <h1 class={tw`tracking-tight font-normal`} onClick={executeScroll}>
              <span class={tw`text-4xl`}>Hi 👋, I'm Angga</span>
            </h1>
            <span class={tw`text-small mt-3`}>Mobile & Web Developer</span>

            <svg  class={tw`absolute bottom-20 animate-bounce w-8 h-8`} xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>

          <div class={tw`min-h-screen p-8 bg-slate-100`} ref={myRef}>
            <Gallery />
          </div>

          <div class={tw`min-h-screen mt-10 p-8 bg-slate-100`} ref={myRef}>
            <Gallery />
          </div>
      </main>
    </MainLayout>
  );
}
