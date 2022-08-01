/** @jsx h */
import { h  } from "preact";
import SectionLanding from "../islands/SectionLanding.tsx";
import SectionGallery from "../islands/SectionGallery.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { tw } from "@twind";

export default function Index() {
  
  
  return (
    <MainLayout hasMarginTop={false} currentMenu="Home">
      <SectionLanding />
      <SectionGallery />
    </MainLayout>
  );
}
