<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 
    <head>
        <title>Div Container EIN/AUSBLENDEN</title>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="minimum-scale=1.0, width=device-width, maximum-scale=0.6667, user-scalable=no" name="viewport" />
        <link href="pics/homescreen.gif" rel="apple-touch-icon" />       
        <link href="pics/startup.png" rel="apple-touch-startup-image" />
        <link href="css/stylesheet.css" rel="stylesheet" media="screen" type="text/css" />
        <script type="text/javascript" src="javascript/jquery-1.6.2.min.js"></script> 
        <script type="text/javascript" src="javascript/jquery.tinycarousel.min.js"></script>
        <script src="javascript/developer-functions.js" type="text/javascript"></script> 
        
        <script type="text/javascript">
             function slide(){
             $('#slider1').tinycarousel({ display:1, pager: true, interval: true, controls: true });}
             window.setTimeout("slide()", 3100);
        </script>
        
    </head>
    
    
    <body>
        
        <!-- #########  BEREICH NAVIGATION STARTSEITE ########## --> 
        <div id="mainmenu" style="display:inline;">
        <div id="topbar" class="transparent">
            <div id="title">the lucky fish
                </div>
            </div>
        <div id="tributton" >
            <div class="links">
                <a href="#"  onclick="javascript:ShowMain()">Home</a>
                <a href="#"  onclick="javascript:ShowSearch()">Search</a>
                <a href="#"  onclick="javascript:ShowContact()">Contact</a>
                </div>
            </div>
        <div id="doublead">
                <a href="#" style="background-image: url('images/article_women.jpg')"></a>
                <a href="#" style="background-image: url('images/article_men.jpg')"></a>
            </div>
       </div>
        
        <!-- #########  BEREICH NAVIGATION REST ########## --> 
         
        <div id="menu" style="display:none;">
            <div id="topbar" class="black">
                <div id="leftnav">
                    <a href="#"  onclick="javascript:ShowMain(); "><img alt="home" src="images/home.png" /></a>
                    <a id="back" href="#" onclick="javascript:get_json(); javascript:ShowAnzeige()"> back </a>
                    
                </div>

              <div id="rightnav">
                    <a href="#" onclick="javascript:ShowContact()">Contact</a>
                    <a href="#" onclick="javascript:ShowSearch()">Search</a>
              </div>
            </div>
        </div>
        
        
      <!-- #########  BEREICH NEUE PRODUKTE 3 STÜCK  ########## --> 
        
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
        
       
     <!-- #########  BEREICH SUCHE  ########## -->  
     
    <div id="search" style="display:none;">
        <div id="content" style="background-color: green">ZUM SUCHE DER DIVs</div>      
    </div> 
       
     
     <!-- #########  BEREICH CONTACT  ########## -->  
     
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
        
    
     
     
     <!-- #########  BEREICH ARTKELINFOS EINZEL  ########## --> 
     
        <div id="azeige" style="display: none;">
              <div id="content">
                 <div id="artikel"></div>
                </div>        
        </div>
     
     <!-- #########  BEREICH FULLIMAGE  ########## --> 
     
     <div id="image" style="display: none;">
             <div  id="fullimage">            

                    
            </div>
          
    </div>
        
        
    </body>
 
     <!-- #########  BEREICH FOOTER  ########## --> 
     
       <div id="footer">
            <div class="center" >
               <img src="pics/fish_nacht.png" alt="brief description"/>
                 </div>
                    <a class="noeffect" href="#">Impressum</a>
         </div>
    </body>
</html>