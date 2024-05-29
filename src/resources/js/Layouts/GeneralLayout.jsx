export default function GeneralLayout({children}){
    return (
            <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 md:mx-w-xl">
                <div className='m-auto w-4/5 '>

                    {children}

                    <footer className="min-h-14 w-auto border-t-2 mt-16 flex flex-row justify-between items-center">
                        <p>Created by: Álvaro Sánchez - <a href="https://portal.edu.gva.es/iesmutxamel/" className="underline">Ies Mutxamel</a></p>
                        <a href="https://github.com/fewerfuture/TFC" className="underline">Github repo</a>
                    </footer>
                </div>
            </div>
    )
};
