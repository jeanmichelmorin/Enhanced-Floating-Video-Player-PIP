// PATH_OF_PARENT_TO_PLACE_BUTTON (String) -> ".player-controls__right-control-group" 

// POSITION (String)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
/*		'beforebegin': Before the element itself.
		'afterbegin': Just inside the element, before its first child. -- Second Most Used
		'beforeend': Just inside the element, after its last child.
		'afterend': After the element itself. -- Most Used
*/

// INJECT_HTML_BUTTON (String) -> '<button class="touchable PlayerControls--control-element nfp-button-control default-control-button pip-button" tabindex="0" role="button" aria-label="Picture-In-Picture (PIP)">'+svg+'</button>'

// BUTTON_TARGET (String) -­> "#demo" IF ID, ".demo" IF CLASS. https://www.w3schools.com/jsref/met_document_queryselector.asp

let GLOBAL_msgPrefix = "Enhanced Floating Video Player: ";
let GLOBAL_counter = 1;
let GLOBAL_maxCounterReach = 20;
let GLOBAL_timerCheck = 2000; // in MS

function setupPipButton(PATH_OF_PARENT_TO_PLACE_BUTTON, POSITION, INJECT_HTML_BUTTON, BUTTON_TARGET) {

	document.querySelector(PATH_OF_PARENT_TO_PLACE_BUTTON).insertAdjacentHTML(POSITION, INJECT_HTML_BUTTON);
			
	/* 
	Previously tried this way, but may be a little bit less optimized and doesn't seem to work well with web applications.
	Doing it this way seems to deactivate all of the site's buttons, and causes visual problems, such as making buttons and/or menus dissapear.
	*/
	// document.querySelector(PATH_OF_PARENT_TO_PLACE_BUTTON).innerHTML += INJECT_HTML_BUTTON;
			
			document.querySelector(BUTTON_TARGET).addEventListener("click", () => {
				
				pip();

			});

}


function pip() {

	if(document.pictureInPictureEnabled && !document.getElementsByTagName("video")[0].disablePictureInPicture) {

		try {

		    if (document.pictureInPictureElement) {

		        document.exitPictureInPicture();

		    } else { // "Else" is not necessary. 

		        document.getElementsByTagName("video")[0].requestPictureInPicture();

		    }    

		} catch(err) {

		    console.error(err);

		}
	}
}


// Response from background.js -- The message sent by the browser extension icon (from background.js) is received here and the code below is executed.
chrome.runtime.onMessage.addListener( (msg, sender) => {
        pip();
});

