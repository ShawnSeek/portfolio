import Approach from "@/components/home/Approach";
import Experience from "@/components/home/Experience";
import Grid from "@/components/home/Grid";
import Hero from "@/components/home/Hero";
import RecentProjects from "@/components/home/RecentProjects";

export default function Home() {
  return (
    <div>
      <div className="relative max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>
    </div>
  );
}
