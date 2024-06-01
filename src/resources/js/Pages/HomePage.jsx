import CardEvent from "@/Components/CardEvent";
import Checkbox from "@/Components/Checkbox";
import Header from "@/Components/Header";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";
import MapMultipleMarkerComponent from "@/Components/MapMultipleMarkerComponent";
import { useUserLocation } from "@/CustomHooks/useUserLocation";
import { CoordsDistance } from "@/Utils/CoordsDistance";
import { useEffect, useState } from "react";
import LoadingComponent from "@/Components/LoadingComponent";

export default function HomePage({
    auth,
    eventData,
    joinedUserEvents,
    climbing_level,
    apiKey,
    mapID,
}) {
    // variables
    let inputValueSartDate;
    let inputValueEndDate;
    const type = [
        { id: 1, name: "Climbing Gym" },
        { id: 2, name: "Via Ferrata" },
        { id: 3, name: "Rock Climbing" },
    ];

    // Filters
    const [nameSearch, setNameSearch] = useState("");
    const [levelSearch, setLevelSearch] = useState("0");
    const [finishedSearch, setFinishedSearch] = useState(false);
    const [startDateSearch, setStartDateSearch] = useState("");
    const [endDateSearch, setEndDateSearch] = useState("");
    const [typeSearch, setTypeSearch] = useState("");
    const [myEventsSearch, setMyEventsSearch] = useState(false);
    const [range, setRange] = useState(0);

    const [userLocation, showMap] = useUserLocation();

    // Filters functions
    const updateNameSearch = (e) => {
        setNameSearch(e.target.value);
    };

    const updateLevelSearch = (e) => {
        setLevelSearch(e.target.value);
    };

    const updateFinishedSearch = () => {
        setFinishedSearch(!finishedSearch);
    };

    const updateStartDataSearch = (e) => {
        inputValueSartDate = e.target.value;
        e.target.value
            ? setStartDateSearch(format(e.target.value, "dd-MM-yyyy"))
            : setStartDateSearch("");
    };

    const updateEndDataSearch = (e) => {
        inputValueEndDate = e.target.value;
        e.target.value
            ? setEndDateSearch(format(e.target.value, "dd-MM-yyyy"))
            : setEndDateSearch("");
    };

    const updateTypeSearch = (e) => {
        setTypeSearch(e.target.value);
    };

    const updateMyEventsSearch = () => {
        setMyEventsSearch(!myEventsSearch);
    };

    const handleResetFilters = (e) => {
        setNameSearch("")
        setLevelSearch("0")
        setFinishedSearch(false)
        setStartDateSearch("")
        setEndDateSearch("")
        setTypeSearch("")
        setMyEventsSearch(false)
        setRange(0)
    }

    // Events filtered
    const filteredEvents = eventData.filter(
        (event) =>
            event.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
            (levelSearch == "0" ||
                event.climbing_level_id.toString() == levelSearch) &&
            event.finished == finishedSearch &&
            event.start_date.includes(startDateSearch) &&
            event.end_date.includes(endDateSearch) &&
            (typeSearch == "" || typeSearch == event.type) &&
            (myEventsSearch ? event.user_id === auth.user.id : event.user_id) &&
            (range == 0 ||
                (userLocation && // IMPORTANT!!!
                    CoordsDistance(
                        event.location.latitude,
                        event.location.longitude,
                        userLocation.lat,
                        userLocation.lng
                    ) <= range))
    );

    return (
        <>
            <GeneralLayout>
                <Head title="Home page" />
                <Header homePage={true} />
                <div className="mt-7 grid lg:grid-cols-[200px_minmax(400px,1fr)_300px] lg:grid-rows-2 grid-cols-1 grid-rows-9 h-screen">
                    <aside className="lg:row-span-2 row-span-2 lg:p-0 mb-5 flex flex-col items-center w-full p-4 overflow-auto border-b-2 lg:border-none">
                        {auth.user && (
                            <Link
                                className="bg-green-500 text-white py-2 px-4 rounded mr-2 text-xl"
                                href={route("createEvent")}
                            >
                                Create event
                            </Link>
                        )}

                        <div className="mt-6 w-full lg:w-auto">
                            <TextInput
                                id="nameEvent"
                                type="search"
                                name="nameEvent"
                                placeholder="Search Name"
                                value={nameSearch}
                                className="mt-1 block w-full"
                                onChange={updateNameSearch}
                            />
                        </div>

                        <div className="mt-6 w-full lg:w-auto">
                            <InputLabel
                                htmlFor="start_date"
                                value="Start Date"
                            />

                            <TextInput
                                id="start_date"
                                type="date"
                                name="start_date"
                                value={inputValueSartDate}
                                className="mt-1 block dark:calendar-color-white w-full lg:w-auto"
                                onChange={updateStartDataSearch}
                            />
                        </div>

                        <div className="mt-6 w-full lg:w-auto">
                            <InputLabel htmlFor="end_date" value="End Date" />

                            <TextInput
                                id="end_date"
                                type="date"
                                name="end_date"
                                value={inputValueEndDate}
                                className="mt-1 block dark:calendar-color-white w-full lg:w-auto"
                                onChange={updateEndDataSearch}
                            />
                        </div>

                        <div className="mt-6 w-full lg:w-auto">
                            <InputLabel htmlFor="type" value="Type of Event" />

                            <SelectInput
                                id="type"
                                name="type"
                                value={typeSearch}
                                className="mt-1 block w-full"
                                onChange={updateTypeSearch}
                            >
                                <option value="">No filter</option>
                                {type.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </SelectInput>
                        </div>

                        <div className="mt-6 w-full lg:w-auto">
                            <InputLabel
                                htmlFor="levelEvent"
                                value="Climbing Level Filter"
                            />

                            <SelectInput
                                id="levelEvent"
                                name="levelEvent"
                                value={levelSearch}
                                className="mt-1 block w-full"
                                onChange={updateLevelSearch}
                            >
                                <option value="0">No filter</option>
                                {climbing_level.map((level) => (
                                    <option key={level.id} value={level.id}>
                                        {level.grade}
                                    </option>
                                ))}
                            </SelectInput>
                        </div>

                        {userLocation && (
                            <div className="mt-6 w-full lg:w-auto">
                                <InputLabel htmlFor="range" value="Distance" />
                                <span>{range}Km</span>
                                <input
                                    type="range"
                                    id="range"
                                    name="range"
                                    min="0"
                                    max="500"
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                    className="w-full"
                                />

                                <p className="text-gray-500"> 0 to not filter</p>
                            </div>
                        )}

                        {auth.user && (
                            <div className="mt-6 w-full lg:w-auto flex items-center">
                                <Checkbox
                                    id="myEvents"
                                    name="myEvents"
                                    value={myEventsSearch}
                                    className="mr-2"
                                    onChange={updateMyEventsSearch}
                                />
                                <span>Show my events</span>
                            </div>
                        )}

                        <div className="mt-6 w-full lg:w-auto flex items-center">
                            <Checkbox
                                id="finishedEvents"
                                name="finishedEvents"
                                value={finishedSearch}
                                className="mr-2"
                                onChange={updateFinishedSearch}
                            />
                            <span>Show finished events</span>
                        </div>

                        <div className="mt-6">
                            <p
                                className="underline hover:cursor-pointer"
                                onClick={handleResetFilters}
                            >
                                Reset Filters
                            </p>
                        </div>
                    </aside>

                    <main className="lg:row-span-2 row-span-3 lg:p-0 overflow-y-scroll scrollbar-thin scrollbar-webkit scrollbar-color-black dark:scrollbar-color-white p-4 lg:border-none border-b-2 ">
                        {eventData.length > 0 ? (
                            filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <Link
                                        key={event.id}
                                        href={route("event", event.id)}
                                    >
                                        <CardEvent
                                            event={event}
                                            user={event.user}
                                        />
                                    </Link>
                                ))
                            ) : (
                                <p className="text-center m-16 text-2xl font-bold">
                                    No events found.
                                </p>
                            )
                        ) : (
                            <div className="text-center m-16 text-2xl font-bold">
                                <p>
                                    There are no events available at this time.
                                </p>
                            </div>
                        )}
                    </main>

                    <aside className="lg:row-span-1 row-span-2 flex flex-col px-5 overflow-y-scroll scrollbar-thin scrollbar-webkit scrollbar-color-black dark:scrollbar-color-white">
                        <p className="text-3xl self-center mr-5">
                            Joined Events
                        </p>
                        <div className="max-h-full overflow-auto flex flex-col">
                            {auth.user && auth.user.id ? (
                                joinedUserEvents.length > 0 ? (
                                    joinedUserEvents.map((event) => (
                                        <Link
                                            className="mr-5 border-b-2 flex justify-between items-center mt-3"
                                            href={route("event", event.id)}
                                            key={event.id}
                                        >
                                            <p className="text-lg max-w-32 truncate">
                                                {event.name}
                                            </p>
                                            <p>
                                                {event.start_date.split(" ")[0]}
                                            </p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="self-center mt-5 underline underline-offset-4 decoration-dotted">
                                        You are not joined at any events
                                    </p>
                                )
                            ) : (
                                <Link
                                    className="self-center mt-5 underline underline-offset-4 text-gray-500"
                                    href={route("login")}
                                >
                                    Log in to join an event
                                </Link>
                            )}
                        </div>
                    </aside>

                    <aside className="lg:row-span-1 row-span-2">
                        {showMap ? (
                            <MapMultipleMarkerComponent
                                events={filteredEvents}
                                envApiKey={apiKey}
                                envMapID={mapID}
                                userCoords={userLocation}
                            />
                        ) : (
                            <LoadingComponent/>
                        )}
                    </aside>
                </div>
            </GeneralLayout>
        </>
    );
}
