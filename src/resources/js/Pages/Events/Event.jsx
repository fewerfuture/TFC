import Header from "@/Components/Header";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import MapComponent from "@/Components/MapComponent";

export default function Event({ auth, event, apiKey, mapID }) {
    const [confirmingEventDeletion, setConfirmingEventDeletion] =
        useState(false);
    const [confirmingLeaveEvent, setConfirmingLeaveEvent] = useState(false);

    const confirmEventDeletion = () => {
        setConfirmingEventDeletion(true);
    };

    const confirmLeaveEvent = () => {
        setConfirmingLeaveEvent(true);
    };

    const closeModalDeleteEvent = () => {
        setConfirmingEventDeletion(false);
    };

    const closeModalLeaveEvent = () => {
        setConfirmingLeaveEvent(false);
    };

    let [startDate, startHour] = event.start_date.split(" ");
    let [endDate, endHour] = event.end_date.split(" ");

    return (
        <>
            <GeneralLayout>
                <Head title={"Event - " + event.user.name} />
                <Header />

                <div className="flex flex-1 flex-row">
                    <div className=" w-full h-96 grid grid-row-2 grid-cols-2 *:bg-gray-300 dark:*:bg-slate-700 *:rounded *:w-fit *:p-3">
                        <p className="col-span-2 text-6xl self-center">
                            {" "}
                            {event.name}{" "}
                        </p>
                        <p className="text-4xl self-center"> {event.type} </p>
                        <p className="text-4xl self-center">
                            {" "}
                            {event.climbing_level.grade}{" "}
                        </p>
                        <p className="text-4xl self-end text-center">
                            {startDate}
                            <br />
                            {startHour}
                        </p>
                        <p className="text-4xl self-end text-center">
                            {endDate}
                            <br />
                            {endHour}
                        </p>
                    </div>
                    <div className="w-full">
                        <MapComponent
                            eventLatitude={event.location.latitude}
                            eventLongitude={event.location.longitude}
                            envApiKey={apiKey}
                            envMapID={mapID}
                        />
                        <p className="text-2xl ml-4">{event.location.name}</p>
                    </div>
                </div>
                <p className="text-6xl mt-20">Participants:</p>
                <div className=" w-auto max-h-96 scrollbar-thin scrollbar-webkit scrollbar-color-black dark:scrollbar-color-white overflow-y-auto">
                    {event.participants.map((participant) => (
                        <div
                            key={participant.id}
                            className="mt-4 p-3 text-4xl border-b-2 b-gray-200 flex justify-between"
                        >
                            <p>{participant.name}</p>
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
                                        href={route("updateEvent", event)}
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        type="button"
                                        className="bg-red-500 text-white py-1.5 px-4 rounded"
                                        onClick={confirmEventDeletion}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        ) : event.participants.some(
                              (participant) => participant.id === auth.user.id
                          ) ? (
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                                onClick={confirmLeaveEvent}
                            >
                                Leave
                            </button>
                        ) : (
                            <Link
                                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                                href={route("joinEvent", event)}
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
                    )}
                </div>
                <Modal
                    show={confirmingEventDeletion}
                    onClose={closeModalDeleteEvent}
                >
                    <div className=" text-white p-9">
                        <p className="text-3xl text-center ">
                            Are you sure you want to delete this Event?
                        </p>
                        <div className="flex justify-center gap-5 mt-5 text-xl">
                            <button
                                className="p-3 bg-blue-700 rounded"
                                onClick={closeModalDeleteEvent}
                            >
                                Cancel
                            </button>
                            <Link
                                className="p-3 bg-red-500 rounded"
                                href={route("deleteEvent", event)}
                            >
                                Confirm
                            </Link>
                        </div>
                    </div>
                </Modal>

                <Modal
                    show={confirmingLeaveEvent}
                    onClose={closeModalLeaveEvent}
                >
                    <div className=" text-white p-9">
                        <p className="text-3xl text-center ">
                            Are you sure you want to leave this Event?
                        </p>
                        <div className="flex justify-center gap-5 mt-5 text-xl">
                            <button
                                className="p-3 bg-blue-700 rounded"
                                onClick={closeModalLeaveEvent}
                            >
                                Cancel
                            </button>
                            <Link
                                className="p-3 bg-red-500 rounded"
                                href={route("leaveEvent", event)}
                            >
                                Confirm
                            </Link>
                        </div>
                    </div>
                </Modal>
            </GeneralLayout>
        </>
    );
}
