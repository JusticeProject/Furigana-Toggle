// Check to make sure we have not already enabled the toggle for this page.
// The first time this script is run on a page the element will not exist.
// The second time it's run the element will exist, thus there is no need
// to run it again.
if (document.getElementById("toggleFuriganaId") == null) {
    console.log("Toggling has not been enabled for this page.");
    
    const NHK_URL = "nhk.or.jp/news/easy";
    const FURIGANA_BUTTON_CLASS = "tool-buttons__item btn toggle-ruby js-toggle-ruby hide-sp";

    if (document.URL.includes(NHK_URL)) {
        console.log("Found correct NHK URL, continuing...");

        var furiganaButton = document.getElementsByClassName(FURIGANA_BUTTON_CLASS)[0];
        if (typeof furiganaButton !== "undefined") {
            function checkForKeyF(e) {
                if (e.code == "KeyF") {
                    furiganaButton.click();
                }
            }

            // start listening for key presses
            document.addEventListener("keydown", checkForKeyF);
            console.log("Toggling now enabled");

            // if we got this far, give feedback to the user by flashing the background color
            var prevColor = document.body.style.backgroundColor;
            document.body.style.backgroundColor = "#6ac482"; // greenish
            setTimeout(() => {document.body.style.backgroundColor = prevColor;}, 300);

            // add a custom element to the document which will prevent the script 
            // from running a second time on the same tab
            var customParagraph = document.createElement("p");
            customParagraph.id = "toggleFuriganaId";
            customParagraph.textContent = "This page has the Toggle Furigana enabled";
            document.body.appendChild(customParagraph);
        } else {
            alert("This page does not have a Furigana Button.");
        }
    } else {
        alert("URL does not contain " + NHK_URL);
    }
} else {
    console.log("Toggling has already been enabled for this page.");
}
