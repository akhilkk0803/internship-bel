// // import React from "react";
// // import { useState } from "react";

// // const Upload = () => {
// //   const [file, setfile] = useState();
// //   const filehandler = (e) => {
// //     setfile(e.target.files[0]);
// //   };
// //   const submithandler = (e) => {
// //     e.preventDefault();
// //     console.log(file);
// //   };
// //   return (
// //     <div>
// //       <form action="" onSubmit={submithandler}>
// //         <input type="file" onChange={filehandler} />
// //         <button>Upload</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Upload;
// import React, { useState } from "react";
// import "./Upload.css";
// const Upload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   return (
//     <div className="file-upload">
//       <label htmlFor="file-input" className="file-label">
//         <i className="fas fa-cloud-upload-alt"></i> Choose File
//       </label>
//       <input
//         id="file-input"
//         type="file"
//         accept=".jpg, .jpeg, .png, .gif"
//         onChange={handleFileChange}
//       />
//       {selectedFile && (
//         <div className="file-selected">
//           <p>Selected File: {selectedFile.name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography, LinearProgress } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    display: "none",
  },
  button: {
    marginTop: "20px",
    marginBottom: "10px",
    backgroundColor: "#2196f3",
    color: "white",
    "&:hover": {
      backgroundColor: "#1976d2",
    },
  },
  fileSelected: {
    marginTop: "10px",
  },
  progress: {
    width: "100%",
  },
}));

const Upload = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Simulate file upload progress (you can replace this with your actual upload logic)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className={classes.root}>
      <label htmlFor="file-input">
        <input
          id="file-input"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          className={classes.input}
          onChange={handleFileChange}
        />
        <Button variant="contained" component="span" className={classes.button}>
          Upload File
        </Button>
      </label>
      {selectedFile && (
        <div className={classes.fileSelected}>
          <Typography variant="body1">
            Selected File: {selectedFile.name}
          </Typography>
        </div>
      )}
      {uploadProgress > 0 && (
        <div className={classes.progress}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </div>
      )}
      {uploadProgress === 100 && (
        <Typography variant="body1" color="primary">
          Upload complete!
        </Typography>
      )}
      {uploadProgress < 100 && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          Start Upload
        </Button>
      )}
    </div>
  );
};

export default Upload;
