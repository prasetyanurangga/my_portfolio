/** @jsx h */
import { h  } from "preact";
import SectionLanding from "../islands/SectionLanding.tsx";
import SectionGallery from "../islands/SectionGallery.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";

 interface ResponPortfolioProject {
    openProject : [],
    professionalProject: []
  }

  export const handler: Handlers<ResponPortfolioProject | null> = {
    async GET(_, ctx) {
      const responPortfolioProject: ResponPortfolioProject = JSON.parse(await Deno.readTextFile("./static/repository.json"));
      return ctx.render(responPortfolioProject);
    },
  };


export default function Index({data}: PageProps<ResponPortfolioProject>) {
  
  return (
    <MainLayout hasMarginTop={false} currentMenu="Home">
      <SectionLanding />
      <SectionGallery itemsGallery={data.professional_project} typeProject="professional_project" title="Professional Project" subTitle="some professional projects that I have made"/>
      <SectionGallery itemsGallery={data.open_project} typeProject="open_project" title="Weekend Project" subTitle="some open projects that I have made"/>
      
    </MainLayout>
  );
}
