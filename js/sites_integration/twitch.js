setTimeout( () => {

	if (window.location.href.indexOf("twitch.tv/") > -1) {

		console.log(GLOBAL_msgPrefix + "Here we go!")

		let intervalId = setInterval( () => {

		if (GLOBAL_counter <= GLOBAL_maxCounterReach) {

			try {

				if (!document.getElementById("bttv-picture-in-picture")) {

				let css = "background-color: var(--color-background-tooltip);    border-radius: var(--border-radius-medium);    color: var(--color-text-tooltip);    display: none;    font-size: var(--font-size-6);    font-weight: var(--font-weight-semibold);    line-height: var(--line-height-heading);    margin-bottom: 6px;    padding: 3px 6px;    pointer-events: none;    position: absolute;    text-align: center;    -webkit-user-select: none;    -moz-user-select: none;    -ms-user-select: none;    user-select: none;    white-space: nowrap;    z-index: var(--z-index-balloon);bottom: 100%;    left: 0;    margin-bottom: 6px;    top: auto;    left: 50%;    transform: translateX(-50%);"
					
				// https://stackoverflow.com/questions/41361238/how-to-target-element-by-data-attribute-using-javascript
				let PATH_OF_PARENT_TO_PLACE_BUTTON = '.player-controls__right-control-group'; //'[data-test-selector="settings-menu-button__animate-wrapper"]';
				let POSITION = 'afterend';
				let INJECT_HTML_BUTTON = '<div id="pip-button" style="display:inline-flex!important;position: relative!important; border:1px; width:22px; height:22px; margin-top:4px; margin-left:5.5px;" class=""><button aria-label="Picture in Picture"><div><svg fill="white" width="100%" height="100%" version="1.1" transform="scale(1.3)" viewBox="0 0 128 128" x="0px" y="0px"><path d="M22 30c-1.9 1.9-2 3.3-2 34s.1 32.1 2 34c1.9 1.9 3.3 2 42 2s40.1-.1 42-2c1.9-1.9 2-3.3 2-34 0-31.6 0-31.9-2.2-34-2.1-1.9-3.3-2-42-2-38.5 0-39.9.1-41.8 2zm78 34v28H28V36h72v28z"></path><path d="M60 72v12h32V60H60v12z"></path></svg></div></button><div style="'+css+'" role="tooltip">Picture in Picture</div></div>'; //'<div id="pip-button" style="width:20px; height:20px; margin-top:10px; margin-right:5px; margin-left:5px;  display:inline-flex !important; position: relative !important;" class="sc-AxjAm" aria-label="Picture-In-Picture (PIP)">'+svg+'</div>'
				let BUTTON_TARGET = "#pip-button";

				setupPipButton(PATH_OF_PARENT_TO_PLACE_BUTTON, POSITION, INJECT_HTML_BUTTON, BUTTON_TARGET)

				clearInterval(intervalId);
				console.log(GLOBAL_msgPrefix + "Found the spot to place my PIP button. Timer is cleared.")
				}

			} catch (ex) {

			}

		} else {

			clearInterval(intervalId);
			console.log(GLOBAL_msgPrefix + "Loading has failed after " + maxCounterReach + " attemps. Please refresh the page to try again.")

		}

		GLOBAL_counter++;

	}, GLOBAL_timerCheck);

	};



}, 4000)


