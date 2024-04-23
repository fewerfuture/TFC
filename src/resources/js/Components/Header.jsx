import ApplicationLogo from "./ApplicationLogo"
import NavLink from "./NavLink"

export default function Header({homePage = false, events = false, aboutUs = false, logIn = false, register = false, user = false, auth}){
    return (
        <header className="p-4 m-auto col-span-3 border-b-2">
            <nav className="w-full h-full m-auto flex flex-row justify-between">
                <ul className="flex flex-row gap-16 *:self-center">
                    <li><ApplicationLogo className="w-10 h-10 fill-current text-gray-500"/></li>
                    <li>
                        <NavLink
                            active = {homePage}
                            href = "/"
                        >
                            Home Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            active = {events}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            active = {aboutUs}
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>

                <ul className="flex flex-row gap-16 *:self-center">

                    {auth ? (
                        <>
                            <NavLink
                                active = {user}
                            >
                                {auth.name}
                            </NavLink>
                            <NavLink
                                href = {route('logout')}
                            >
                                Log Out
                            </NavLink>
                    </>
                    ) : (
                        <>

                            <li>
                                <NavLink
                                    active = {logIn}
                                    href = {route('login')}
                                >
                                    Log in
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    active = {register}
                                    href = {route('register')}
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}
