import { FullVhSection } from "@/app/components/FullVhSection/FullVhSection";
import clsx from "clsx";

export default function Home() {
  return (
    <main>
      <FullVhSection className={clsx("bg-rafaYellow bg-gridPattern min-h-screen")}>
        <h1 className={clsx("font-display font-heading text-white text-displayDesktop drop-shadow-base")}>
          Oim, eu sou a <span className={clsx("text-rafaPurple block")}>Rafarias</span>
        </h1>
      </FullVhSection>

      <FullVhSection className={clsx("bg-rafaRed bg-gridPattern min-h-screen")}>
        <h1>Second page</h1>
      </FullVhSection>
    </main>
  );
}
