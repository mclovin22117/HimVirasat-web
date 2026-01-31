import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mountains1.png')" }}
      />

      <div className="absolute inset-0 bg-white/45 backdrop-blur-none dark:bg-black/60" />

      <main className="relative mx-auto min-h-screen max-w-4xl px-6 py-24 sm:px-12">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/virasat.png"
            alt="HimVirasat logo"
            width={84}
            height={84}
            priority
            className="rounded-2xl"
          />

          <h1 className="mt-6 bg-linear-to-r from-emerald-700 via-green-700 to-amber-600 bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
            HimVirasat
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-800 dark:text-zinc-200">
            A community-driven initiative to preserve Himachal Pradesh’s
            languages, dialects, traditions, and cultural memory - and bring them
            into the digital age.
          </p>
        </div>

        <section className="mt-16 rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur dark:bg-zinc-900/70">
          <h2 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-400">
            Open Translation Datasets for Himachali Dialects
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            We are building open, structured Hindi ↔ Himachali dialect
            translation datasets by collecting parallel sentences written by
            native speakers. Contributors simply write everyday sentences in
            their dialect along with Hindi translations. No technical knowledge
            required.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
            These datasets will be freely available for research and used to
            fine-tune multilingual AI models, ensuring Himachali languages are
            not left behind in the digital age.
          </p>
        </section>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="https://discord.gg/REPLACE_HIMVIRASAT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center gap-3 rounded-full bg-white/90 px-6 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white hover:shadow-md"
          >
            <img
              src="/virasat.png"
              alt="Discord"
              className="h-9 w-9 rounded-4xl"
            />
            Join HimVirasat Discord
          </a>

          <a
            href="https://discord.gg/REPLACE_HP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center gap-3 rounded-full bg-white/90 px-6 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white hover:shadow-md"
          >            <img
              src="/hpdiscord.png"
              alt="Himachal Pradesh"
              className="h-9 w-9 rounded-full"
            />
            Join HP Discord Community
          </a>

          <a
            href="https://discord.gg/REPLACE_HIMVIRASAT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center gap-3 rounded-full bg-white/90 px-6 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white hover:shadow-md"
          >
            <img
              src="/hp-github.png"
              alt="Discord"
              className="h-9 w-9 rounded-4xl"
            />
            HimVirasat Github
          </a>
          <a
            href="https://forms.gle/REPLACE_WORD_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center gap-3 rounded-full bg-white/90 px-6 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white hover:shadow-md"
          >
            <HeartIcon className="h-9 w-9 text-red-500 fill-red-500" />
            <span>Contribute</span>
          </a>

        </div>


        <footer className="mt-20 text-center text-md text-black dark:text-zinc-400">
          HimVirasat is an open, community-driven effort to preserve Himachal’s
          heritage for future generations.
        </footer>
      </main>
    </div>
  );
}
