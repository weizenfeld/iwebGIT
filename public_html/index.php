<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<link href="pics/homescreen.gif" rel="apple-touch-icon" />
<link href="pics/startup.png" rel="apple-touch-startup-image" />
<meta content="minimum-scale=1.0, width=device-width, maximum-scale=0.6667, user-scalable=no" name="viewport" />
<link href="css/stylesheet.css" rel="stylesheet" media="screen" type="text/css" />
<script type="text/javascript" src="javascript/jquery-1.6.2.min.js"></script>
<script src="javascript/developer-functions.js" type="text/javascript"></script>
<script type="text/javascript" src="javascript/jquery.tinycarousel.min.js"></script>
<title>the lucky fish</title>
<meta content="keyword1,keyword2,keyword3" name="keywords" />
<meta content="Description of your page" name="description" />


<script type="text/javascript">
		function slide(){
			$('#slider1').tinycarousel({ display:1, pager: true, interval: true, controls: true });}

		window.setTimeout("slide()", 3100);
</script>


</head>

    <body>
        
       <!-- Hier müssen alle Views rein, also nur eine Index.php Datei! -->

        <div id="topbar" class="transparent">
            <div id="title">the lucky fish
                </div>
            </div>

        <div id="tributton" >
            <div class="links">
                <a href="index.php">Home</a>
                <a href="search.php">Search</a>
                <a href="contact.php">Contact</a>
                </div>
            </div>
        <div id="doublead">
                <a href="index.php" style="background-image: url('images/article_women.jpg')"></a>
                <a href="index.php" style="background-image: url('images/article_men.jpg')"></a>
            </div>

        <div id="hidepage">
            <div class="centerloader">
                 <img src="images/loader.gif" alt="brief description"/>
                </div>
            </div>

        <div id="content">

            <ul class="pageitem">

            <div id="slider1">
                    <a class="buttons prev" href="#">left</a>
                    <div class="viewport">
                            <ul id="articleimages" class="overview">

                            </ul>
                    </div>
                    <a class="buttons next" href="#">right</a>
            </div>

            </ul>

            <ul class="pageitem">
                      <li class="textbox">
                          <span class="header">New Products:</span>
                      </li>
                      <div id="angebot"></div>
            </ul>

            </div>

    </body>

    <div id="footer">
        <div class="center" >
            <img src="pics/fish_nacht.png" alt="brief description"/>
                 </div>
                    <a class="noeffect" href="#">Impressum</a>
         </div>

</html>
