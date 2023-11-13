<!-- TP3ClientSide.php -->
<head> 
     <style>
        .myClasse {
            margin: auto;
            width: 70%;
            border: 3px solid green;
            padding: 10px;
            background-color: lightblue;
        }
    </style>
</head>
<div class="myClasse">
    
    <button id="mybut" type="button">Find</button>
    <div id="infClient">

    </div>
</div>
<script>

 var x=document.getElementById("mybut");
   x.addEventListener("click", function(){chercher();})
function chercher() {
       
        var xmlhttp = new XMLHttpRequest();
        //debugger;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText);
                var data= this.responseXML;
                console.log(data.documentElement);
                var root= data.documentElement;
                console.log(root.childNodes.length);
                var x= root.getElementsByTagName('name').item(2);
                document.getElementById("infClient").innerHTML =
                "Nodename: " + x.nodeName + "<br>" +
                "Nodevalue: " + x.firstChild.nodeValue + "<br>" +
                "Nodetype: " + x.firstChild.nodeType;
            
            }
        };
        xmlhttp.open("GET", "TP3Server.php", true);
        xmlhttp.send();
}

</script>
