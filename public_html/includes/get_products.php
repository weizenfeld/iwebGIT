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
    
  
    $wert = mysql_real_escape_string((trim(htmlspecialchars($_GET["info"]))));
    
    $label = array(array("nike", "adidas"), array("new"), array("slide"));
             

    if (in_array($_GET['info'],$label[0]))
    {
         $query = 'SELECT * FROM products WHERE label = "' . $_GET['info']. '"';
    }
    
    if ( $wert == 'new'){
        
        $query = 'SELECT * FROM products ORDER BY `product_ID` DESC LIMIT 0 , 3;';  
    }
    
    if ( $wert == 'slide'){
        
         $query = 'SELECT * FROM products ORDER BY RAND() LIMIT 0 , 8';
    }

        
//        $query = 'select * from products ';
//        if(in_array($_GET['info'],$label[0])) {
//        $query .= 'WHERE label = "' . $_GET['info']. '"'; 
//        }if (in_array($_GET['info'],$label[2])){
//        $query .= 'ORDER BY RAND() LIMIT 0 , 8';
//        }
//        if (in_array($_GET['info'],$label[1])){
//        $query .= 'ORDER BY `product_ID` DESC LIMIT 0 , 3';
//        } 
    
    
    

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