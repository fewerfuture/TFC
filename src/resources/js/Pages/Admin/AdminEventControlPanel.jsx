import MapInputComponent from "@/Components/MapInputComponent";
import Modal from "@/Components/Modal";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import { parse, format } from "date-fns";
import InputLabel from "@/Components/InputLabel";

export default function AdminEventControlPanel({
    events,
    climbing_levels,
    apiKey,
    mapID,
}) {
    const type = [
        { id: 1, name: "Climbing Gym" },
        { id: 2, name: "Via Ferrata" },
        { id: 3, name: "Rock Climbing" },
    ];

    const [eventData, setEventData] = useState(events);
    const [openModal, setOpenModal] = useState(false);
    const [dataLocationModal, setDataLocationModal] = useState(null);

    const handleSaveEvent = (event) => {
        Inertia.put(`/adminTool/event/${event.id}`, event, {
            onSuccess: () => console.log("Event updated successfully"),
            onError: (errors) => console.log("Error updating event: ", errors),
        });
    };

    const handleDeleteEvent = (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            Inertia.delete(`/adminTool/event/${id}`, {
                onSuccess: () => console.log("Event deleted successfully"),
                onError: (errors) =>
                    console.log("Error deleting event: ", errors),
            });
        }
    };

    const handleSaveLocation = (location) => {
        Inertia.put(`/adminTool/location/${location.id}`, location, {
            onSuccess: () => console.log("Location updated successfully"),
            onError: (errors) =>
                console.log("Error updating location: ", errors),
        });
    };

    const handleChangeEvent = (id, field, value) => {
        setEventData((prevData) =>
            prevData.map((event) =>
                event.id === id ? { ...event, [field]: value } : event
            )
        );
    };

    const handleEditClick = (location) => {
        setOpenModal(true);
        setDataLocationModal(location);
    };

    const formatDateToInput = (date) =>
        format(
            parse(date, "dd-MM-yyyy HH:mm", new Date()),
            "yyyy-MM-dd'T'HH:mm"
        );

    const formatDateToState = (date) =>
        format(
            parse(date, "yyyy-MM-dd'T'HH:mm", new Date()),
            "dd-MM-yyyy HH:mm"
        );

    useEffect(() => {
        console.log("eventData", eventData);
    }, [eventData]);

    return (
        <AdminLayout events={true}>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">ID</th>
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Start Date</th>
                            <th className="text-left p-3 px-5">End Date</th>
                            <th className="text-left p-3 px-5">Type</th>
                            <th className="text-left p-3 px-5">Finished</th>
                            <th className="text-left p-3 px-5">Location</th>
                            <th className="text-left p-3 px-5">
                                Climbing Level
                            </th>
                            <th className="text-left p-3 px-5">Creator</th>
                            <th className="text-left p-3 px-5">Actions</th>
                        </tr>
                        {eventData.map((event) => (
                            <tr
                                key={event.id}
                                className="border-b hover:bg-orange-100 dark:hover:bg-blue-900"
                            >
                                <td className="p-3 px-5">
                                    <p className="bg-transparent py-2">
                                        {event.id}
                                    </p>
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="text"
                                        value={event.name}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="datetime-local"
                                        value={formatDateToInput(
                                            event.start_date
                                        )}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "start_date",
                                                formatDateToState(
                                                    e.target.value
                                                )
                                            )
                                        }
                                        className="dark:calendar-color-white py-2"
                                    />
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="datetime-local"
                                        value={formatDateToInput(
                                            event.end_date
                                        )}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "end_date",
                                                formatDateToState(
                                                    e.target.value
                                                )
                                            )
                                        }
                                        className="dark:calendar-color-white py-2"
                                    />
                                </td>
                                <td className="p-3 px-5">
                                    <SelectInput
                                        type="text"
                                        value={event.type}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "type",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {type.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.name}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                </td>
                                <td className="p-3 px-5">
                                    <SelectInput
                                        value={event.finished}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "finished",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </SelectInput>
                                </td>
                                <td className="p-3 px-5">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleEditClick(event.location)
                                        }
                                        className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="p-3 px-5">
                                    <SelectInput
                                        value={event.climbing_level_id}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "climbing_level_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {climbing_levels.map((level) => (
                                            <option
                                                key={level.id}
                                                value={level.id}
                                            >
                                                {level.grade}
                                            </option>
                                        ))}
                                    </SelectInput>
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="text"
                                        value={event.user.name}
                                        onChange={(e) =>
                                            handleChangeEvent(
                                                event.id,
                                                "user_id",
                                                e.target.value
                                            )
                                        }
                                        disabled
                                    />
                                </td>
                                <td className="p-3 px-5 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => handleSaveEvent(event)}
                                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteEvent(event.id)
                                        }
                                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <Modal
                            show={openModal}
                            onClose={() => setOpenModal(false)}
                            closeable={false}
                        >
                            <div className="p-11">
                                <p className="text-white text-6xl text-center mb-5">
                                    Edit Location
                                </p>
                                <div className="mb-4">
                                    <div className="mb-4">
                                        <InputLabel
                                            htmlFor="route"
                                            value="Route name"
                                        />

                                        <TextInput
                                            id="route"
                                            name="route"
                                            value={
                                                dataLocationModal &&
                                                dataLocationModal.name
                                            }
                                            onChange={(e) => {
                                                setDataLocationModal(
                                                    (prevState) => ({
                                                        ...prevState,
                                                        name: e.target.value,
                                                    })
                                                );
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="coordinates"
                                            value="Location"
                                        />
                                        <MapInputComponent
                                            id="coordinates"
                                            name="coordinates"
                                            envApiKey={apiKey}
                                            envMapID={mapID}
                                            coordinates={
                                                dataLocationModal && {
                                                    lat: dataLocationModal.latitude,
                                                    lng: dataLocationModal.longitude,
                                                }
                                            }
                                            location={
                                                dataLocationModal &&
                                                dataLocationModal
                                            }
                                            setDataLocationModal={
                                                setDataLocationModal
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-end gap-5 text-white">
                                    <button
                                        className="p-2 bg-red-500 rounded"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2 bg-green-500 rounded"
                                        onClick={() =>
                                            handleSaveLocation(
                                                dataLocationModal
                                            )
                                        }
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
