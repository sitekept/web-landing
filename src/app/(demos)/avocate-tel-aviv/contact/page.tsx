import { AvocatePanel, AvocateSection, DetailList } from "../avocate-ui";
import { ContactForm } from "../contact-form";

export default function AvocateContactPage() {
  return (
    <main className="bg-white">
      <AvocateSection
        eyebrow="Contact"
        title="Envoyer une demande au cabinet."
        description="Le formulaire est prêt côté interface. Dans cette version alpha, il ne déclenche aucune API et affiche uniquement une confirmation locale."
      >
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <AvocatePanel className="bg-[#fffaf4]">
            <h2 className="font-serif text-2xl font-semibold text-[#2b1d17]">
              Avant d’écrire
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#3a2820]/72">
              Un premier message utile mentionne le sujet, les pays concernés,
              les documents disponibles et le délai éventuel.
            </p>
            <div className="mt-7">
              <DetailList
                items={[
                  "Immobilier, succession ou coordination France-Israël.",
                  "Bien, héritiers ou interlocuteurs concernés.",
                  "Documents déjà reçus ou signés.",
                  "Objectif immédiat du premier échange.",
                ]}
              />
            </div>
          </AvocatePanel>
          <ContactForm />
        </div>
      </AvocateSection>
    </main>
  );
}
