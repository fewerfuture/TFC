import Header from "@/Components/Header";
import { Head, Link, usePage } from "@inertiajs/react";

export default function AdminLayout({ children, users = false, events = false}) {
    const user = usePage().props.auth.user;
    return (
        <>
            <Head title={`Admin Tool - ${user.name}`} />
            <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 md:mx-w-xl">
                <Header adminTool={true} />
                <div className="p-4 flex justify-center gap-6">
                    <Link href={route("adminTool.users")} className={`text-3xl ${users && 'underline'}`}>
                        Users
                    </Link>
                    <Link href={route("adminTool.events")} className={`text-3xl ${events && 'underline'}`}>
                        Events
                    </Link>
                </div>
                {children}

                <footer className="min-h-14 w-auto border-t-2 mt-16 flex flex-row justify-between items-center">
                    <p>
                        Created by: Álvaro Sánchez -{" "}
                        <a
                            href="https://portal.edu.gva.es/iesmutxamel/"
                            className="underline"
                        >
                            Ies Mutxamel
                        </a>
                    </p>
                    <a
                        href="https://github.com/fewerfuture/TFC"
                        className="underline"
                    >
                        Github repo
                    </a>
                </footer>
            </div>
        </>
    );
}
