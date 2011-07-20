
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 
    <head>
        <title>Div Container EIN/AUSBLENDEN</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <script src="javascript/divcontainer.js" type="text/javascript"></script>
        <link href="css/stylesheet.css" rel="stylesheet" media="screen" type="text/css" />
        <script type="text/javascript" src="javascript/jquery-1.6.2.min.js"></script> 
        <script type="text/javascript" src="javascript/jquery.tinycarousel.min.js"></script>
        <script src="javascript/developer-functions.js" type="text/javascript"></script>
        <script src="javascript/getarticleinfos.js" type="text/javascript"></script> 
 
 
 
<script type="text/javascript">
    
    function DivAusblenden(divName){
    
   if (document.getElementById(divName)) {
   document.getElementById(divName).style.display = 'none';
 }
}
            
</script>
 
<script type="text/javascript">
    
    function DivEinblenden(divName){
    if (document.getElementById(divName)) {
    document.getElementById(divName).style.display = 'inline';
 }
}
            
</script>
 
<script type="text/javascript">
     function slide(){
     $('#slider1').tinycarousel({ display:1, pager: true, interval: true, controls: true });}
     window.setTimeout("slide()", 3100);
</script>
 
    </head>
    <body>
 
 
 
        <div id="topbar" class="transparent">
            <div id="title">the lucky fish
                </div>
            </div>
        <div id="tributton" >
            <div class="links">
                <a href="#"  onclick="javascript:DivEinblenden('divName');javascript:DivAusblenden('search');javascript:DivAusblenden('impressum'); javascript:DivAusblenden('contakte');                                    ">Home</a>
                <a href="#"  onclick="javascript:DivAusblenden('divName');javascript:DivAusblenden('search');javascript:DivEinblenden('impressum'); javascript:DivAusblenden('contakte'); javascript:DivAusblenden('azeige');">Search</a>
                <a href="#"  onclick="javascript:DivAusblenden('divName');javascript:DivAusblenden('search');javascript:DivAusblenden('impressum'); javascript:DivEinblenden('contakte'); javascript:DivAusblenden('azeige');">Contact</a>
                </div>
            </div>
        <div id="doublead">
                <a href="index.php" style="background-image: url('images/article_women.jpg')"></a>
                <a href="index.php" style="background-image: url('images/article_men.jpg')"></a>
            </div>
 
 
 
 
        
        <div id="divName" style="display:inline;">
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
    </div>
        
        
        <div id="search" style="display:none;">
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
                          <span class="header">Naskdjaskdjk:</span>
                      </li>
                      <div id="angebot"></div>
                     
            </ul>
 
            </div>
    </div>
               
    <div id="impressum" style="display:none;">
        <div id="content" style="background-color: green">
 
 
     </div>
        
    </div> 
        
        <div id="contakte" style="display: none;">  
    <div id="content">
	<span class="graytitle">Contact the lucky fish</span>
	<ul class="pageitem">
		<li class="menu">
		<a class="noeffect" href="mailto:lucky@fish.com?&amp;subject=the lucky fish &amp;body=Ihr anliegen an uns :">
		<img alt="mail" src="thumbs/mail.png" /><span class="name">Mail</span><span class="arrow"></span></a></li>
		<li class="menu"><a class="noeffect" href="sms:12125551212">
		<img alt="sms" src="thumbs/messages.png" /><span class="name">SMS</span><span class="comment">iPhone
		Only</span><span class="arrow"></span></a></li>
		<li class="menu"><a class="noeffect" href="tel:123434">
		<img alt="telephone" src="thumbs/telephone.png" /><span class="name">Telephone/Contact</span><span class="arrow"></span></a></li>
		<li class="menu">
		<a class="noeffect" href="http://maps.google.com/maps/place?cid=18061116676978465301&q=Ostertorsteinweg+31-33,+28203,+Bremen,+Deutschland&hl=en&cd=2&cad=src:pplink&ei=-tJ3TYfZCsudsAa5g7juBg">
		<img alt="google maps" src="thumbs/maps.png" /><span class="name">Google
		Maps</span><span class="arrow"></span></a></li>
	</ul>
     </div>  
        </div>
        
        <div id="azeige" style="display: none;">
                  <div id="content">
                 <div id="artikel"></div>
          </div>
            
        </div>
        
        
    </body>
 
    <div id="footer">
        <div class="center" >
            <img src="pics/fish_nacht.png" alt="brief description"/>
                 </div>
                    <a class="noeffect" href="#">Impressum</a>
         </div>
    </body>
</html>

 