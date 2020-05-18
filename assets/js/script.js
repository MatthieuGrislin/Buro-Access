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
//onclick affiche l-item dans le panier, recupere la valeur quantitée et la rentre dans la quantiter du panier
  function addBasket(monId, quantityValue, quantityTarget, resultTarget, unitPrice) {
    document.getElementById(monId).style.display = 'block';
    var getQuantity = document.getElementById(quantityValue).value; //quantityValue = quantitée sur l'index
    document.getElementById(quantityTarget).value = getQuantity; //quantityTarget = champ quantiée dans la modal
    document.getElementById(resultTarget).innerHTML = document.getElementById(quantityTarget).value * unitPrice; //resultTarget = span qui contient le prix dans la modal, unitPrice = prix unitaire de l'item
  }
  //onkeyUp recupere la quantitée et la multiplie par le prix unitaire avant de l'écrire dans la span priceID
  function totalPrice(myId, priceID, oneItemPrice, amountTotal) {
    var quantity = document.getElementById(myId).value ; // myId = input quantity de la modal
    var unitPrice =  oneItemPrice; //oneItemPrice = prix unitaire d'un item
    var result = quantity * unitPrice;
    document.getElementById(priceID).innerHTML = result;  //price ID = span prix dans la modal
    //test pour additioner tout les prix
    // var balance = document.getElementsByClassName('amount');
    // for (item = 0; item < balance.length; item++ ) {
    //   var balance = balance[item].value + balance;
    // }
    // document.getElementById(amountTotal).innerHTML = balance;
  }  
  // onclick supprime l'item selectionner
  function deleteItem(myId) {
    document.getElementById(myId).style.display = 'none';  //myId =  l'id de l'item
  }
  // onclick vide le panier
  function deleteAll() {
    var itemList = document.getElementsByClassName('modal-item');
    for (item = 0; item < itemList.length; item++ ) {
      itemList[item].style.display = 'none';
    }
  }
  function changeBorder(element) {
    element.style.border = 'solid green 3px';
  }