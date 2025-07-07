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
		//this._Menu.addDataItem("/틀"   , "../template-markdown/page.html");

		this._Menu.addDataItem("/셈말짓기"                                     , "../home-셈말짓기/page.html");
		this._Menu.addDataItem("/윈도우개발/윈도우 API utf8 설정"              , "../page-윈도우 API utf8 설정/page.html");      
		this._Menu.addDataItem("/윈도우개발/WinUI3 vcxprj 설정"                , "../page-WinUI3 vcxprj 설정/page.html");
		this._Menu.addDataItem("/윈도우개발/vld"                               , "../page-vld/page.html");
		this._Menu.addDataItem("/윈도우개발/vcpkg"                             , "../page-vcpkg/page.html");           
		this._Menu.addDataItem("/윈도우개발/nuget"                             , "../page-nuget/page.html");         
		this._Menu.addDataItem("/윈도우개발/Visual Studio Plugin"              , "../page-Visual Studio Plugin/page.html");         
		this._Menu.addDataItem("/윈도우개발/Visual Studio C++ 빌드설정"        , "../page-Visual Studio C++ 빌드설정/page.html");
		this._Menu.addDataItem("/윈도우개발/Visual Studio 기본설정"            , "../page-Visual Studio 기본설정/page.html");
		this._Menu.addDataItem("/개발/git"                                     , "../page-git/page.html");
		this._Menu.addDataItem("/개발/markdown"                                , "../page-markdown/page.html");
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
