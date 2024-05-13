import GoBackButton from "@/Components/GoBackButton";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";


export default function InProgress(){

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-400">
            <Head title="Page in progress" />

            <div className="w-screen h-screen flex justify-center items-center flex-col gap-6">

                <p className="text-6xl"> We are currently working on this page or functionality...</p>
                <button
                    className="text-4xl underline hover:decoration-blue-500 hover:text-gray-100 flex flex-row gap-2 items-center transition ease-in-out"
                    onClick={() => {window.history.back()}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                   <p> Go back</p>
                </button>
            </div>

        </div>

    )
}
