
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { useState } from 'react';

export default function GeneralLayout({children}){
    return (
            <div className="bg-gray-100 dark:bg-gray-900 w-screen">
                <div className='m-auto w-4/5'>

                    {children}

                    <footer className="col-span-3 h-52 w-full border-t-2 bg-yellow-500">footer</footer>
                </div>
            </div>
    )
};
