/** @jsx h */
import { h  } from "preact";
import SectionLanding from "../../islands/SectionLanding.tsx";
import SectionGallery from "../../islands/SectionGallery.tsx";
import ComponentTabImage from "../../islands/ComponentTabImage.tsx";
import MainLayout from "../../components/MainLayout.tsx";
import { tw } from "@twind";
import { PageProps, Handlers } from "$fresh/server.ts";
import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

interface ResponPortfolioProject {
    name: string,
    type: string,
    description: string,
    date: string,
    languages: any,
    listImage: any,
    github_url: string,
    live_url: string
  }

  export const handler: Handlers<ResponPortfolioProject | null> = {
    async GET(_, ctx) {
      const idProject = ctx.params.id
      if(ctx.params.detail_type && ctx.params.detail_type === "detail_open_project"){
        const responPortfolioProject = JSON.parse(await Deno.readTextFile("./static/repository.json"));
        const resp = await fetch(`https://api.github.com/repos/prasetyanurangga/${idProject}`);
        const dataOpenSource = responPortfolioProject.open_project.find((item) => item.name_git === idProject)
        const dataResponGithub = await resp.json();
        if (resp.status === 404 || !dataOpenSource) {
          return ctx.render(null);
        }
        console.log(dataOpenSource)
        const resultOpenSourceProject: ResponPortfolioProject = {
          name: dataOpenSource.name,
          type: dataOpenSource.type,
          description: dataResponGithub.description,
          date: dataResponGithub.updated_at,
          languages: dataOpenSource.language || [],
          listImage: [dataOpenSource.main_photo],
          github_url: dataResponGithub.html_url,
          live_url: dataResponGithub.homepage
        }
        return ctx.render(resultOpenSourceProject);
      }

      return ctx.render(null);
      
    },
  };

export default function Detail({ data }: PageProps<ResponPortfolioProject | null>) {

  if(!data) {
    return(
      <MainLayout hasMarginTop={false}>
        <div class={tw`flex flex-col justify-center items-center h-screen`}>
          <span class={tw`text-4xl font-bold`}>404</span>
          <span class={tw`text-small mt-3`}>Page not Found</span>
          <a class={tw`mt-4 inline-flex w-48 transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`} href="/">Back To Home</a>
        </div>
      </MainLayout>
    )
  }


  const profile = {
    desc : 'I am a man who has an interest in programming. My specialization includes quickly learning new skills and programming languages, problem solving, framework and design patterns. so far the skills that I already have include Flutter, Javascript, Nuxt JS, Laravel, PHP, Postgresql, MySql, React Native. I started studying Golang and React JS. I am still enthusiastic about reaching a new programming language, framework, design pattern, and everything about programming'
  }

  const listImage = ["https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg", "https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg"]
  
  
  return (
    <MainLayout currentMenu="Home">
      <div class={tw`flex lg:flex-row xs:flex-col justify-around lg:space-x-16 py-8  xs:px-8 lg:px-16`}>
        
          <div class={tw`lg:(w-3/5 mb-0) xs:mb-5 flex justify-center`}>
            <ComponentTabImage listImage={data.listImage}/>
          </div>
          <div class={tw`lg:w-2/5 flex flex-col`}>
            
            <span class={tw`text-xl font-bold text-black w-full`}>{data.name}</span>
            <span class={tw`text-md font-normal text-gray-700`}>{data.type}</span>
             <p class={tw` break-word text-md font-normal text-black my-5`}>{data.description}</p>

            <span class={tw`text-sm font-bold text-black w-full`}>Last Update</span>
            <span class={tw`text-sm font-normal text-gray-700`}>{moment(data.date).format("DD MMMM YYYY")}</span>

            <div class={tw`flex flex-col my-5 w-full`}>
             <span class={tw`text-md font-normal text-black w-full mb-1`}>Languages</span>

             {
              data.languages.map((itemLanguages) => 
                <div class={tw`my-1`}>
                  <div class={tw`flex flex-row justify-between items-center`}>
                    <span class={tw`text-sm font-bold text-black`}>{itemLanguages.name}</span>
                    <span class={tw`text-sm font-normal text-black`}>{itemLanguages.value}%</span>
                  </div>
                  <div class={tw`bg-gray-200 w-full h-2 relative shadow-sm mt-1`}>
                    <div class={tw`bg-[${itemLanguages.color}] w-[${itemLanguages.value}%] h-2 absolute left-0 top-0`} />
                  </div>
                </div>
              )
             }

             


            </div>
            <div class={tw`flex lg:flex-row xs:flex-col space-x-4`}>
              
               <a class={tw`mt-4 inline-flex w-48 transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`} href={data.github_url} target="_blank" >More Information</a>
              { data.live_url && <a class={tw`mt-4 inline-flex w-48 transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`} href={data.live_url} target="_blank" >Live Demo</a> }

            </div>
          </div>
        

      </div>
    </MainLayout>
  );
}
