<?php


if(is_numeric ( $_GET["info"] ) )
{
    $articlenumber = $_GET['info'];
}
else
{
    $articlenumber = "32421";
    
  
}
             
       
       //$articlenumber = "32421";
     //$query = getSQLQuery($articlenumber);
      $query = "SELECT * FROM products  WHERE articlenumber = $articlenumber";
     // $result = mysql_query( $query , $db);

     //$link = mysql_connect('localhost', 'weizenfeld_lucky', 'luckyfish');
    $link = mysql_connect('localhost', 'luckyfish', 'fish');
    if (!$link) {
        die('keine Verbindung möglich: ' . mysql_error());
    }
    //$db_selected = mysql_select_db('weizenfeld_lucky', $link);
    $db_selected = mysql_select_db('theluckyfish', $link);

    if (!$db_selected) {
        die ('Kann Datenbank nicht benutzen : ' . mysql_error());
    }

    $result = mysql_query( $query , $link);
    if (!$result) {
        die ('Ungültige Abfrage:' . mysql_error());
    }

    while ($row = mysql_fetch_assoc($result)) {
        $table[] = $row;

    }

    echo json_encode($table);

    mysql_free_result($result);

    
 
       ?>