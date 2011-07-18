<?php

        $link = mysql_connect('localhost', 'weizenfeld_lucky', 'luckyfish');
        //$link = mysql_connect('localhost', 'luckyfish', 'fish');
    if (!$link) {
        die('keine Verbindung möglich: ' . mysql_error());
    }

    $db_selected = mysql_select_db('weizenfeld_lucky', $link);
    //$db_selected = mysql_select_db('theluckyfish', $link);

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

   // echo "<pre>";
   //    var_dump($table);
    echo json_encode($tables);

    mysql_free_result($result);


      
       ?>


