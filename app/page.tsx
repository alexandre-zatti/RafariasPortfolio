import { FullVhSection } from "@/components/full-vh-section/FullVhSection";
import { cn } from "@/lib/utils";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <FullVhSection className={cn("bg-rafaYellow")}>
        <h1
          className={clsx("col-start-1 col-end-4 row-start-2 font-display font-heading text-white text-displayDesktop drop-shadow-base")}>
          Oim, eu sou a <span className={cn("text-rafaPurple block")}>Rafarias</span>
        </h1>
        <Button className={cn()} variant="neutral">Outline</Button>
      </FullVhSection>

      <FullVhSection className={cn("bg-rafaRed")}>
        <h1 className={clsx("font-display font-heading text-white text-displayDesktop drop-shadow-base")}>
          Oim, eu sou a <span className={cn("text-rafaPurple block")}>Rafarias</span>
        </h1>
      </FullVhSection>
    </main>
  );
}