/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function initializeMarkdwonView() {
	const view = document.getElementById("page-markdown-view");
	if (!view) {
		return;
	}

	loadMarkDownScript(
		function () {
			renderMarkdwon("page-markdown-view", "./page.md");
		}
	);
}



