<?php


    $user = "luckyfish"; 
    $pass = "fish"; 
    $dbname = "theluckyfish"; 
    $server = "localhost";

    
//  $user = "weizenfeld_lucky"; 
//  $pass = "luckyfish"; 
//  $dbname = "weizenfeld_lucky"; 
//  $server = "localhost";
//  mysql_connect("DBSERVER", "DBUSERNAME", "DBPASSWORD"); weitere alternative


if(is_numeric ( $_GET["info"] ) )
{
    $articlenumber = $_GET['info'];
}
else
{
    $articlenumber = "32421";
}            
       
    $query = "SELECT * FROM products  WHERE articlenumber = $articlenumber";

    $link = mysql_connect($server, $user, $pass);
    if (!$link) {
        die('keine Verbindung möglich: ' . mysql_error());
    }
    $db_selected = mysql_select_db($dbname, $link);

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