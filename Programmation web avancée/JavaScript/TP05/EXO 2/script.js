for ( let i = 0 ; i<5 ; i++){
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn); // tzidlii btn f mon ficher HTML
    // to resolve it , we can change var by let
}