import Image from "next/image";
import MainLayout from "./components/MainLayout";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "../i18n";
import { varaChess } from "@/constants/home";
import HomeCard from "./components/HomeCards";
import { FlatButton, OutlinedButton } from "./components/Buttons";
import { FadeInSection } from "./components/FadeIn";

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  return (
    <MainLayout
      params={{
        lng: lng,
      }}
    >
      {/* Hero section */}
      <FadeInSection>
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto gap-10">
          <div className="basis-1/2 px-10 md:px-5 lg:px-0 gap-16">
            <h1 className="font-sans font-light text-white text-3xl md:text-6xl xl:text-7xl">
              {t("principal_title")}
            </h1>
            <p className="mt-2 md:mt-5 font-sans font-light text-lg md:text-2xl">
              {t("principal_subtitle")}
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-0 md:gap-x-3 items-center justify-center w-full">
              <FlatButton>{t("principal_button_1")}</FlatButton>
              <OutlinedButton>{t("principal_button_2")}</OutlinedButton>
            </div>
          </div>
          <div className="basis-1/2 px-10 md:px-5 lg:px-0 my-5">
            <Image
              className="object-cover"
              src={"/chess woman.png"}
              width={600}
              height={480}
              alt="Chess Woman"
            />
          </div>
        </div>
      </FadeInSection>

      {/* Info section */}
      <FadeInSection>
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center px-10 md:px-5 lg:px-0 my-12 md:my-0">
          <h2 className="font-sans font-light text-white text-3xl md:text-6xl text-center">
            {t("second_title")}
          </h2>
          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {varaChess.map((vara, index) => (
              <div key={index}>
                <HomeCard
                  //icon={<vara.icon className=""/>}
                  title={t(vara.title)}
                  subtitle={t(vara.subtitle)}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center px-10 md:px-5 lg:px-0 my-12 md:my-0">
          <div></div>
        </div>
      </FadeInSection>

      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/varachess_logo.png"
            alt="Varachess Logo Logo"
            width={600}
            height={10}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </section>
    </MainLayout>
  );
}

