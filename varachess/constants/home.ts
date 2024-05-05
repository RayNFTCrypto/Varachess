import { GameDesignIcon, GameIcon, GameProtocolIcon, LearnIcon } from "@/app/[lng]/components/Icons";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { JSX, SVGProps } from "react";

export const varaChess: {
    title: string;
    subtitle: string;
    // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
        {
            title: 'second_section_title_element_1',
            subtitle: 'second_section_subtitle_element_1',
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            //       <path
            //         fillRule="evenodd"
            //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            //         clipRule="evenodd"
            //       />
            //     </svg>
            //   ),
        },
        {
            title: 'second_section_title_element_2',
            subtitle: 'second_section_subtitle_element_2',
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<LearnIcon />),
        },
        {
            title: 'second_section_title_element_3',
            subtitle: 'second_section_subtitle_element_3',
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<GameProtocolIcon />),
        },
        {
            title: 'second_section_title_element_4',
            subtitle: 'second_section_subtitle_element_4',
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<GameDesignIcon />),
        },
    ]

export const features: {

        title: string;
        body: string;
        // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element;
    }[]
 = 
    [
        {
            title: "Comprehensive Game Database",
            body: "Explore thousands of games, from AAA titles to indie gems, with detailed descriptions, release dates, and developer information.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>): JSX.Element => {
            //     return (
            //         <svg fill= "currentColor"  viewBox = "0 0 24 24" {...props} >
            //             <path
            //                 fillRule="evenodd"
            //                 d = "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            //                 clipRule = "evenodd"
            //             />
            //         </svg>
            //     )
            // },
        },
        {
            title: "Community Discussions",
            body: "Connect with fellow gamers, share experiences, and discuss strategies in a vibrant and interactive community.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
        {
            title: "Valuable Ratings and Reviews", 
            body: "Provide feedback to developers and help others make informed decisions about which games to try.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
        {
            title: "Convenient Game Access", 
            body: "Find links and information on where to purchase or download games, ensuring easy access to your favorite titles.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
        {
            title: "Personalized Recommendations", 
            body: "Discover new games tailored to your preferences, based on your gaming history and interests.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
        {
            title: "Exclusive Developer Insights", 
            body: "Gain behind-the-scenes knowledge with interviews, articles, and updates from game developers.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
        {
            title: "User-Created Content", 
            body: "Contribute your own game guides, walkthroughs, and tips to help fellow gamers navigate their favorite titles.",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
        {
            title: "Gaming News and Updates",
            body: "Stay up-to-date with the latest news, announcements, and releases in the gaming industry",
            // icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (), 
        },
    ];
