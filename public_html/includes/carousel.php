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

        $link = mysql_connect($server, $user, $pass);
    if (!$link) {
        die('keine Verbindung möglich: ' . mysql_error());
    }

    //$db_selected = mysql_select_db('weizenfeld_lucky', $link);
    $db_selected = mysql_select_db($dbname, $link);

    if (!$db_selected) {
        die ('Kann Datenbank nicht benutzen : ' . mysql_error());
    }

    $result = mysql_query('SELECT * FROM products ORDER BY RAND() LIMIT 0 , 8' );
    if (!$result) {
        die ('Ungültige Abfrage:' . mysql_error());
    }

    while ($row = mysql_fetch_assoc($result)) {
        $tables[] = $row;

    }

    echo json_encode($tables);

    mysql_free_result($result);

?>