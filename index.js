const link_box = document.querySelectorAll('#email')
link_box.forEach(element => {
    element.addEventListener("click", 
        function() {
            if (confirm("E-Mail will open in your default E-Mail client, do you still want to continue?")) {
                open("mailto:sagarbhalerao001@outlook.com");
            } else {
                console.log("Aborted E-Mail");
            }
        }
    )
});