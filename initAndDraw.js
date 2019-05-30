document.getElementById('files').addEventListener('change', handleFileSelect, false);
var     pesci,
        tails=[],
        flippersUp=[],
        reader;

        
        
/**
 * @function 
 */
function handleFileSelect(evt) {
    var file = evt.target.files[0];    
    reader = new FileReader();
    reader.readAsText(file);
}
/**
 * @function 
 */
function drawJsonButton(){
    d3.select("#bodies").selectAll("ellipse").remove();
    d3.select("#eyes").selectAll("circle").remove();
    d3.select("#mouths").selectAll("line").remove();
    d3.select("#tails").selectAll("polygon").remove();
    d3.select("#flippersUp").selectAll("polygon").remove();
    pesci=[];
    tails=[];
    flippersUp=[];
    pesci = JSON.parse(reader.result);
    for (let i = 0; i < pesci.length; i++)
    {
        pesci[i].key=i;
        pesci[i].fill = getRandomColor();
        pesci[i].round=false;
        
    }
    redraw(pesci);
}

/**
 * @function 
 */
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/**
 * @function 
 */
function redraw(){
    for (let i = 0; i < pesci.length; i++){
        tails.push([{"x":parseInt(pesci[i].x-pesci[i].l), "y":parseInt(pesci[i].y)},
        {"x":parseInt(pesci[i].x-pesci[i].l-(pesci[i].l/2.5)),"y":parseInt(pesci[i].y)+parseInt(pesci[i].l/2.5)},
        {"x":parseInt(pesci[i].x-pesci[i].l-(pesci[i].l/2.5)),"y":parseInt(pesci[i].y)-parseInt(pesci[i].l/2.5)}]);
        
        flippersUp.push([{"x":parseInt(pesci[i].x), "y":parseInt(pesci[i].y)-(parseInt(pesci[i].l/2.5)*1.8)},
        {"x":parseInt(pesci[i].x)-parseInt(pesci[i].l)/2.2,"y":parseInt(pesci[i].y)-parseInt(pesci[i].l/3)},
        {"x":parseInt(pesci[i].x)+parseInt(pesci[i].l)/2.2,"y":parseInt(pesci[i].y)-parseInt(pesci[i].l/3)}])
    }
    for (let i = 0; i < pesci.length; i++) {
        tails[i].key=pesci[i].key;
        tails[i].fill=pesci[i].fill;
        flippersUp[i].key=pesci[i].key;
        flippersUp[i].fill=pesci[i].fill;
        
    }

    //create body
    d3.select("#bodies")
    .selectAll("ellipse")
    .data(pesci)
    .enter()
    .append("ellipse")
    .attr("id", function(d){ return "body"+d.key; })
    .attr("cx", function(d){ return d.x; })
    .attr("cy", function(d){ return d.y; })
    .attr("rx", function(d){ return d.l; })
    .attr("fill",function(d){ return d.fill; })
    .attr("key",function(d){ return d.key; })
    .attr("ry", function(d){ return parseInt(d.l)/2.5; });
// create eyes for the fish
    d3.select("#eyes")
    .selectAll("circle")
    .data(pesci)
    .enter()
    .append("circle")
    .attr("id", function(d){ return "eye"+d.key; })
    .attr("cx", function(d){ return ((parseInt(d.x)+parseInt(d.l))-(parseInt(d.o)*2)); })
    .attr("cy", function(d){ return parseInt(d.y)-(parseInt(d.o)*2); })
    .attr("r", function(d){ return d.o; })
    .attr("key",function(d){ return d.key; })
    .attr("fill","rgb(29, 29, 29)");

    //create mouths
    d3.select("#mouths")
    .selectAll("line")
    .data(pesci)
    .enter()
    .append("line")
    .attr("id", function(d){ return "mouth"+d.key; })
    .attr("x1", function(d){ return parseInt(d.x)+parseInt(d.l);})
    .attr("y1", function(d){ return parseInt(d.y)})
    .attr("x2", function(d){ return (parseInt(d.x)+parseInt(d.l))-parseInt(d.b); })
    .attr("y2", function(d){ return parseInt(d.y); })
    .attr("key",function(d){ return d.key; })
    //create tails
    d3.select("#tails")
        .selectAll("polygon")
        .data(tails)
        .enter()
        .append("polygon")
        .attr("id",function(d){ return "tail"+d.key; })
        .attr("points",function(d) 
            {
            return d.map(function(d) {
                return [d.x,d.y].join(",");
                }).join(" ");
            })
        .attr("fill",function(d){ return d.fill; })
        .attr("key",function(d){ return d.key; });
    //pinne up
    d3.select("#flippersUp")
    .selectAll("polygon")
    .data(flippersUp)
    .enter()
    .append("polygon")
    .attr("id",function(d){ return "flipperUp"+d.key; })
    .attr("points",function(d) 
        {
        return d.map(function(d) {
            return [d.x,d.y].join(",");
            }).join(" ");
        })
    .attr("fill",function(d){ return d.fill; })
    .attr("key",function(d){ return d.key; });


    //rounding some fish:
    for (let i = 0; i < 12; i++) 
    {
        let numero=Math.floor(Math.random() * pesci.length)
        pesci[numero].round=true;
        let pesceToChange= pesci[numero];
        d3.select("#eye"+pesceToChange.key)
            .attr("cx", ((parseInt(pesceToChange.x)-parseInt(pesceToChange.l))+(parseInt(pesceToChange.o)*2)))
        
        d3.select("#mouth"+pesceToChange.key)
            .attr("x1", parseInt(pesceToChange.x)-parseInt(pesceToChange.l))
            .attr("x2", (parseInt(pesceToChange.x)-parseInt(pesceToChange.l))+parseInt(pesceToChange.b))
        
            let prova=[{"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l), "y":parseInt(pesceToChange.y)},
            {"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l)+parseInt(pesceToChange.l/2.5),"y":parseInt(pesceToChange.y)-parseInt(pesceToChange.l/3)},
            {"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l)+parseInt(pesceToChange.l/2.5), "y":(parseInt(pesceToChange.y)+parseInt(pesceToChange.l/3))}];
        d3.select("#tail"+tails[pesceToChange.key].key)
        .attr("points",prova.map(function(d) {
            return [d.x,d.y].join(",");
            }).join(" "))};


    //on click
    d3.select("#fishContainer")
    .selectAll("ellipse")
    .on("click",spostamento)
    d3.select("#fishContainer")
    .selectAll("polygon")
    .on("click",spostamento)
    d3.select("#fishContainer")
    .selectAll("line")
    .on("click",spostamento)
    d3.select("#fishContainer")
    .selectAll("circle")
    .on("click",spostamento)
}
