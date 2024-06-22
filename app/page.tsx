import { FullVhSection } from "@/app/components/FullVhSection";

export default function Home() {
  return (
    <main>
      <FullVhSection className="bg-rafaYellow bg-gridPattern min-h-screen">
        <h1 className="font-display font-heading text-white text-displayDesktop drop-shadow-base">
          Oim, eu sou a <span className="text-rafaPurple block">Rafarias</span>
        </h1>
      </FullVhSection>

      <FullVhSection className="bg-rafaRed bg-gridPattern min-h-screen">
        <h1>Second page</h1>
      </FullVhSection>
    </main>
  );
}
