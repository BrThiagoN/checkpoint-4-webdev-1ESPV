function Notation() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="input-group">
                <input id="title" type="text" placeholder="Title" />
                <input id="content" type="text" placeholder="Content" />
            </div>
        <div>

        </div>
            <button id="submit" className="btn btn-primary">submit</button>
        </div>
    )
}

export default Notation;