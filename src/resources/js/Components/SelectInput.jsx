export default function SelectInput({optionsArray, className ,...props}){
    return (
        <select {...props}
            className={"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "+
            className}
        >
            <option value="default">Climbing Level</option>
            {optionsArray.map((item) => (
                <option key={item.id} value={item.id}> {item.grade} </option>
            ))}
        </select>
    )
}
