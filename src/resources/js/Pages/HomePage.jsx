import { Link, Head } from "@inertiajs/react";

export default function HomePage() {
    return (
        <>
            <Head title="HomePage" />
            <div className="grid grid-cols-[200px_minmax(400px,1fr)_300px] grid-rows-[minmax(100px,125px)_1fr_1fr] h-screen min-h-screen">
                <header className="col-span-3 bg-gradient-to-r from-purple-500 to-pink-500">
                    <nav className="flex">
                        <img src="" alt="Logo" />

                        <ul>
                            <li><a href="#">Home page</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">About us</a></li>
                        </ul>
                    </nav>
                </header>

                <aside className="bg-orange-500 row-span-2">left - aside</aside>

                <main className="bg-red-500 row-span-2">main</main>

                <aside className="bg-blue-500"> right - aside - top</aside>

                <aside className="bg-yellow-500"> right - aside - bottom</aside>


            </div>
            <footer className="col-span-3 bg-purple-500 h-52 w-screen">footer</footer>


            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
