/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import MainLayout from "../components/MainLayout.tsx";

export default function AboutMe() {
  const profile = {
    nama: "Angga Nur Prasetya",
    description:
      "As a highly skilled Web and Mobile Developer with over 5 years of hands-on experience, I have a deep expertise in building and maintaining robust mobile and web applications. Proficient in modern technologies such as Nuxt.js, Next.js, Flutter, and PostgreSQL, I consistently deliver high-quality solutions tailored to project requirements. At PT Traspac Makmur Sejahtera, my current role involves not only fixing bugs reported by QC teams but also actively participating in the end-to-end development of web and mobile projects. My flexibility in handling both front-end and back-end development has enabled me to provide comprehensive support across multiple projects. I am passionate about innovation, problem-solving, and driving improvements that enhance user experience and project performance. I thrive in collaborative environments, consistently pushing for scalable, efficient, and user-focused solutions.",
    avatar_url: "https://avatars3.githubusercontent.com/u/35420062?v=4",
    url_cv: "/Resume - Angga Nur Prasetya.pdf",
    url_cv_ats: "/Angga__Nur_Prasetya_-_Web_&_Mobile_Developer.pdf",
    url_github: "https://github.com/prasetyanurangga",
    url_linkedin: "https://www.linkedin.com/in/angga-nur-prasetya-4a1b3b1a0/",
  };

  const skills = [
    { name: "Javacript", value: "80", color: "#000000" },
    { name: "Nuxt JS", value: "80", color: "#000000" },
    { name: "Flutter", value: "80", color: "#000000" },
    { name: "PHP", value: "80", color: "#000000" },
    { name: "SQL", value: "80", color: "#000000" },
    { name: "Next JS", value: "50", color: "#000000" },
    { name: "React Native", value: "40", color: "#000000" },
  ];

  return (
    <MainLayout currentMenu="About Me">
      <div class={tw`flex flex-col py-8  xs:px-8 lg:px-16`}>
        <span class={tw`text-3xl font-normal text-black`}>About Me</span>
        <span class={tw`text-xl font-normal text-black mb-5`}>
          Hey, I'm {profile.nama}
        </span>

        <div
          class={tw`flex lg:flex-row xs:flex-col justify-around lg:space-x-16`}
        >
          <div class={tw`lg:(w-1/2 mb-0) xs:mb-5`}>
            <img
              alt="Image"
              class="img-fluid"
              src={profile.avatar_url}
              data-fresh-disable-lock
            />
            <p class={tw` break-word text-md font-normal text-black mt-5`}>
              {profile.description}
            </p>
            <div class={tw` lg:flex-row flex-col `}>
              <a
                class={tw`mt-4 lg:ml-2 inline-flex transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`}
                href={profile.url_cv}
                target="_blank"
              >
                Download Resume
              </a>
              <a
                class={tw`mt-4 lg:ml-2 inline-flex transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`}
                href={profile.url_cv_ats}
                target="_blank"
              >
                Download Resume ATS Friendly
              </a>
              <a
                class={tw`mt-4 lg:ml-2 inline-flex transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`}
                href={profile.url_github}
                target="_blank"
              >
                Github
              </a>
              <a
                class={tw`mt-4 lg:ml-2 inline-flex transition ease-in-out duration-100 cursor-pointer justify-center text-sm py-2 px-3 mt-4 font-bold text-black border(1 black) hover:(border(1 transparent) bg-black text-white)`}
                href={profile.url_linkedin}
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div class={tw`lg:w-1/2 flex flex-col items-center`}>
            <span class={tw`text-lg font-normal text-black w-full`}>
              Skills
            </span>

            {skills.map((itemLanguages) => (
              <div class={tw`flex flex-col my-3 w-full`}>
                <div class={tw`flex flex-row justify-between items-center`}>
                  <span class={tw`text-lg font-bold text-black`}>
                    {itemLanguages.name}
                  </span>
                  <span class={tw`text-md font-normal text-black`}>
                    {itemLanguages.value}%
                  </span>
                </div>
                <div class={tw`bg-gray-200 w-full h-2 relative shadow-sm mt-1`}>
                  <div
                    class={tw`bg-[${itemLanguages.color}] w-[${itemLanguages.value}%] h-2 absolute left-0 top-0`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
