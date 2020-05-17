function HideAndShow(selectedIndex) {
    var menu = document.getElementsByTagName('Section');
    for(menuIndex = 0; menuIndex < menu.length; menuIndex++) {
      if (menuIndex == selectedIndex) {
        menu[menuIndex].style.display = 'block';
      }else {
        menu[menuIndex].style.display = 'none';
      }
    }
  }