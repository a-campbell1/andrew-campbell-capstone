// // import { render } from "@testing-library/react";
// import "./upload.scss";
// import React, { Component } from "react";
// // import axios from "axios";

// // function Upload() {

// class Upload extends Component {
//     state = {
//         selectedFile: null
//     }
//   fileSelectedHandler = (event) => {
//     console.log(event.target.files[0]);
//     this.setState({
//         selectedFile: event.target.files[0]
//     })
    
//   };

// //   fileUploadHandler = () => {
// //     const fd = new FormData();
// //     fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
// //     axios.post("https://cloudfunctions", fd, {
// //         onUploadProgress: progressEvent => {
// //             console.log("Upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%");
// //         }
// //     })
// //         .then(res => {
// //             console.log(res);
// //         });
// //   }

//   render() {
//     return (
//       <div className="Upload">
//         <input
//          style={{dislpay: "none"}} 
//          type="file"
//          onChange={this.fileSelectedHandler}
//          ref={fileInput => this.fileInput = fileInput}/>
//         <button onClick={() => this.fileInput.click()}>Choose File</button>
//         <button onClick={this.fileUploadHandler}>Upload</button>
//       </div>
//     );
//   }
// }

// export default Upload;
