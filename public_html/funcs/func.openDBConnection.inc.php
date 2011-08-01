<?php

/**
 *
 * Stellt eine Datenbankverbindung her und gibt den Link Identifier zurück.
 *
 * @param string $server Servername
 * @param string $user Benutzername zur Datenbankverbindung
 * @param string $pass Passwort zur Datenbankverbindung
 * @param string $dbname Der Name der Dantenbank
 * @return link_id MySQL Verbindungs ID
 */
function openDBConnection( $user , $pass , $dbname , $server = "localhost" )
{
    $db = mysql_connect( $server , $user , $pass );

    mysql_select_db( $dbname );

    return $db;
}

?>

