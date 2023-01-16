import Dropzone from "dropzone";
import 'dropzone/src/dropzone.scss';

(()=>{
    const form = document.querySelector("#my-form")

    const myDropzone = new Dropzone("#my-form", {
      previewsContainer: ".previews",
      url: "/falsa",
      autoProcessQueue: false,
      clickable:document.querySelector("#dropzone"),
      maxFiles:1,
      dictDefaultMessage: "Custom default message",
  
      
      init: function() {
        this.on("success", function(file, response) {
            console.log(response);
        });
    }
    });

    let fileUploaded

    myDropzone.on("addedfile", file => {
      fileUploaded = file
      console.log(file)
      console.log(`File added: ${file.name}`);
    });

    form.addEventListener("submit",(e:any)=>{
      e.preventDefault()
      const fullname = e.target.name.value
      const bio = e.target.bio.value
      const data = {
        fullname,
        bio,
        fileURL:fileUploaded.dataURL
      }
      console.log(data)
    })
})()