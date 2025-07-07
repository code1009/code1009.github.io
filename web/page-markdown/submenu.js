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
		this._Menu.addDataItem("/markdown"         , "./page.html?page=page1");
		this._Menu.addDataItem("/markdown/1.제목"  , "./page.html?page=page1");
		this._Menu.addDataItem("/markdown/2.인용"  , "./page.html?page=page2");
		this._Menu.addDataItem("/markdown/3.목록"  , "./page.html?page=page3");
		this._Menu.addDataItem("/markdown/4.코드"  , "./page.html?page=page4");
		this._Menu.addDataItem("/markdown/5.수평선", "./page.html?page=page5");
		this._Menu.addDataItem("/markdown/6.링크"  , "./page.html?page=page6");
		this._Menu.addDataItem("/markdown/7.강조"  , "./page.html?page=page7");
		this._Menu.addDataItem("/markdown/8.그림"  , "./page.html?page=page8");
		this._Menu.addDataItem("/markdown/9.줄바꿈", "./page.html?page=page9");

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
