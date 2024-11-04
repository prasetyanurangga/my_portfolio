/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import MainLayout from "../components/MainLayout.tsx";
import SectionGallery from "../islands/SectionGallery.tsx";
import SectionLanding from "../islands/SectionLanding.tsx";

interface ResponPortfolioProject {
  openProject: [];
  professionalProject: [];
}

export const handler: Handlers<ResponPortfolioProject | null> = {
  async GET(_, ctx) {
    const responPortfolioProject: ResponPortfolioProject = JSON.parse(
      await Deno.readTextFile("./static/repository.json")
    );
    return ctx.render(responPortfolioProject);
  },
};

export default function Index({ data }: PageProps<ResponPortfolioProject>) {
  return (
    <MainLayout hasMarginTop={false} currentMenu="Home">
      <SectionLanding />
      <SectionGallery
        itemsGallery={data.professional_project}
        typeProject="professional_project"
        title="Professional Project"
        subTitle="Here are some of my professional works. For other projects that are not publicly accessible, I'm available to discuss my role and contributions upon request."
      />
      <SectionGallery
        itemsGallery={data.open_project}
        typeProject="open_project"
        title="Weekend Project"
        subTitle="A collection of open-source projects I've crafted in my spare time."
      />
    </MainLayout>
  );
}
