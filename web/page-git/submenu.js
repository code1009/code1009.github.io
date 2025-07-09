/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class SubMenu {

	_Menu = new Menu();

	constructor() {
		this.registerMenuDataItem();
		this.initializeMenu();
	}

	registerMenuDataItem() {
		this._Menu.addDataItem("/git"                    , "./page.html?page=page1");
		this._Menu.addDataItem("/git/설명서"             , "./page.html?page=page1");
		this._Menu.addDataItem("/git/명령어"             , "./page.html?page=page2");
		this._Menu.addDataItem("/git/rebase"             , "./page.html?page=page3");
		this._Menu.addDataItem("/git/branch 이름 규칙"   , "./page.html?page=page4");

		this._Menu.getRootItem().setExpanded(true);
		this._Menu.makeTreeItems();
		this._Menu.render("subMenu");
	}

	initializeMenu() {
		this._Menu.makeTreeItems();

		this._Menu.getRootItem().setExpanded(true);

		for (let child of this._Menu.getRootItem().getChildren()) {
			child.setExpanded(true);
		}

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
