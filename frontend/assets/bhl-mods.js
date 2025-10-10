$( document ).ready(function() {

    try {
        // need to wait until this section has loaded in the document
        $(document).on("loadedrecordform.aspace", function(event) {

            $( "input#include-daos" ).prop("checked", true);
            $( "input#include-uris" ).prop("checked", false);
            $( "input#numbered-cs" ).prop("checked", true);
            $( "input#ead3" ).prop("checked", false);
            $( "input#include-unpublished" ).prop("checked", false);

        });
    } catch (error) {
        console.log (error);
    }
});