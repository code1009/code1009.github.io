/////////////////////////////////////////////////////////////////////////////
//===========================================================================
"use strict";





/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class MenuDataItem {

	#Path = "";
	#Urn = "";

	constructor(path, urn) {
		this.#Path = path;
		this.#Urn = urn;
	}

	getPath() {
		return this.#Path;
	}

	getUrn() {
		return this.#Urn;
	}
}

/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class MenuTreeItem {

	#Name = "";
	#Urn = "";
	#Children = [];
	#Expanded = false;;

	constructor(name) {
		this.#Name = name;
	}

	getName() {
		return this.#Name;
	}

	getUrn() {
		return this.#Urn;
	}

	getChildren() {
		return this.#Children;
	}

	getExpanded() {
		return this.#Expanded;
	}

	hasChildren() {
		return this.#Children.length > 0;
	}

	setExpanded(expanded) {
		this.#Expanded = expanded;
	}

	setUrn(urn) {
		this.#Urn = urn;
	}

	addChild(childName) {
		let child;
		child = this.getChild(childName);


		if (!child) {
			child = new MenuTreeItem(childName);
			this.#Children.push(child);
		}

		return child;
	}

	getChild(childName) {
		let child;

		for (let item of this.#Children) {
			if (item.getName() === childName) {
				child = item;
				break;
			}
		}

		return child;
	}
}

/////////////////////////////////////////////////////////////////////////////
//===========================================================================
class Menu {

	//--------------------------------------------------------------------------
	#RootItem = new MenuTreeItem("Root");
	#DataItems = [];

	//--------------------------------------------------------------------------
	constructor() {
	}

	//--------------------------------------------------------------------------
	getRootItem() {
		return this.#RootItem;
	}
	
	//--------------------------------------------------------------------------
	addDataItem(path, urn) {
		let item;
		item = new MenuDataItem(path, urn);
		this.#DataItems.push(item);
	}

	//--------------------------------------------------------------------------
	splitPathSegments(path) {	
		return path.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
	}

	makeTreeItems() {
		let parent;
		parent = this.#RootItem;


		let current;
		let pathItems = [];
		for (let dataItem of this.#DataItems) {
			pathItems = this.splitPathSegments(dataItem.getPath());

			current = parent;
			for (let pathItem of pathItems) {
				current = current.addChild(pathItem);
			}
			current.setUrn(dataItem.getUrn());
		}
	}

	render(elementId) {
		let menu = document.getElementById(elementId);
		if (!menu) {
			return;
		}

		menu.innerHTML = "";

		const dom = this.renderTreeItem(elementId, this.#RootItem);
		if (dom) {
			menu.appendChild(dom);
		}
	}

	renderTreeItem(elementId, item) {
		if (!item) {
			return null;
		}

		if (!item.getExpanded()) {
			return null;
		}

		if (!item.hasChildren()) {
			return null;
		}

		const ul = document.createElement("ul");
		for (let child of item.getChildren()) {
			const li = this.renderTreeChildItem(elementId, child);
			if (li) {
				ul.appendChild(li);
			}
		}
		return ul;
	};

	renderTreeChildItem(elementId, item) {
		const li = document.createElement("li");

		const urn = item.getUrn();
		const name = item.getName();

		const hasChildren = item.hasChildren();
		const isExpanded = item.getExpanded();

		const fileSvgIcon =
			`
			<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#6060f0">
				<path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z">
				</path>
			</svg>
			`;

		const folderSvgIcon =
			`
			<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#6060f0">
				<path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z">
				</path>
			</svg>
			`;

		const folderOpenSvgIcon =
			`
			<svg viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#6060f0">
				<path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z">
				</path>
			</svg>
			`;


		//const fileIcon = "📄 ";
		//const folderIcon = "📁 ";
		//const folderOpenIcon = "📂 ";


		if (hasChildren) {
			const expandIcon = document.createElement("span");
			expandIcon.style.cursor = "pointer";
			//expandIcon.textContent = isExpanded ? folderOpenIcon : folderIcon;
			expandIcon.innerHTML = isExpanded ? folderOpenSvgIcon : folderSvgIcon;

			expandIcon.onclick = (e) => {
				e.stopPropagation();
				item.setExpanded(!item.getExpanded());
				this.render(elementId);
			};
			li.appendChild(expandIcon);
		}
		else {
			const expandIcon = document.createElement("span");
			//expandIcon.textContent = fileIcon;
			expandIcon.innerHTML = fileSvgIcon;

			li.appendChild(expandIcon);
		}

		if (urn) {
			const a = document.createElement("a");
			a.href = urn;
			a.textContent = name;
			li.appendChild(a);
		} else {
			const span = document.createElement("span");
			span.textContent = name;
			li.appendChild(span);
		}

		const childUl = this.renderTreeItem(elementId, item);
		if (childUl) {
			li.appendChild(childUl);
		}

		return li;
	}
}
