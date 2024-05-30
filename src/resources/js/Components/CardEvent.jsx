export default function CardEvent ({event, user}) {

    let [start_date] = event.start_date.split(' ')
    let [end_date] = event.end_date.split(' ')


    return (
        <div className="max-w-full lg:min-h-44  mb-7 lg:mx-7 flex flex-col bg-gradient-to-br from-gray-300 via-gray-200 to-gray-200/50  dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-700 dark:to-slate-500 rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer overflow-hidden">
            <div className="*:mb-2 m-5 self-start max-w-full">
                <p className="text-4xl truncate"> {event.name} </p>
                <p className="text-xl truncate"> {event.location.name} </p>
            </div>
            <div className="text-xl text-center *:mb-2 flex lg:justify-around lg:flex-row flex-col w-full">
                <p> {event.climbing_level.grade} </p>
                <p className=""> {start_date} / {end_date} </p>
                <p> {event.type} </p>
                <p className=""> {user.name} </p>
            </div>
        </div>
    )
}
