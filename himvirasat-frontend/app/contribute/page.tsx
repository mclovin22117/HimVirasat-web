import DialectCard from "@/components/DialectCard";

export default function ContributePage() {
  const dialects = [
    {
      id: "kangri",
      name: "Kangri",
      formUrl: "https://forms.gle/fgENxd2t5a62vuBSA",
    },
    {
      id: "mandeali",
      name: "Mandeali",
      formUrl: "https://forms.gle/ApxgyyQGswns7uwM8",
    },
    {
      id: "kullvi",
      name: "Kullvi",
      formUrl: "https://forms.gle/Gnecc3PWtYFz4v7w6",
    },
    {
      id: "mahasuvi_western",
      name: "Mahasuvi(Western)",
      formUrl: "https://forms.gle/dgPsVoDyhW8hGG1n9",
    },
    {
      id: "mahasuvi_eastern",
      name: "Mahasuvi(Eastern)",
      formUrl: "https://forms.gle/2aec4T8BYCGdv5vy9",
    },
    {
      id: "kinnauri",
      name: "Kinnauri",
      formUrl: "https://forms.gle/ptALNWptVu7PFcN4A",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mountains1.png')" }}
      />

      <div className="absolute inset-0 bg-white/45 dark:bg-black/60" />

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-24 sm:px-12">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Language & Translation Contributions
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
            Choose your dialect below and contribute parallel sentences for
            building open Hindi ↔ Himachali translation datasets.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {dialects.map((dialect) => (
              <DialectCard
                key={dialect.id}
                name={dialect.name}
                formUrl={dialect.formUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
