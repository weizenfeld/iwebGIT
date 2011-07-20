

function DivEinAusblenden(divName){
 //Gibt es das Objekt mit dem Namen der in divName übergeben wurde?
 if (document.getElementById(divName)) {
  /*"Sichtbarkeit" des Divs umschalten. 
  Wenn es sichtbar war, unsichtbar machen und umgedreht.*/
  document.getElementById(divName).style.display = 
   (document.getElementById(divName).style.display == 'none') ? 'inline' : 'none';
 }
}



