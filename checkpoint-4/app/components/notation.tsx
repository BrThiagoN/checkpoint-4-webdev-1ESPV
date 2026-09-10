function Notation() {
    return (
        <div className="flex flex-col items-center justify-start p-12 gap-4">
            <div className="flex flex-col gap-3 w-full max-w-md">
                <input id="title" type="text" placeholder="Title" className="border rounded px-3 py-2 w-full" />
                <input id="content" type="text" placeholder="Content" className="border rounded px-3 py-2 w-full" />
            </div>
            <button id="submit" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">submit</button>
        </div>
    )
}

export default Notation;