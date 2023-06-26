import CustomLayout from "@/components/CustomLayout";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
import SkillPage from "@/components/SkillPage/SkillPage";
import EducationPage from "@/components/EducationPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CustomLayout>
      <HomePage />
      <ExperiencePage />
      <SkillPage />
      <EducationPage />
      <Footer />
    </CustomLayout>
  );
}
