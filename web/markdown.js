/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
// https://github.com/markedjs/marked
//===========================================================================

function load_marked_script(callback) {
	var script = document.createElement('script');
	//script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
	script.src = "https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js";
	script.type = "text/javascript";
	script.onload = callback;
	document.head.appendChild(script);
}

function load_highlight_script(callback) {
	var script = document.createElement('script');
	//script.src = "https://cdn.jsdelivr.net/npm/highlight.js/lib/highlight.js";
	script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js";
	script.type = "text/javascript";
	script.onload = callback;
	document.head.appendChild(script);
}

function load_highlight_link_stylesheet() {
	var link = document.createElement('link');
	//link.href = "https://cdn.jsdelivr.net/npm/highlight.js/styles/github.css";
	link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/default.min.css";
	link.rel  = "stylesheet";
	document.head.appendChild(link);
}

function loadMarkDownScript(callback) {
	load_marked_script(
		function () {
			load_highlight_link_stylesheet();
			load_highlight_script(callback);
		}
	);
}

function renderMarkdwon(markdownViewId, markdownFileURL) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange =
		function () {
			if (this.readyState == 4 && this.status == 200) {
				const markdown = this.responseText;

				marked.setOptions({
					highlight: function (code, lang) {
						return hljs.highlightAuto(code, [lang]).value;
					}
				});

				const html = marked.parse(markdown);
				document.getElementById(markdownViewId).innerHTML = html;
			}
		}
		;
	xmlhttp.open("GET", markdownFileURL, true);
	xmlhttp.send();
}
