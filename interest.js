window.onload =function(){
        var select=document.getElementById("select");
        var btn=document.getElementById("button");
        btn.addEventListener("click",interest);

        function days()
        {
            var ltd=document.getElementById("ltd").value;
            var lrd=document.getElementById("lrd").value;
            var oneday=1000*60*60*24;
            var d1=new Date(ltd);
            var d2=new Date(lrd);
            var td=d2.getTime() - d1.getTime();
            var Days=td/oneday;
            return Days;
        }

        function interest(){
            var years =(days() /365).toFixed(2);  
            var p=document.getElementById("principle");
            var r=document.getElementById("roi");
            if(p.value!='' && r.value!='' && ltd!='' && lrd!='')
            {
                var options=select.options[select.selectedIndex].value;
                if(options=="Si")
                {
                    var Interest= ((p.value*r.value*years) /100).toFixed(2);
                    var Amount= (+Interest + +p.value).toFixed(2);
                    document.getElementById("dispnone1").style.visibility="visible";
                    document.getElementById("dispnone2").style.visibility="visible";
                    document.getElementById("int").value=Interest;
                    document.getElementById("amt").value=Amount;
                    document.getElementById("day").innerHTML="Duration :" + days() +"days" + " "+ "(OR)" +" "+ years +"years";
                    
                }
                else{
                    var Amount= ( p.value * Math.pow((1+(r.value/100)),(years))).toFixed(2);
                    var Interest= (Amount - p.value).toFixed(2);
                    document.getElementById("dispnone1").style.visibility="visible";
                    document.getElementById("dispnone2").style.visibility="visible";
                    document.getElementById("int").value=Interest;
                    document.getElementById("amt").value=Amount;
                    document.getElementById("day").innerHTML="Duration :" + days() +"days" + " "+ "(OR)" +" "+ years +"years";
                }
        
            }
        
        }
    
    }