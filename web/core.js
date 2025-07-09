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
function initializeCore() {
	_Core = new Core();
}





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function initializePageResizer() {
	const resizer = document.getElementById("page-resizer");
	const left = document.getElementById("page-information");
	if (!resizer) {
		return;
	}
	if (!left) {
		return;
	}


	let isResizing = false;


	resizer.addEventListener('mousedown',
		function (e) {
			isResizing = true;
			document.body.style.cursor = 'ew-resize';

			document.body.style.userSelect = 'none'; // 텍스트 선택 방지
		}
	);

	document.addEventListener('mousemove',
		function (e) {
            const leftMinSize = 300;

			if (!isResizing) return;
			const newWidth = e.clientX - left.getBoundingClientRect().left;
			if (newWidth > leftMinSize && newWidth < window.innerWidth * 0.8) {
				left.style.width = newWidth + 'px';
			}
		}
	);

	document.addEventListener('mouseup',
		function () {
			if (isResizing) {
				document.body.style.cursor = '';

				document.body.style.userSelect = ''; // 텍스트 선택 방지 원래대로 복원
			}

			isResizing = false;
		}
	);
}

function setPageResizerHeight() {
	const resizer = document.getElementById("page-resizer");
	if (!resizer) {
		return;
	}

	const documentHeight = Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);

	resizer.style.minHeight = documentHeight + 'px';
}




/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function setupPageInformationInnerHtml() {
	const information = document.getElementById("page-information");
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

		<svg style="width: 16px;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
			<path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
		</svg>
		<a href="mailto:code1009@naver.com"><b>code1009@naver.com</b></a><br />

		<svg style="width: 16px;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
			<path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
		</svg>
		<a href="https://code1009.github.io/"><b>https://code1009.github.io/</b></a><br />


		<svg width="16" height="16" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
		</svg>
		<a href="https://github.com/code1009"><b>https://github.com/code1009/</b></a><br />
		
		`
		;
}

function setPageInformationHeight() {
	const information = document.getElementById("page-information");
	if (!information) {
		return;
	}

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

function initializePageInformation() {
	const information = document.getElementById("page-information");
	if (!information) {
		return;
	}

	setupPageInformationInnerHtml();

	initializePageResizer();
	
	window.addEventListener('resize', 
		function(event) {
			// console.log('윈도우 크기가 변경되었습니다:', window.innerWidth, window.innerHeight);
			setPageInformationHeight();
			setPageResizerHeight();
		}
	);
}


