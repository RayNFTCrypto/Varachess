import { TrophyIcon } from "@heroicons/react/16/solid";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export default function HomeCard({
    icon, title, subtitle,
}:{
    icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>>,
    title: string,
    subtitle: string,
}){
    return(
        <div className="border-2 border-white rounded-xl px-5 py-3">
            <div className="flex flex-col items-center justify-center">
              <TrophyIcon className="h-12" />
              <h4 className="font-sans font-semibold text-lg md:text-xl text-center">
                {title}
              </h4>
              <p className="font-light font-sans text-base md:text-lg text-center">
                {subtitle}
              </p>
            </div>
          </div>
    );
}