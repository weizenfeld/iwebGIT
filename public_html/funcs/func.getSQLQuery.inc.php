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
function getSQLQuery($articlenumber )
{

 $query = "SELECT * FROM products  WHERE articlenumber = $articlenumber";

 return $query;

}

?>
