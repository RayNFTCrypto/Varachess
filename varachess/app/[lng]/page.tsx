import Image from "next/image";
import MainLayout from "./components/MainLayout";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "../i18n";
import { features, varaChess } from "@/constants/home";
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
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-10 md:px-5 lg:px-0 my-12 md:my-0 gap-10">
          <div className="basis-1/2 px-10 md:px-5 lg:px-0 gap-16">
            <h2 className="font-sans font-light text-white text-3xl md:text-6xl xl:text-7xl">
              Why VaraChess?
            </h2>
            <p className="mt-5 md:mt-10 font-sans font-extralight text-lg md:text-xl">
              PlayFlix is an innovative platform and website designed
              specifically for the gaming community. It serves as a
              comprehensive source of information and details about various
              games. Whether you are a casual gamer or a hardcore enthusiast,
              PlayFlix offers a one-stop destination to explore and discover new
              games, as well as delve into the depths of your favorite titles.
              <br /> <br />
              One of the key features of PlayFlix is its extensive database of
              games. With thousands of titles available, users can easily find
              information on their favorite games or explore new ones. From
              popular AAA titles to indie gems, PlayFlix covers a wide range of
              genres, ensuring that every gamer can find something of interest.
              Each game’s page provides detailed descriptions, gameplay
              mechanics, release dates, and even developer information, offering
              a comprehensive overview for users.
            </p>
          </div>
          <div className="basis-1/2 px-10 md:px-5 lg:px-0 my-5">
            <div className="animate-pulse rounded-2xl bg-gray-400">
              <div className="min-h-96"></div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center px-10 md:px-5 lg:px-0 my-12 md:my-0">

          <h2 className="font-sans font-light text-white text-3xl md:text-6xl text-center">
            {t("features_title")}
          </h2>
          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div key={index}>
                <HomeCard title={feature.title} subtitle={feature.body} />
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </MainLayout>
  );
}

