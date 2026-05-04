import { AvocatePanel, AvocateSection } from "../avocate-ui";

const posts = [
  "Immobilier en Israël: préparer une acquisition quand les documents sont en français",
  "Succession France-Israël: organiser les premières pièces du dossier",
  "Dossier transfrontalier: pourquoi clarifier les interlocuteurs avant d’agir",
];

export default function AvocateBlogPage() {
  return (
    <main className="bg-[#f7efe5]">
      <AvocateSection
        eyebrow="Blog"
        title="Notes juridiques et repères pratiques."
        description="Page placeholder pour l’alpha. Les contenus définitifs pourront être rédigés et branchés plus tard."
      >
        <div className="space-y-4">
          {posts.map((post, index) => (
            <AvocatePanel key={post}>
              <div className="grid gap-5 lg:grid-cols-[160px_1fr]">
                <div>
                  <p className="text-xs font-semibold text-[#8a654e] uppercase">
                    Article 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm text-[#3a2820]/58">Placeholder</p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-[#2b1d17]">
                    {post}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#3a2820]/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent porttitor, lacus in finibus aliquam, augue justo
                    dictum elit, vitae gravida erat lorem sed arcu. Integer
                    luctus neque a mauris tempor, sed dignissim lacus cursus.
                  </p>
                </div>
              </div>
            </AvocatePanel>
          ))}
        </div>
      </AvocateSection>
    </main>
  );
}
