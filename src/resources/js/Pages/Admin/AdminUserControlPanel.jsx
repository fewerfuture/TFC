import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Header from "@/Components/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";

export default function AdminUserControlPanel({
    auth,
    users,
    climbing_levels,
    events,
}) {
    const [userData, setUserData] = useState(users);

    //User handlers
    const handleSaveUser = (user) => {
            console.log(user);
            Inertia.put(`/adminTool/user/${user.id}`, user, {
                onSuccess: () => console.log("User updated successfully"),
                onError: () => console.log("error updating user"),
            });

    };

    const handleDeleteUser = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(`/adminTool/user/${id}`, {
                onSuccess: () => console.log("User deleted successfully"),
            });
        }
    };

    const handleChangeUser = (id, field, value) => {
        setUserData((prevData) =>
            prevData.map((user) =>
                user.id === id ? { ...user, [field]: value } : user
            )
        );
    };

    return (
        <AdminLayout
            users={true}
        >
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">ID</th>
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Email</th>
                            <th className="text-left p-3 px-5">Password</th>
                            <th className="text-left p-3 px-5">Role</th>
                            <th className="text-left p-3 px-5">
                                Climbing Level
                            </th>
                            <th className="text-left p-3 px-5">Actions</th>
                        </tr>
                        {userData.map((user) => (
                            <tr
                                key={user.id}
                                className="border-b hover:bg-orange-100 dark:hover:bg-blue-900"
                            >
                                <td className="p-3 px-5">
                                    <p className="bg-transparent py-2">
                                        {user.id}
                                    </p>
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="text"
                                        value={user.name}
                                        onChange={(e) =>
                                            handleChangeUser(
                                                user.id,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="text"
                                        value={user.email}
                                        onChange={(e) =>
                                            handleChangeUser(
                                                user.id,
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-3 px-5">
                                    <TextInput
                                        type="text"
                                        onChange={(e) =>
                                            handleChangeUser(
                                                user.id,
                                                "password",
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td className="p-3 px-5">
                                    <SelectInput
                                        value={user.role_id}
                                        onChange={(e) =>
                                            handleChangeUser(
                                                user.id,
                                                "role_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="1">user</option>
                                        <option value="2">admin</option>
                                    </SelectInput>
                                </td>

                                <td className="p-3 px-5">
                                    <SelectInput
                                        value={user.climbing_level_id}
                                        onChange={(e) =>
                                            handleChangeUser(
                                                user.id,
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
                                <td className="p-3 px-5 flex justify-start">
                                    <button
                                        type="button"
                                        onClick={() => handleSaveUser(user)}
                                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeleteUser(user.id)
                                        }
                                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
