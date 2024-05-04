export default function GeneralLayout({children}){
    return (
            <div className=" bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
                <div className='m-auto w-4/5 '>

                    {children}

                    <footer className="h-52 w-auto border-t-2 mt-16">footer</footer>
                </div>
            </div>
    )
};
