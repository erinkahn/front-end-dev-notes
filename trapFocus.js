// trap focus  (when navigating a site using the tab key)



const handleFocus = (event) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {   // if the target does not contain the related target, then change the focus to a certain element
			menuBtnRef.current.focus();   // set the focus to the menu button to keep the focus inside its container
		}
};
