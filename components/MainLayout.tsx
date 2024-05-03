import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import ComponentNavOverlay from "../islands/ComponentNavOverlay.tsx";
import { asset } from "$fresh/runtime.ts";

interface HeaderProps {
  children: ComponentChildren;
  hasMarginTop: boolean;
  currentMenu: string;
}

export default function MainLayout({ children, hasMarginTop = true, currentMenu }: HeaderProps) {
  return (
    <>
      <Head>
        <title>My Portfolio - Angga</title>
        <meta content="Angga Nur Prasetya's Portfolio" name="descriptison" />
        <meta content="angga,nur,prasetya,angga  nur prasetya,prasetyanurangga,portofolio,web,developer,web developer,mobile,mobile developer,flutter,flutter developer" name="keywords" />
        <link rel="icon" href={asset("/img/mp.png")} type="image/x-icon" />
        <meta name="google-site-verification" content="8qte7nRwvL-f0zRsdF8FnCU8vNNoqhIKgKWv97gsb6k" />

        {/* Add the provided script */}
        <script type="text/javascript">
          {`atOptions = {
            'key' : '05c16cbe87fec0742de26e5eaf722315',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
          };`}
        </script>
        <script type="text/javascript" src="//www.topcreativeformat.com/05c16cbe87fec0742de26e5eaf722315/invoke.js"></script>
      </Head>

      <main class={tw`min-h-screen ${hasMarginTop && ' mt-24'}`}>
        <ComponentNavOverlay currentMenu={currentMenu} />
        {children}
      </main>
      <footer class={tw`flex lg:justify-between lg:flex-row xs:flex-col xs:justify-center items-center py-8  xs:px-8 lg:px-16 w-full`}>
        <div class={tw`flex flex-col`}>
          <span class={tw`lg:(text-left mb-0) xs:(mb-2 text-center)`}>© Copyright MyPortfolio. All Rights Reserved</span>
          <span class={tw`lg:(text-left mb-0) xs:(mb-2 text-center)`}>Made With ❤ by <a class={tw`font-bold`} href="https://www.linkedin.com/in/angga-nur-prasetya-936687180/" target="_blank">Angga</a> | Made With <a class={tw`font-bold`} href="https://fresh.deno.dev/" target="_blank">Fresh 🍋</a></span>
        </div>
        <div class={tw`flex flex-row`}>
          <div class={tw`mr-4`}>
            <a href="https://github.com/prasetyanurangga" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1
