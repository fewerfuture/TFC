import CardEvent from "@/Components/CardEvent";
import Header from "@/Components/Header";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";



export default function HomePage({auth, eventData, joinedEvents}) {
    return (
        <>
            <GeneralLayout>
                <Head title="Home page" />
                <Header
                    homePage = {true}
                    auth={auth.user}
                />
                <div className=" mt-7 grid lg:grid-cols-[200px_minmax(400px,1fr)_300px] lg:grid-rows-2 grid-cols-1 grid-rows-4 h-screen">

                    <aside className="lg:row-span-2 flex flex-col items-center">

                        {auth.user ?
                            (
                                <Link
                                    className="bg-green-500 text-white py-2 px-4 rounded mr-2 text-xl"
                                    href={route('createEvent')}
                                >
                                    Create event
                                </Link>
                            ) : (
                                null
                            )
                        }

                    </aside>

                    <main className="lg:row-span-2 overflow-y-scroll scrollbar-thin scrollbar-webkit scrollbar-color-black dark:scrollbar-color-white">

                        {eventData.length > 0 ? (
                            eventData.map(event => (
                                <Link
                                    key={event.id}
                                    href={route('event', event.id)}
                                >
                                    <CardEvent event={event} user={event.user} />
                                </Link>

                            ))
                        ) : (
                            <>
                                <div className="text-center m-16 text-2xl font-bold">
                                    <p>There are no events available at this time.</p>
                                    <p>:(</p>
                                </div>
                            </>
                        )}

                    </main>

                    <aside className=""> right - aside - top</aside>

                    <aside className=""> right - aside - bottom</aside>
                </div>
            </GeneralLayout>
        </>
    );
}
