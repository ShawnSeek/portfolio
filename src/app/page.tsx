import Experience from "@/components/home/Experience";
import Grid from "@/components/home/Grid";
import Hero from "@/components/home/Hero";
import RecentProjects from "@/components/home/RecentProjects";

export default function Home() {
  return (
    <div className="px-5 sm:px-10">
      <div className="relative max-w-7xl">
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
      </div>
    </div>
  );
}
