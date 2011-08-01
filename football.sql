-- phpMyAdmin SQL Dump
-- version 3.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 28, 2011 at 01:02 AM
-- Server version: 5.1.44
-- PHP Version: 5.3.2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `football`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_ID` int(100) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) CHARACTER SET utf8 NOT NULL,
  `discription` text CHARACTER SET utf8 NOT NULL,
  `discr_short` varchar(30) CHARACTER SET utf8 NOT NULL,
  `color` varchar(50) CHARACTER SET utf8 NOT NULL,
  `size` varchar(30) CHARACTER SET utf8 NOT NULL,
  `label` varchar(100) CHARACTER SET utf8 NOT NULL,
  `person` varchar(20) CHARACTER SET utf8 NOT NULL,
  `image` varchar(200) CHARACTER SET utf8 NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `articlenumber` int(50) NOT NULL,
  `material` varchar(30) CHARACTER SET utf8 NOT NULL,
  `sole` varchar(40) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`product_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` VALUES(36, 'F50 adizero TRX SG', 'Adidas F50 adizero TRX, der Schuh von Lionel Messi, speziell f&#252;r High-Speed Fussball entwickelt. Die perfekte Balance zwischen Stabilit&#228;t und minimalem Gewicht (165g). - Das revolution&#228;re SPRINTSKIN Material bietet perfektes Ballgef&#252;hl bei weniger Gewicht - Neuer TPU Bottom Frame bietet optimale Entlastung und schont die Kontaktfl&#228;che zum Ball - Ausgestattet mit der Ultralight Einlegesohle und einem zus&#228;tzlichen Paar Comfort Einlegesohlen. - Neue TRAXION&#174; FG Aussensohle f&#252;r optimale Griffigkeit auf trockenen B&#246;den.', 'Adidas F50 adizero TRX SG', 'orange/weiss/schwarz ', '42 - 45 US', 'Adidas', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/adidas/Adidas-_F50_adizero_TRX_SG.jpg', 119.00, 30000, 'K&#228;nguruh-Leder', 'FG-Nocken');
INSERT INTO `products` VALUES(24, 'Predator X SG', 'Der bei Profis beliebte und viel gespielte Predator&#174; X X-TRX SG mit neuer POWERSPINE Technologie und neuartigem PREDATOR&#174; Element f&#252;r noch mehr Power, Pr&#228;zision und Kontrolle. In der Ausf&#252;hrung mit Stollen ist der geeignet f&#252;r nasse ode&#246;r tiefe B&#246;den. - TAURUS Leder f&#252;r nat&#252;rlichen Touch & Feel, geringere Abnutzung und wetterfeste Eigenschaften - OPTIFIT f&#252;r ultimative Passform, optimalen Ballkontakt und bestes Ballgef&#252;hl - Asymmetrisches Schn&#252;rsystem f&#252;r eine optimale Kontaktfl&#228;che zum Ball - Externe Fersenkappe f&#252;r hervorragende Stabilit&#228;t und Komfort - TRAXION&#174; SG Technologie f&#252;r optimale Griffigkeit auf tiefen B&#246;den.', 'Adidas Predator X SG', 'Predator gelb', '41 - 45 US', 'Adidas', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/adidas/Adidas_Predator_X_SG.jpg', 134.00, 30010, 'Leder / Synthesefaser', 'Stollen');
INSERT INTO `products` VALUES(23, 'F50 adizero Prime', 'Der brandneue Topschuh aus der F50-Serie heisst adiZero Prime und ist ein Leichtgewicht. Mit seinem minimalen Gewicht von 150 Gramm sind die adidas F50 adiZero Prime Fussballschuhe die Topleader auf dem Platz, was Geschwindigkeit, Beweglichkeit und Stabilit&#228;t angeht. Zahlreichen Weltklassespieler tragen die Prime in der Bundesliga und auch auf internationalen Pl&#228;tzen. Sie sitzen eng am Fuss und vermitteln perfekte Ballkontrolle und Schussgef&#252;hl.\r\nEinlagiges adiLITE TWIN-Synthetik-Obermaterial f&#252;r ein extrem geringes Gewicht und herausragendes Ballgef&#252;hl in jeder Situation.\r\nInnere TPU-St&#252;tzb&#228;nder sorgen f&#252;r erh&#246;hte Stabilit&#228;t und St&#252;tzung bei Seitw&#228;rtsbewegungen. ', 'Adidas F50 adizero Prime', 'Weiss / Radiant Pink / Cyan  ', '40 - 44 US', 'Adidas', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/adidas/Adidas_F50_adizero_Prime.jpg', 169.00, 30020, 'K-Leder', 'NG-Nocken');
INSERT INTO `products` VALUES(22, 'adiPure IV SL TRX FG', 'Der neue superleichte adiPURE IV SL TRX FG ist konzipiert f&#252;r h&#246;chste Anspr&#252;che auf dem Platz und &#252;berzeugt durch elegantes Design. Aussensohle mit externer Fersenkappe f&#252;r hervorragende Stabili&#228;t und Komfort. SL steht f&#252;r Super Light. Erreicht wird das durch die neue Sohle, die bereits von den F50 bekannt ist. Asymmetrisches Schn&#252;rsystem f&#252;r eine optimale Kontaktfl&#228;che zum Ball. Ein neu entwickeltes K-Leder reduziert erheblich das Gewicht f&#252;r den Schaft.', 'Adidas adiPure IV SL TRX FG', 'schwarz', '41 - 46 US', 'Adidas', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/adidas/Adidas_adiPure_IV_SL_TRX_FG.jpg', 189.00, 30030, 'K-Leder', 'NG-Nocken');
INSERT INTO `products` VALUES(21, 'World Cup', 'Der Adidas World Cup ist der beliebte Fussballschuh mit Stollen und K-Leder&#8218; der seit Jahrzehnten von Profis in der Bundesliga gespielt wird. Seine Robustheit und die tolle Qualit&#228;t machen den World Cup unverwechselbar. F&#252;r viele der beste Fussballschuh der Welt&#8218; wenn man einen Schuh mit Stollen sucht. Mit absolut fantastischem K&#228;nguruhleder ist er der Bruder des beliebten Copa Mundial&#8218; nur mit Stollen f&#252;r feuchte B&#246;den.', 'Adidas World Cup', 'schwarz', '38 - 42 US', 'Adidas', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/adidas/Adidas_World_Cup_90.jpg', 99.00, 30040, 'Leder', 'Stollen');
INSERT INTO `products` VALUES(26, 'Mercurial Vapor VII SG', 'Setze die Tradition der Geschwindigkeit mit dem Nike Mercurial Vapor VII SG M&#228;nner Fussballschuh fort. Der Vapor Schuh wurde f&#252;r ernstzunehmende Spieler entworfen und liefert ultimative federleichte H&#246;chstleistung und Traktion mit hervorragender Haftung. Eng anliegend und gleichzeitig flexibel - der Mercurial Vapor Schuh sitzt wie angegossen. Ultraleichtes Kunstleder passt sich an die Fussform an und verhindert Verrutschen des Fusses. Fersend&#228;mpfung sorgt f&#252;r ein besseres Komfortgef&#252;hl und verhindert ein Rutschen der Ferse.', 'Nike Mercurial Vapor VII SG', 'Lila/Weiss/Schwarz ', '38 - 42 US', 'Nike', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/nike/Nike_Mercurial_Vapor_VII_SG.jpg', 220.00, 40040, 'Teijin-Kunstleder ', 'Stollen');
INSERT INTO `products` VALUES(32, 'MERCURIAL VAPOR SUPERFLY III FG ', 'Der Nike Mercurial Vapor Superfly III FG M&#228;nner Fussballschuh wurde f&#252;r Elitespieler entworfen, mit Flywire-Technologie f&#252;r perfekte Passform und Nike SENSE Technologie f&#252;r Traktion mit hervorragender Haftung auf festen Oberfl&#228;chen.\r\nDer Mercurial Vapor Superfly passt wie ein Handschuh und ist dennoch flexibel. Ultraleichtes Kunstleder kombiniert mit sehr robustem und leichtem Flywire-Nylon gibt dem Fuss einen sicheren Halt. Fersend&#228;mpfung verbessert den Tragekomfort und verhindert ein Rutschen der Ferse.\r\n', 'NIKE MERCURIAL VAPOR SUPERFLY ', 'Weiss/Pink/Blau', '41 - 46 US', 'Nike', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/nike/NIKE_MERCURIAL_VAPOR_SUPERFLY_3_FG.jpg', 299.00, 40030, 'Ultraflat-Teijin-Kunstleder ', 'Firm-Ground-Stollen ');
INSERT INTO `products` VALUES(33, 'Air Zoom Total 90 Supremacy FG', 'Ein robuster und stabiler Fussballschuh f&#252;r h&#228;rtere Bodenverh&#228;ltnisse sowie Kunstrasen. Verbessertes Shotshield mit versetzter Schn&#252rung sorgen f&#252;r hervorragende Ballkontrolle und Treffsicherheit.', 'Nike Air Zoom Total 90 Suprema', 'Blau/Weiss', '40 - 44 US', 'Nike', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/nike/NIKE_Air_Zoom_Total_90_Supremacy_FG.jpg', 99.00, 40020, 'Synthetik', 'Nocke');
INSERT INTO `products` VALUES(34, 'Total90 Strike III AG', 'Du wirst das Spielfeld ganz unter deiner Kontrolle haben mit dem Nike Total90 Strike III AG M&#228;nner Fussballschuh, einem innovativen Design, das dir Traktion und unerl&#228;ssliche Ballkontrolle bietet. Die leichte Kunstrasen-Sohle verf&#252;gt &#252;ber Niedrigprofil- und Sekund&#228;rstollen f&#252;r verst&#228;rkte Perimeter-Traktion sowie Druckverteilungskissen in Vorfuss und Ferse f&#252;r ausgeglichenen Stollendruck, wenn du in Aktion trittst. Ausserdem verf&#252;gt der Schuh &#252;ber hohle Stollen und Fersenkissen f&#252;r erh&#246;hte Unterst&#252;tzung, eine zus&#228;tzliche Flexkerbe f&#252;r schnelle &#252;berg&#228;nge w&#228;hrend des Spiels und einen extrakleinen Grip f&#252;r verst&#228;rkten lateralen Halt. - Synthetikleder der Spitzenklasse f&#252;r leichten Tragekomfort.\r\nShot Shield bietet eine einheitliche Oberfl&#228;che f&#252;r Schusspr&#228;zision und Balldrehung. Vorgeformte EVA-Einlegesohle f&#252;r leichte Stossd&#228;mpfung und reduzierten Stollendruck. Artificial-Grass-Stollen (AG) f&#252;r das Spielen auf neuen Kunstrasen-Varianten.', 'Nike Total90 Strike III AG', 'Gr&#252;n/Schwarz/Rot', '41 - 45 US', 'Nike', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/nike/Nike_Total90_Strike_III_AG.jpg', 120.00, 40010, 'Synthetikleder', 'Artificial-Grass-Stollen ');
INSERT INTO `products` VALUES(35, 'Mercurial Vapor 5 FG', 'Aktualisiert f&#252;r ein leichteres, st&#228;rkeres und schnelleres Ballgef&#252;hl Der Nike Mercurial Vapor V FG M&#228;nner Fussballschuh bietet dir alle Geschwindigkeitsvorteile in einem geradezu federleichten, stromlinienf&#246;rmigen Design.', 'Nike Mercurial Vapor 5 FG', 'Rot/Silber/Lila', '42 - 45 US', 'Nike', 'male', 'http://weizenfeld.bplaced.net/ap/public_html/images/products/nike/NIKE_Mercurial-Vapor-V.jpg', 139.00, 40000, 'Teijin-Kunstleder', 'Direkt eingespritzte Fersenstollen');
