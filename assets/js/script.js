//affiche la categorie en fonction de celle selectionner
function HideAndShow(selectedIndex) {
  var menu = document.getElementsByTagName('Section');
  for (menuIndex = 0; menuIndex < menu.length; menuIndex++) {
    if (menuIndex == selectedIndex) {
      menu[menuIndex].style.display = 'block';
    } else {
      menu[menuIndex].style.display = 'none';
    }
  }
}
//onclick affiche l-item dans le panier, recupere la valeur quantitée et la rentre dans la quantiter du panier
function addBasket(monId, quantityValue, quantityTarget, resultTarget, unitPrice) {
  if (document.getElementById(monId).style.display == 'block') {
    alert("L'article est déja dans la panier")
  }
  document.getElementById(monId).style.display = 'block';
  var getQuantity = document.getElementById(quantityValue).value; //quantityValue = quantitée sur l'index
  document.getElementById(quantityTarget).value = getQuantity; //quantityTarget = champ quantiée dans la modal
  document.getElementById(resultTarget).innerHTML = (document.getElementById(quantityTarget).value * unitPrice).toFixed(2); //resultTarget = span qui contient le prix dans la modal, unitPrice = prix unitaire de l'item
  //affiche le total des article selectioner dans le panier
  var amount1 = Number(document.getElementById('claireFontainePrice').innerText),
    amount2 = Number(document.getElementById('rametteOfficeDepotPrice').innerText),
    amount3 = Number(document.getElementById('cartonOfficeDepotPrice').innerText),
    amount4 = Number(document.getElementById('ReyProDesignPrice').innerText),
    amount5 = Number(document.getElementById('classeursPrice').innerText),
    amount6 = Number(document.getElementById('archiveBoxPrice').innerText),
    amount7 = Number(document.getElementById('folderPrice').innerText),
    amount8 = Number(document.getElementById('sleevePrice').innerText),
    amount9 = Number(document.getElementById('4ColorFluoPrice').innerText),
    amount10 = Number(document.getElementById('4ColorPrice').innerText),
    amount11 = Number(document.getElementById('styloPaperMatePrice').innerText),
    amount12 = Number(document.getElementById('styloBicPrice').innerText),
    amount13 = Number(document.getElementById('scotchPrice').innerText),
    amount14 = Number(document.getElementById('staplerPrice').innerText),
    amount15 = Number(document.getElementById('cutterPrice').innerText),
    amount16 = Number(document.getElementById('paperClipsPrice').innerText);
  var balance = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 + amount9 + amount10 + amount11 + amount12 + amount13 + amount14 + amount15 + amount16;
  document.getElementById('amountTotal').innerHTML = balance.toFixed(2);
}
//onkeyUp recupere la quantitée et la multiplie par le prix unitaire avant de l'écrire dans la span priceID
function totalPrice(myId, priceID, oneItemPrice) {
  var quantity = document.getElementById(myId).value; // myId = input quantity de la modal
  var unitPrice = oneItemPrice; //oneItemPrice = prix unitaire d'un item
  var result = quantity * unitPrice;
  document.getElementById(priceID).innerHTML = result.toFixed(2);  //price ID = span prix dans la modal
  //additioner tout les prix pour l'ecrire dans le prix total
  var amount1 = Number(document.getElementById('claireFontainePrice').innerText),
    amount2 = Number(document.getElementById('rametteOfficeDepotPrice').innerText),
    amount3 = Number(document.getElementById('cartonOfficeDepotPrice').innerText),
    amount4 = Number(document.getElementById('ReyProDesignPrice').innerText),
    amount5 = Number(document.getElementById('classeursPrice').innerText),
    amount6 = Number(document.getElementById('archiveBoxPrice').innerText),
    amount7 = Number(document.getElementById('folderPrice').innerText),
    amount8 = Number(document.getElementById('sleevePrice').innerText),
    amount9 = Number(document.getElementById('4ColorFluoPrice').innerText),
    amount10 = Number(document.getElementById('4ColorPrice').innerText),
    amount11 = Number(document.getElementById('styloPaperMatePrice').innerText),
    amount12 = Number(document.getElementById('styloBicPrice').innerText),
    amount13 = Number(document.getElementById('scotchPrice').innerText),
    amount14 = Number(document.getElementById('staplerPrice').innerText),
    amount15 = Number(document.getElementById('cutterPrice').innerText),
    amount16 = Number(document.getElementById('paperClipsPrice').innerText);
  var balance = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 + amount9 + amount10 + amount11 + amount12 + amount13 + amount14 + amount15 + amount16;
  document.getElementById('amountTotal').innerHTML = balance.toFixed(2);
}
// onclick supprime l'item selectionner
function deleteItem(myId, amountId) {
  document.getElementById(myId).style.display = 'none';  //myId =  l'id de l'item
  //soustrait le montant de l'aticle supprimer et affiche le total
  var amount1 = Number(document.getElementById('claireFontainePrice').innerText),
    amount2 = Number(document.getElementById('rametteOfficeDepotPrice').innerText),
    amount3 = Number(document.getElementById('cartonOfficeDepotPrice').innerText),
    amount4 = Number(document.getElementById('ReyProDesignPrice').innerText),
    amount5 = Number(document.getElementById('classeursPrice').innerText),
    amount6 = Number(document.getElementById('archiveBoxPrice').innerText),
    amount7 = Number(document.getElementById('folderPrice').innerText),
    amount8 = Number(document.getElementById('sleevePrice').innerText),
    amount9 = Number(document.getElementById('4ColorFluoPrice').innerText),
    amount10 = Number(document.getElementById('4ColorPrice').innerText),
    amount11 = Number(document.getElementById('styloPaperMatePrice').innerText),
    amount12 = Number(document.getElementById('styloBicPrice').innerText),
    amount13 = Number(document.getElementById('scotchPrice').innerText),
    amount14 = Number(document.getElementById('staplerPrice').innerText),
    amount15 = Number(document.getElementById('cutterPrice').innerText),
    amount16 = Number(document.getElementById('paperClipsPrice').innerText);
  var balance = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 + amount9 + amount10 + amount11 + amount12 + amount13 + amount14 + amount15 + amount16;
  var numberSuppr = document.getElementById(amountId).innerText;
  balance = balance - numberSuppr;
  document.getElementById('amountTotal').innerHTML = balance.toFixed(2);
}
// onclick vide le panier
function deleteAll() {
  var itemList = document.getElementsByClassName('modal-item');
  for (item = 0; item < itemList.length; item++) {
    itemList[item].style.display = 'none';
  }
  balance = 0;
  document.getElementById('amountTotal').innerHTML = balance;
}
function changeBorder(element) {
  element.style.border = 'solid green 3px';
}