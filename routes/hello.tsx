/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import SectionHello from "../islands/SectionHello.tsx";
import MainLayout from "../components/MainLayout.tsx";

import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";


export default function Index() {
  
  return (
    <>
    <Head>
	        <title>My Portfolio - Angga</title>
					<link rel="stylesheet" href={asset("/style/main.css")}/>
	      </Head>
    <SectionHello />
    </>
  );
}
