import CustomLayout from "@/components/CustomLayout";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
import SkillPage from "@/components/SkillPage/SkillPage";
import EducationPage from "@/components/EducationPage";

export default function Home() {
  return (
    <CustomLayout>
      <HomePage />
      <ExperiencePage />
      <SkillPage />
      <EducationPage />
    </CustomLayout>
  );
}
