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
		this._Menu.addDataItem("/VisualStudio"         , "./page.html?page=plugin");
		this._Menu.addDataItem("/VisualStudio/plugin"  , "./page.html?page=plugin");
		this._Menu.addDataItem("/VisualStudio/nuget"  , "./page.html?page=nuget");
		this._Menu.addDataItem("/VisualStudio/vcpkg"  , "./page.html?page=vcpkg");
		this._Menu.addDataItem("/VisualStudio/기본 설정"  , "./page.html?page=base-config");
		this._Menu.addDataItem("/VisualStudio/C++ 빌드 설정"  , "./page.html?page=cpp-build-config");

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
