function Notation() {
    return (
        <div className="flex flex-col items-center p-12 gap-6">
            <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter a title..."
                        className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="content" className="text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        placeholder="Write your note here..."
                        rows={5}
                        className="border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                </div>

                <button
                    id="submit"
                    type="button"
                    style={{ backgroundColor: '#171717', color: '#ffffff', cursor: 'pointer' }}
                    className="w-full rounded-md px-4 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Notation;
