// import { Container } from 'react-bootstrap';
import { Grid, Box } from '@mui/material';

const VideoUpload = () => {
    return (
        <>
            <div className="container">
                <h1 className="mt-4">Video Upload Platform</h1>

                <form action="/upload" method="POST" encType="multipart/form-data" className="mt-4">
                    <div className="form-group">
                        <label htmlFor="video">Select Video:</label>
                        <input type="file" className="form-control-file" id="video" name="video" accept="video/*" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Upload</button>
                </form>
            </div>
    
            <Grid container spacing={2} sx={{marginBottom: "20px"}}>
                <Grid item xs={6} md={3}>
                    <Box>
                        <div className="ratio ratio-4x3">
                            <iframe src="https://www.youtube.com/embed/nVaSEqG7OOs" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box>
                        <div className="ratio ratio-4x3">
                            <iframe src="https://www.youtube.com/embed/HGZJbm3aWeY" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box>
                        <div className="ratio ratio-4x3">
                            <iframe src="https://www.youtube.com/embed/S3B9MI8FRZ0" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box>
                        <div className="ratio ratio-4x3">
                            <iframe src="https://www.youtube.com/embed/m3sPrMR6l0Q" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}


export default VideoUpload