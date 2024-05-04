import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";


export default function InProgress(){

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-400">
            <Head title="Page in progress" />

            <div className="w-screen h-screen flex justify-center items-center flex-col gap-6">

                <p className="text-6xl"> We are currently working on this page or functionality...</p>
                <Link
                    className="text-4xl underline hover:decoration-blue-500 hover:text-gray-100"
                    href={route("HomePage")}
                >
                    Go back
                </Link>

            </div>

        </div>

    )
}
