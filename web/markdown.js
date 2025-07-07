/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function loadMarkDownScript(callback) {
	var script = document.createElement('script');
	//script.src = "https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js";
	//script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
	script.src = https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js;
	script.type = "text/javascript";
	script.onload = callback; 
	document.head.appendChild(script);
}

function renderMarkdwon(markdown_view_id, markdown_url) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange =
		function () {
			if (this.readyState == 4 && this.status == 200) {
				const markdown = this.responseText;

				//marked
				const html = marked.parse(markdown);

				//showdown
				//const converter = new showdown.Converter();
				//const html = converter.makeHtml(markdown);

				document.getElementById(markdown_view_id).innerHTML = html;
			}
		}
		;
	xmlhttp.open("GET", markdown_url, true);
	xmlhttp.send();
}
