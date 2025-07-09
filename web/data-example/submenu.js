/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class SubMenu {

	_Menu = new Menu();

	constructor() {
		this._Menu.addDataItem("/home", "./home.html");
		this._Menu.addDataItem("/about", "./about.html");
		this._Menu.addDataItem("/contents/page1", "./page1.html");
		this._Menu.addDataItem("/contents/page2", "./page2.html");
		this._Menu.addDataItem("/contents/page3", "./page3.html");
		this._Menu.addDataItem("/contents/page3/조금은 길어보이는 제목입니다.", "./page3.html");

		this._Menu.getRootItem().setExpanded(true);
		this._Menu.makeTreeItems();
		this._Menu.render("subMenu");
	}
}





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
var _SubMenu = null;





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
function initializeSubMenu() {
	_SubMenu = new SubMenu();
}
