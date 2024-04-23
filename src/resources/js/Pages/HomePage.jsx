import Header from "@/Components/Header";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head } from "@inertiajs/react";



export default function HomePage({auth}) {
    return (
        <>
            <GeneralLayout>
                <Head title="Home page" />
                <Header
                    homePage = {true}
                    auth = {auth}
                />
                <div className="grid lg:grid-cols-[200px_minmax(400px,1fr)_300px] lg:grid-rows-2
                    grid-cols-1 grid-rows-4 h-screen min-h-screen text-gray-900 dark:text-gray-100">

                    <aside className="lg:row-span-2">left - aside</aside>

                    <main className="lg:row-span-2"> main </main>

                    <aside className=""> right - aside - top</aside>

                    <aside className=""> right - aside - bottom</aside>
                </div>
            </GeneralLayout>
        </>
    );
}
