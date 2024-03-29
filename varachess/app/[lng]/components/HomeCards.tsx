import { TrophyIcon } from "@heroicons/react/16/solid";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { GameIcon } from "./Icons";

export default function HomeCard({
  icon,
  title,
  subtitle,
}: {
  icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-2 border-white rounded-2xl px-5 py-10 h-full">
      <div className="flex flex-col items-center justify-center h-full md:gap-y-8">
        <div className="rounded-full bg-button/30 p-5">
          <GameIcon className="h-12 md:h-20"/>
        </div>
        <h4 className="font-sans font-extralight text-lg md:text-xl xl:text-2xl text-center">
          {title}
        </h4>
        <p className="font-sans font-thin text-xs md:text-sm text-center my-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
