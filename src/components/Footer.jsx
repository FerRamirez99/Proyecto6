import Link from "next/link"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer border border-t-secondary border-l-transparent border-r-transparent border-b-transparent">
      <div className="container py-8 text-center max-w-full">
        <p className="text-primary">Fernanda Ramírez Sancristoful</p>
        <div className="flex justify-center">
          <Link href="#home" title="home" className=" mt-6 text-white hover:text-primary mb-10 md:mb-0">
            <MdOutlineKeyboardDoubleArrowUp size="30" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer