import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import { useEffect } from "react";

export default function Header({
    homePage = false,
    adminTool = false,
    logIn = false,
    register = false,
}) {
    const user = usePage().props.auth.user;

    return (
        <header className="p-4 m-auto col-span-3 border-b-2">
            <nav className="w-full h-full m-auto flex flex-row justify-between">
                <ul className="flex flex-row lg:gap-16 gap-3 *:self-center">
                    <li>
                        <Link href={route("HomePage")}>
                            <ApplicationLogo className="w-10 h-10 fill-current text-gray-500" />
                        </Link>
                    </li>
                    <li>
                        <NavLink active={homePage} href={route("HomePage")}>
                            Home Page
                        </NavLink>
                    </li>
                    {(user != null && user.role_id === 2) && (
                        <li>
                            <NavLink active={adminTool} href={route("adminTool.users")}>
                                AdminTool
                            </NavLink>
                        </li>
                    )}
                    {/* <li>
                        <NavLink active={aboutUs} href={route("inprogress")}>
                            About Us
                        </NavLink>
                    </li> */}
                </ul>

                <ul className="flex flex-row lg:gap-16 gap-3 *:self-center">
                    {user ? (
                        <>
                            <div className=" sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("editProfile")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink active={logIn} href={route("login")}>
                                    Log in
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    active={register}
                                    href={route("register")}
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
