/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
// https://github.com/markedjs/marked
//===========================================================================

function loadMarkDownScript(callback) {
	var script = document.createElement('script');
	//script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
	script.src = "https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js";
	script.type = "text/javascript";
	script.onload = callback; 
	document.head.appendChild(script);
}

function renderMarkdwon(markdownViewId, markdownFileURL) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange =
		function () {
			if (this.readyState == 4 && this.status == 200) {
				const markdown = this.responseText;
				const html = marked.parse(markdown);
				document.getElementById(markdownViewId).innerHTML = html;
			}
		}
		;
	xmlhttp.open("GET", markdownFileURL, true);
	xmlhttp.send();
}
