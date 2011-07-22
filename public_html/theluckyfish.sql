-- phpMyAdmin SQL Dump
-- version 3.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 22, 2011 at 01:02 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `theluckyfish`
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
  PRIMARY KEY (`product_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` VALUES(1, 'Tiger of Sweden Tire Hose', 'Edle gewaschene Chino in einem super warmen Braunton aus der aktuellen Winterkollektion von Tiger of Sweden. Durch den komfortablen Fit und das weiche Baumwollmaterial wird diese Hose ganz schnell zum Lieblingsteil. Toll mit Hemden oder schmalen Pullovern in Braunönen. Super edel auch mit Lederjacken im Fliegerstyle.', 'Chino Hose', 'blue, black', 'L , XL', 'Tiger of Sweden', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/st-0434k.jpg', 140.00, 12345);
INSERT INTO `products` VALUES(2, 'Girbaud Schal', 'Mit dem Girbaud Schal wird jedes Outfit zum Highlight für den Mann.\r\nDas bunte Muster mit den Farben rot, blau, anthrazit und weiß schenkt jedem unifarbenen Outfit trendige Akzente.\r\nLocker geknotet passt der Girbaud Schal über Shirt oder Pullover, zum Mantel, zur Lederjacke oder Anzug. Die Girbaud Schals sind das modische Accessoire für den Mann.', 'Girbaud Schal', 'yellow , red', 'normal', 'Girbaud', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/mil-1427k.jpg', 60.90, 21332);
INSERT INTO `products` VALUES(7, 'Girbaud Hemd Lunajerse', 'Das Girbaud Hemd Lunajerse liegt mit seinem modischen, schmalen Schnitt und der Farbe blau aktuell voll im Trend. Es ist sehr angenehm zu tragen und umschmeichelt die Figur des Trägers. Auf dem Rücken ist das Logo von Girbaud in einer hochwertigen Stickerei aufgearbeitet und die Verarbeitung des Girbaud Hemd Lunajerse ist hochwertig und elegant. Die tolle Passform und der super modische Schnitt machen dieses tolle Girbaud Hemd Lunajerse zum Hingucker 2011 - ein trendiges Muss in jedem Kleiderschrank. ', 'Lunajerse ', 'grey', 'L', 'Levis', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/mi-3748k.jpg', 157.00, 32421);
INSERT INTO `products` VALUES(6, 'Badu black Schal', 'modisches Dreieckstuch im Karodesign\r\n• 	softe Baumwollmischung\r\n• 	offene Kantenverarbeitung\r\n• 	Maße ca.170x80cm\r\n• 	60% Baumwolle 40% Polyester\r\n• 	Farbe: black', 'CHARO Schal', 'red, yellow, green , grey, blue', 'normal, long', 'Badu', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/3her-0354k.jpg', 99.00, 84737);
INSERT INTO `products` VALUES(8, 'Murphy&Nye Mokassin', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Mokassin', 'navy', '40 - 45 US', 'Murphy&Nye', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/mn-0320k.jpg', 155.90, 36253);
INSERT INTO `products` VALUES(9, 'Strellson Poloshirt ', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Poloshirt Vice', 'green', 'M - XL', 'Strellson', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/st-0795k.jpg', 54.50, 37447);
INSERT INTO `products` VALUES(10, 'Hose', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'FitIN Hose', 'blue, black', 'L , XL', 'Levis', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/sst-0239k.jpg', 79.90, 36255);
INSERT INTO `products` VALUES(11, 'Kaporal Jacke', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Jacke Kapo', 'pink-schwarz', 'S-M', 'Kaporal', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/kpo-0131k.jpg', 29.90, 43332);
INSERT INTO `products` VALUES(12, 'Killah Stiefelette Schuhe', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Killah Stiefelette', 'brown', '38 - 42', 'Killah ', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/kb-0171k.jpg', 89.90, 21336);
INSERT INTO `products` VALUES(13, 'VSCT T-Shirt', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'VSCT Summer', 'grey', 'S-M', 'VSCT ', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/vs-1284k.jpg', 44.90, 43344);
INSERT INTO `products` VALUES(14, 'Rock Summy', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Rock Sammy', 'blue, black, red', '26 - 32', 'Replay', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/re-0543k.jpg', 99.00, 55552);
INSERT INTO `products` VALUES(15, 'Rock', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Sammy Style', 'black , white , blue', '26 -32', 'Replay', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/4di-1329k.jpg', 39.90, 55554);
INSERT INTO `products` VALUES(16, 'Rock', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Rock Dresser', 'blue , black', '26 -32', 'Joop', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/1vm-1857k.jpg', 65.90, 55555);
INSERT INTO `products` VALUES(17, 'Hose Jeans', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Jeans LTB', 'blue, black', '32-34 / 33-36 / 34-36', 'LTB Davis', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/eg-1824k.jpg', 149.90, 65557);
INSERT INTO `products` VALUES(18, 'Hose Jeans', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Energy 5', 'blue, black', '32-34 / 33-36 / 34-36', 'Energy', 'male', 'http://media.dress-for-less.com/images/products/138x184_k/ltb-0063k.jpg', 120.00, 65587);
INSERT INTO `products` VALUES(19, 'Schal Tuch', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Samaya TWO', 'green', 'normal', 'Samaya', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/smy-0209k.jpg', 29.90, 34857);
INSERT INTO `products` VALUES(20, 'Schal Tuch', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat', 'Samaya TWO', 'black', 'normal, long', 'Samaya', 'female', 'http://media.dress-for-less.com/images/products/138x184_k/smy-0199k.jpg', 14.90, 34856);
