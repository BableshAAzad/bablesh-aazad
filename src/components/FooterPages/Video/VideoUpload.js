
const VideoUpload = () => {
    return (
        <>
            <div className="container">
                <h1 className="mt-4">Video Upload Platform</h1>

                <form action="/upload" method="POST" enctype="multipart/form-data" className="mt-4">
                    <div className="form-group">
                        <label for="video">Select Video:</label>
                        <input type="file" className="form-control-file" id="video" name="video" accept="video/*" required />
                    </div>
                    <div className="form-group">
                        <label for="title">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label for="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Upload</button>
                </form>
            </div>

        </>
    )
}

export default VideoUpload
