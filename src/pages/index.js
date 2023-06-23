import CustomLayout from "@/components/CustomLayout";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";

export default function Home() {
  return (
    <CustomLayout>
      <HomePage />
      <ExperiencePage />
    </CustomLayout>
  );
}
