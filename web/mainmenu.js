/////////////////////////////////////////////////////////////////////////////
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
		//this._Menu.addDataItem("/틀"   , "../template/page.html");

		this._Menu.addDataItem("/셈말짓기"                      , "../home-셈말짓기/page.html");
		this._Menu.addDataItem("/개발 노트/github"              , "../page-github/page.html");
		this._Menu.addDataItem("/개발 노트/git"                 , "../page-git/page.html");
		this._Menu.addDataItem("/개발 노트/markdown"            , "../page-markdown/page.html");
		this._Menu.addDataItem("/개발 노트/오픈소스 라이브러리" , "../page-open-source-lib/page.html");
		this._Menu.addDataItem("/개발 노트/Visual Studio"       , "../page-vs/page.html");
		this._Menu.addDataItem("/개발 노트/WinUI3"              , "../page-WinUI3/page.html");
		this._Menu.addDataItem("/개발 노트/Code Composer Studio", "../page-ccs/page.html");
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
