// When the extension icon is clicked, gets the current tab and send a message. ( will be received by pip_logic.js )
chrome.browserAction.onClicked.addListener( (tab) => { 

	// Send to pip_logic.js
	chrome.tabs.sendMessage(tab.id, {text: 'random_message_that_doesnt_matter_I_just_want_to_send_a_message_to_"pip_logic.js"'});
	
} );