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
		//this._Menu.addDataItem("/예시" , "../0000.example/page.html");
		//this._Menu.addDataItem("/틀"   , "../0000.template/page.html");
		this._Menu.addDataItem("/셈말짓기"                                     , "../셈말짓기/page.html");
		this._Menu.addDataItem("/윈도우개발/윈도우 API utf8 설정"              , "../윈도우 API utf8 설정/page.html");      
		this._Menu.addDataItem("/윈도우개발/WinUI3 vcxprj 설정"                , "../WinUI3 vcxprj 설정/page.html");
		this._Menu.addDataItem("/윈도우개발/vld"                               , "../vld/page.html");
		this._Menu.addDataItem("/윈도우개발/vcpkg"                             , "../vcpkg/page.html");           
		this._Menu.addDataItem("/윈도우개발/nuget"                             , "../nuget/page.html");         
		this._Menu.addDataItem("/윈도우개발/Visual Studio Plugin"              , "../Visual Studio Plugin/page.html");         
		this._Menu.addDataItem("/윈도우개발/Visual Studio C++ 빌드설정"        , "../Visual Studio C++ 빌드설정/page.html");
		this._Menu.addDataItem("/윈도우개발/Visual Studio 기본설정"            , "../Visual Studio 기본설정/page.html");
	}
	
	initializeMenu() {
		this._Menu.makeTreeItems();

		this._Menu.getRootItem().setExpanded(true);
		/*
		for (let child of this._Menu.getRootItem().getChildren()) {
			child.setExpanded(true);
		}
		*/
		
		this._Menu.render("mainMenu");
	}
}





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
var _MainMenu = null;





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function mainMenuInitialize() {
	_MainMenu = new MainMenu();
}
