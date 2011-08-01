<?php

    include '../../hidden_docs/config.inc.php';
    
    // eine liste aller Dateien, die dem Muster entsprechen erstellen
    $models = glob( "../funcs/func.*.inc.php" );
    // die gefundenen Dateien einbinden
    foreach( $models as $filename )
{
    include $filename;
}
    
    // Datenbank Verbindung aufbauen
    $db = openDBConnection( DB_USER , DB_PASS , DATABASE );
    
  
    $keyword = mysql_real_escape_string((trim(htmlspecialchars($_GET["info"]))));
                 
    
    $query = "SELECT * FROM products  WHERE type LIKE '%$keyword%' OR discription LIKE '%$keyword%'";

        

       

    $result = mysql_query( $query , $db);
    
    if (!$result) {
        die ('Ungültige Abfrage:' . mysql_error());
    }
    
    while ($row = mysql_fetch_assoc($result)) {
           $table[] = $row;

    }

    echo json_encode($table);

    mysql_free_result($result);
?>