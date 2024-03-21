"use client"
import NavLink from "./NavLink"
import MenuOverlay from "./MenuOverlay"
import LanguageChanger from "./LanguageChanger"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useTranslation } from 'react-i18next'

const NavBar = () => {
    const { t } = useTranslation()
    const [navOpen, setnavOpen] = useState(false)

    const navLinks = [
        { id: "about", title: `${t('nav_about')}`, path: "#about" },
        { id: "projects", title: `${t('nav_projects')}`, path: "#projects" },
        { id: "contact", title: `${t('nav_contact')}`, path: "#contact" }
    ]
    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#181818] bg-opacity-100">
            <div className="flex container py-6 flex-wrap items-center justify-between mx-auto lg:px-20 md:px-10 px-4">
                <div className="mobile-menu block md:hidden">
                    {
                        !navOpen ? (
                            <button onClick={() => setnavOpen(true)} className="flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setnavOpen(false)} className="flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link) => (
                                <li key={link.id}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <LanguageChanger />
            </div>
            {navOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default NavBar