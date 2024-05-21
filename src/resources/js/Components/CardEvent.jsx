export default function CardEvent ({event, user}) {

    let [start_date] = event.start_date.split(' ')
    let [end_date] = event.end_date.split(' ')


    return (
        <div className="min-h-44 mb-7 mx-7 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-200/50  dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-700 dark:to-slate-500 rounded-lg hover:scale-105 flex flex-col b-2 overflow-auto transition duration-300 ease-in-out cursor-pointer ">
            <div className="*:mb-2 m-5 self-start">
                <p className="text-4xl"> {event.name} </p>
                <p className="text-xl"> {event.location.name} </p>
            </div>
            <div className="text-xl text-center *:mb-2 flex justify-around w-full">
                <p> {event.climbing_level.grade} </p>
                <p> {start_date} / {end_date} </p>
                <p> {event.type} </p>
                <p> {user.name} </p>
            </div>
        </div>
    )
}
