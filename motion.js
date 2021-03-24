
var x;var p=0;
function start(){
    
var op=document.getElementById('speed').value

if(op=="1")
    x=setInterval(run,300)
else if(op=="2")
     x=setInterval(run,200)
     else if(op=="3")
        x=setInterval(run,100)
function run()
         {
             if(p==600)
             {
                 p=0
             }
             else{
                 document.getElementById('text').style.marginLeft=p+'px';
                 p=p+40
                 
                 
             }
           
         }
   
        }
        function stop()
        {
            for (var i = 1; i < 99999; i++)
            window.clearInterval(i);
            

        }