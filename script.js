function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

function hash(str){
    var hash = 0;
    for(var i = 0; i < str.length; i++){
        hash += str.charCodeAt(i);
    }
    return hash.toString(16);
}


window.onload = function(){
    var canvas = document.getElementById("canv");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF00FF";
    
    function Point(){
        this.x = 250;
        this.y = 250;

        this.render = function(ctx){
            if(this.y < 0){
                this.y = 500 + this.y;
            }
            ctx.fillRect(this.x%500,this.y%500,5,5,5);
            ctx.fill();
        }
    }

    var p = new Point(); 

    function loop(){
        var n = document.getElementById("walkRange");

        p.x += Math.floor(Math.random()*n.value) - Math.floor(Math.random()*n.value);
        p.y += Math.floor(Math.random()*n.value) - Math.floor(Math.random()*n.value);

        p.render(ctx);
    }

    setInterval(loop, 100);

    document.getElementById("downBtn").onclick = function(){
        var canvas = document.getElementById("canv");
        var img    = canvas.toDataURL("image/png");

        downloadURI(img, "RandomWalk - " + hash(img) + ".png");
    }
};