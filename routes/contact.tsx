/** @jsx h */
import { h  } from "preact";
import SectionLanding from "../islands/SectionLanding.tsx";
import SectionGallery from "../islands/SectionGallery.tsx";
import ComponentFormContact from "../islands/ComponentFormContact.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { tw } from "@twind";

export default function Contact() {

  const contact = {
    email : "angganurprasetya4@gmail.com",
    address:"Banjarnegara, Central Java, Indonesia",
    phone : "6285702802582"
  }
  
  
  return (
    <MainLayout currentMenu="Contact">
      <div class={tw`flex flex-col py-8 xs:px-8 lg:px-16`}>


        <div class={tw`xs:w-full lg:w-1/2 flex flex-col lg:pr-8`}>
          <span class={tw`text-3xl font-normal text-black`}>Contact</span>
          <span class={tw`text-xl font-normal text-black mb-5`}>Whether you have a question about me, I'm ready to answer all your question </span>
        </div>

        <div class={tw`flex lg:flex-row xs:flex-col`}>
          <div class={tw`lg:w-1/2`}>
            <ComponentFormContact email={contact.email}/>
          </div>
          <div class={tw`flex flex-col lg:w-1/2 lg:items-center xs:mt-8 lg:mt-0`}>
            

            <div class={tw`flex flex-col lg:w-80 my-3`}>
              <span class={tw`text-lg font-bold text-black`}>Address</span>
              <span class={tw`text-md font-normal text-black`}>{contact.address}</span>
            </div>

            <div class={tw`flex flex-col lg:w-80 my-3`}>
              <span class={tw`text-lg font-bold text-black`}>Phone</span>
              <a class={tw`transition ease-in-out duration-100 text-md font-normal text-black cursor-pointer`} href={'https://api.whatsapp.com/send?phone=' + contact.phone} target="_blank">+{contact.phone} (Whatsapp/Phone)</a>
            </div>

            <div class={tw`flex flex-col lg:w-80 my-3`}>
              <span class={tw`text-lg font-bold text-black`}>Email</span>
              <a href="mailto:angganurprasetya4@gmail.com" target="_blank" class={tw`text-md font-normal text-black`}>{contact.email}</a>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
