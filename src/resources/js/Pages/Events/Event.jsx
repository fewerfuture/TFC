import Header from "@/Components/Header";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";


export default function Event({auth, event }){

    let [startDate, startHour] = event.start_date.split(' ')
    let [startHourSplit, startsMinuteSplit] = startHour.split(':')
    let startHourNoSeconds = `${startHourSplit}:${startsMinuteSplit}`

    let [endDate, endHour] = event.end_date.split(' ')
    let [endHourSplit, endsMinuteSplit] = endHour.split(':')
    let endHourNoSeconds = `${endHourSplit}:${endsMinuteSplit}`

    return (

            <GeneralLayout>
                <Head title={"Event - " + event.user.name} />
                <Header
                    event = {true}
                    auth={auth.user}
                />

                <div className="flex flex-1 flex-row">
                    <div className=" w-full h-96 grid grid-row-2 grid-cols-2 *:bg-gray-300 dark:*:bg-slate-700 *:rounded *:w-fit *:p-3">
                        <p className="col-span-2 text-6xl self-center"> {event.name} </p>
                        <p className="text-4xl self-center"> {event.type} </p>
                        <p className="text-4xl self-center"> {event.climbing_level.grade} </p>
                        <p className="text-4xl self-end text-center">
                            {startDate}
                            <p>{startHourNoSeconds}</p>
                        </p>
                        <p className="text-4xl self-end text-center">
                            {endDate}
                            <p> {endHourNoSeconds} </p>
                        </p>
                    </div>
                    <div className=" w-full">
                        <div className="h-80 m-4 rounded-lg bg-slate-700">
                            <p className="m-auto w-24 h-24 text-center">Iframe del mapa</p>
                        </div>
                        <p className="text-2xl ml-4">
                            {event.location.name}
                        </p>
                    </div>
                </div>
                    <p className="text-6xl mt-20">
                        Participants:
                    </p>
                <div className=" w-auto max-h-80 scrollbar-thin scrollbar-webkit scrollbar-color-black dark:scrollbar-color-white overflow-y-auto">
                    {event.participants.map(participant => (
                        <div key={participant.id} className="mt-4 p-3 text-4xl border-b-2 b-gray-200 flex justify-between">
                            <p>
                                {participant.name}
                            </p>
                            <p className="mr-11">
                                {participant.climbing_level.grade}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="text-2xl mt-9 flex justify-between items-center">
                    <p> Created by: {event.user.name}</p>
                    {auth.user && auth.user.id ? (
                        auth.user.id == event.user_id ? (
                            <>
                                <div>
                                    <Link
                                        className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                                        href={route('inprogress')}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        className="bg-red-500 text-white py-2 px-4 rounded"
                                        href={route('inprogress')}
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </>
                            ) : (
                                <Link
                                    className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                    href={route('inprogress')}
                                >
                                    Join
                                </Link>

                            )
                        ) : (
                            <Link
                                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                href={route("login")}
                            >
                                Log in to join
                            </Link>
                        )
                    }
                </div>

            </GeneralLayout>
    )
}
