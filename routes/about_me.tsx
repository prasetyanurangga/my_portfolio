/** @jsx h */
import { h  } from "preact";
import SectionLanding from "../islands/SectionLanding.tsx";
import SectionGallery from "../islands/SectionGallery.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { tw } from "@twind";

export default function AboutMe() {

  const profile = {
    desc : 'I am a man who has an interest in programming. My specialization includes quickly learning new skills and programming languages, problem solving, framework and design patterns. so far the skills that I already have include Flutter, Javascript, Nuxt JS, Laravel, PHP, Postgresql, MySql, React Native. I started studying Golang and React JS. I am still enthusiastic about reaching a new programming language, framework, design pattern, and everything about programming'
  }
  
  
  return (
    <MainLayout currentMenu="About Me">
      <div class={tw`flex flex-col py-8 px-16`}>


        <span class={tw`text-3xl font-normal text-black`}>About Me</span>
        <span class={tw`text-xl font-normal text-black mb-5`}>Hey, I'm Angga Nur Prasetya</span>
        
        <div class={tw`flex lg:flex-row xs:flex-col justify-around space-x-16`}>
          <div class={tw`lg:w-1/2`}>
            <img alt="Image" class="img-fluid" src="https://avatars3.githubusercontent.com/u/35420062?v=4"/>
            <p class={tw` break-word text-md font-normal text-black mt-5`}>{profile.desc}</p>
          </div>
          <div class={tw`lg:w-1/2`}>
            
            <span class={tw`text-lg font-normal text-black`}>Skills</span>

            <div class={tw`flex flex-col my-3`}>
              <div class={tw`flex flex-row justify-between items-center`}>
                <span class={tw`text-lg font-bold text-black`}>JavaScript</span>
                <span class={tw`text-md font-normal text-black`}>80%</span>
              </div>
                <div class={tw`bg-gray-200 w-full h-2 relative shadow-sm mt-1`}>
                  <div class={tw`bg-black w-4/5 h-2 absolute left-0 top-0`} />
                </div>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
