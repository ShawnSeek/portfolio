import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

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
