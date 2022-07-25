/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <main>
        <div class={tw`text-center flex justify-center items-center min-h-screen flex-col`}>
          <h1 class={tw`tracking-tight font-normal`}>
            <span class={tw`text-4xl`}>Hi 👋, I'm Angga</span>
          </h1>
          <span class={tw`text-small mt-3`}>Mobile & Web Developer</span>
        </div>

        <div class={tw`min-h-screen p-5`}>
          <div class={tw`flex-row flex justify-between items-center`} >
            <div>
              <h1 class={tw`tracking-tight font-normal`}>
                <span class={tw`text-4xl`}>Weekend Project</span>
              </h1>
              <span class={tw`text-small mt-3`}>some open projects that I have made</span>
            </div>

            <div>
              <span class={tw`text-small mt-3 mx-2 border-bottom`}>All</span>
              <span class={tw`text-small mt-3 mx-2`}>Web</span>
              <span class={tw`text-small mt-3 mx-2`}>Mobile</span>
              <span class={tw`text-small mt-3 mx-2`}>Other</span>
            </div>
          </div>
        </div>
    </main>
  );
}
