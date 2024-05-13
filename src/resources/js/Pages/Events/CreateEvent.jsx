import Header from "@/Components/Header";
import GeneralLayout from "@/Layouts/GeneralLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import FormLayout from "@/Layouts/FormLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SelectInput from "@/Components/SelectInput";
import PrimaryButton from "@/Components/PrimaryButton";


export default function CreateEvent({auth ,climbing_level, locations}){
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        start_date: '',
        end_date: '',
        type: '',
        finished: false,
        location: '',
        climbing_level: '',
        user_id: '',
    });

    const type = [
        { id: 1, name: 'Climbing Gym' },
        { id: 2, name: 'Via Ferrata' },
        { id: 3, name: 'Rock Climbing' }
    ];

    const submit = (e) => {
        e.preventDefault();

        post(route('createEvent'));
    };

    return (
        <GeneralLayout>
            <Head title="Create Event"/>
            <Header
                auth={auth.user}
            />
            <FormLayout>

                <form onSubmit={submit} >
                    <div>
                        <InputLabel htmlFor="name" value="Event Name" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            placeholder="Name of the event"
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="start_date" value="Start Date" />

                        <TextInput
                            id="start_date"
                            type="datetime-local"
                            name="start_date"
                            value={data.start_date}
                            className="mt-1 block w-full dark:calendar-color-white"
                            autoComplete="start_date"
                            onChange={(e) => setData('start_date', e.target.value)}
                            required
                        />

                        <InputError message={errors.start_date} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="end_date" value="End Date" />

                        <TextInput
                            id="end_date"
                            type="datetime-local"
                            name="end_date"
                            value={data.end_date}
                            className="mt-1 block w-full dark:calendar-color-white"
                            autoComplete="end_date"
                            onChange={(e) => setData('end_date', e.target.value)}
                            required
                        />

                        <InputError message={errors.end_date} className="mt-2" />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="location" value="location" />

                        <SelectInput
                            id="location"
                            name="location"
                            value={data.location}
                            className='mt-1 block w-full'
                            onChange={(e) => setData('location', e.target.value)}
                        >
                            <option value="default">Locations</option>
                            {locations.map((item) => (
                                <option key={item.id} value={item.id}> {item.name} </option>
                            ))}
                        </SelectInput>

                        <InputError message={errors.location} className="mt-2" />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="climbing_level" value="Climbing level" />

                        <SelectInput
                            id="climbing_level"
                            name="climbing_level"
                            value={data.climbing_level}
                            className='mt-1 block w-full'
                            onChange={(e) => setData('climbing_level', e.target.value)}
                        >
                            <option value="default">Climbing Level</option>
                            {climbing_level.map((item) => (
                                <option key={item.id} value={item.id}> {item.grade} </option>
                            ))}
                        </SelectInput>

                        <InputError message={errors.climbing_level} className="mt-2" />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="type" value="Type of Event" />

                        <SelectInput
                            id="type"
                            name="type"
                            value={data.type}
                            className='mt-1 block w-full'
                            onChange={(e) => setData('type', e.target.value)}
                        >
                            <option value="default">Type</option>
                            {type.map((item) => (
                                <option key={item.id} value={item.name}> {item.name} </option>
                            ))}
                        </SelectInput>

                        <InputError message={errors.type} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton
                            className="ms-4"
                            disabled={processing}
                            type="submit"
                        >
                            Create event
                        </PrimaryButton>
                    </div>

                </form>
            </FormLayout>

        </GeneralLayout>
    )
}