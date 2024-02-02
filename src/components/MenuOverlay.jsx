import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link) => (
            <li key={link.title}>
                <NavLink href={link.path} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay