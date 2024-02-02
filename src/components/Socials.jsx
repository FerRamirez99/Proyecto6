import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";

const socials = [
    {name: "Gitbub", path: "https://github.com/FerRamirez99", icon: <IoLogoGithub size="30" />},
    {name: "Linkedin", path: "https://www.linkedin.com/in/fernanda-ram%C3%ADrez-sancristoful-64768122b/", icon: <IoLogoLinkedin size="30" />},
]

const Socials = () => {
  return (
    <div className="fixed bottom-0 z-30 flex flex-col items-center w-full mt-auto md:justify-center h-max md:top-1/4 md:left-5 md:w-16 md:max-w-md md:h-screen text-white">
        <div className="flex items-center justify-evenly w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-[#181818]/50 sm:shadow-md backdrop-blur-sm rounded-full">
            {socials.map(({name, path, icon, index}) => (
                <div key={index}>
                    <Link href={path} className="group transition-all duration-300 hover:text-white" target="_blank">
                        <div className="absolute left-20 hidden mr-20 rounded-lg md:group-hover:flex md:group-hover:items-center">
                            <div className="relative flex items-center p-2 leading-none text-whie font-bold capitalize bg-[#181818]/50 rounded-sm">
                                {name}
                            </div>
                        </div>
                        {icon}
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Socials