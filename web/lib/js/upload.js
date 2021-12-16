$('#div').on(
    'dragover',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)
$('#div').on(
    'dragenter',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)
$('#div').on(
    'drop',
    function(e){
        if(e.originalEvent.dataTransfer){
            if(e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                /*UPLOAD FILES HERE*/
                upload(e.originalEvent.dataTransfer.files);
            }   
        }
    }
);


function upload(files){
    alert('Upload '+files.length+' File(s).');
      var data = new FormData();
        data.append('file', files[0]);
    $.ajax({
             url: "rest/uploadFile",
          
            type: 'POST',
            data: data,
            processData: false,
            cache: false,
            contentType: false
        })
        .done(function () {
            alert.log(files.name + " uploaded successfully");
          //  callbackSuccess();
        })
         .fail(function () {
         alert('Error!'+ 'An error occurred while uploading ' + files.name+ 'alert-error');
        });
}
