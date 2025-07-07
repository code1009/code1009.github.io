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
		this._Menu.addDataItem("/ccs"           , "./page.html");
		this._Menu.addDataItem("/ccs/기본설정"  , "./page.html?page=base-config");

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
