import CustomLayout from "@/components/CustomLayout";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
import SkillPage from "@/components/SkillPage/SkillPage";
import EducationPage from "@/components/EducationPage";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <CustomLayout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>nnamm&apos;s porfolio</title>
      </Head>
      <HomePage />
      <ExperiencePage />
      <SkillPage />
      <EducationPage />
      <Footer />
    </CustomLayout>
  );
}
