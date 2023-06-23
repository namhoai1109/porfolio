import AboutPage from "@/components/AboutPage";
import CustomLayout from "@/components/CustomLayout";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <CustomLayout>
      <HomePage />
      <AboutPage />
    </CustomLayout>
  );
}
