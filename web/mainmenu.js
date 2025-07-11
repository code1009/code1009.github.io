﻿/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class MainMenu {

	_Menu = new Menu();

	constructor() {
		this.registerMenuDataItem();
		this.initializeMenu();
	}
	
	registerMenuDataItem() {
		//this._Menu.addDataItem("/예시" , "../example/page.html");

		//this._Menu.addDataItem("/틀-단일"   , "../template-s/page.html");
		//this._Menu.addDataItem("/틀-다중"   , "../template-m/page.html");

		this._Menu.addDataItem("/셈말짓기", "../home-셈말짓기/page.html");
		
		this._Menu.addDataItem("/개발 노트"                     , "../page-github/page.html");
		this._Menu.addDataItem("/개발 노트/GitHub"              , "../page-github/page.html");
		this._Menu.addDataItem("/개발 노트/git"                 , "../page-git/page.html");
		this._Menu.addDataItem("/개발 노트/markdown"            , "../page-markdown/page.html");
		this._Menu.addDataItem("/개발 노트/오픈소스 라이브러리" , "../page-open-source-lib/page.html");
		this._Menu.addDataItem("/개발 노트/Visual Studio"       , "../page-vs/page.html");
		this._Menu.addDataItem("/개발 노트/Code Composer Studio", "../page-ccs/page.html");

		this._Menu.addDataItem("/윈도우즈 프로그래밍",        "../page-WinUI3/page.html");
		this._Menu.addDataItem("/윈도우즈 프로그래밍/WinUI3", "../page-WinUI3/page.html");

		this._Menu.addDataItem("/C++"         , "../page-cpp-doc/page.html");
		this._Menu.addDataItem("/C++/문서"     , "../page-cpp-doc/page.html");
		this._Menu.addDataItem("/C++/코드 조각" , "../page-cpp-code-snippet/page.html");
	}
	
	initializeMenu() {
		this._Menu.makeTreeItems();

		this._Menu.getRootItem().setExpanded(true);
		
		for (let child of this._Menu.getRootItem().getChildren()) {
			child.setExpanded(true);
		}
		
		this._Menu.render("mainMenu");
	}
}





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
var _MainMenu = null;





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function initializeMainMenu() {
	_MainMenu = new MainMenu();
}
