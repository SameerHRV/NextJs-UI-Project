import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Testimonel from "@/components/Testimonel";
import FeatureCourses from "@/components/ui/FeatureCourses";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoosUs from "@/components/WhyChoosUs";

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased  bg-grid-white/[0.02] ">
      <Hero />
      <FeatureCourses />
      <WhyChoosUs />
      <Testimonel />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
};

export default App;
