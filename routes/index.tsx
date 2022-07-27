/** @jsx h */
import { h  } from "preact";
import Landing from "../islands/Landing.tsx";
import MainLayout from "../components/MainLayout.tsx";
import { tw } from "@twind";

export default function Index() {
  
  
  return (
    <MainLayout>
      <Landing />
    </MainLayout>
  );
}
