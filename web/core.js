/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class Core {

	#Context = null;

	constructor() {
		this.#Context = null;
	}

	navigateContents(urn) {
		document.location.href = urn;
	}
}





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
var _Core = null;





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function coreInitialize() {
	_Core = new Core();

	let information = document.getElementById("information");
	if (!information) {
		return;
	}

	information.innerHTML =
`
		<p style="text-align: center;"><img src="../logo.png" style="border:2px solid #bdbdbd; border-radius:120px;" /></p>
		<br />

		<h1>셈말짓기</h1>

		<p>
			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path d="M0 0h7v7H0V0zm2 2v3h3V2H2zM0 9h7v7H0V9zm9-9h7v7H9V0zm2 2v3h3V2h-3zM9 9h7v7H9V9zm2 2v3h3v-3h-3zm-9 0v3h3v-3H2z" fill-rule="evenodd" />
			</svg>
			
			<b>목록</b>
		</p>
		<div id="mainMenu" class="menu"></div>

		<p>C++ 초짜로 30년을 살아 남음.</p>

		<a href="mailto:code1009@naver.com"><b>code1009@naver.com</b></a><br />
		<a href="https://code1009.github.io/"><b>https://code1009.github.io/</b></a><br />
`
		;
		
	const documentHeight = Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
		);

	information.style.minHeight = documentHeight + 'px';
}
