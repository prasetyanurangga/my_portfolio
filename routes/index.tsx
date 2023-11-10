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
        subTitle="some professional projects that I have made. There are some projects that I have worked as full-time and freelance developer, but as these projects are not publicly accessible, I have not listed them.but I can tell you about my role and contribution to those projects"
      />
      <SectionGallery
        itemsGallery={data.open_project}
        typeProject="open_project"
        title="Weekend Project"
        subTitle="some open projects that I have made"
      />
    </MainLayout>
  );
}
