/**
 * @function 
 */
function spostamento(){
    let pesceClick= pesci[d3.select(this).attr("key")]
    let numero=Math.floor(Math.random() * pesci.length)
    let pesceToChange= pesci[numero];
    
    //corpo
    d3.select("#body"+pesceClick.key)
    .transition()
    .duration(1200)
    .attr("id","body"+pesceToChange.key)
    .attr("cx", pesceToChange.x)
    .attr("cy", pesceToChange.y)
    .attr("rx", pesceToChange.l)
    .attr("ry", parseInt(pesceToChange.l)/2.5)
    .attr("key", pesceToChange.key)

    d3.select("#body"+pesceToChange.key)
    .transition()
    .duration(1200)
    .attr("id","body"+pesceClick.key)
    .attr("cx", pesceClick.x)
    .attr("cy", pesceClick.y)
    .attr("rx", pesceClick.l)
    .attr("ry", parseInt(pesceClick.l)/2.5)
    .attr("key", pesceClick.key);
    //caso 1: tutti e due i pesci guardano a destra
    if(!pesceClick.round & !pesceToChange.round){
        //EYES
        d3.select("#eye"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceClick.key)
        .attr("cx", ((parseInt(pesceClick.x)+parseInt(pesceClick.l))-(parseInt(pesceClick.o)*2)))
        .attr("cy", parseInt(pesceClick.y)-(parseInt(pesceClick.o)*2))
        .attr("r", pesceClick.o);
        
        d3.select("#eye"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceToChange.key)
        .attr("cx", ((parseInt(pesceToChange.x)+parseInt(pesceToChange.l))-(parseInt(pesceToChange.o)*2)))
        .attr("cy", parseInt(pesceToChange.y)-(parseInt(pesceToChange.o)*2))
        .attr("r", pesceToChange.o)
        //////MOUTH
        d3.select("#mouth"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceToChange.key)
        .attr("x1", parseInt(pesceToChange.x)+parseInt(pesceToChange.l))
        .attr("y1", parseInt(pesceToChange.y))
        .attr("x2", (parseInt(pesceToChange.x)+parseInt(pesceToChange.l))-parseInt(pesceToChange.b))
        .attr("y2", parseInt(pesceToChange.y));

        d3.select("#mouth"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceClick.key)
        .attr("x1", parseInt(pesceClick.x)+parseInt(pesceClick.l))
        .attr("y1", parseInt(pesceClick.y))
        .attr("x2", (parseInt(pesceClick.x)+parseInt(pesceClick.l))-parseInt(pesceClick.b))
        .attr("y2", parseInt(pesceClick.y));

            ////TAILS
        d3.select("#tail"+tails[pesceClick.key].key)
        .transition()
        .duration(1200)
        .attr("id","tail"+tails[pesceToChange.key].key)
        .attr("points",tails[pesceToChange.key].map(function(d) {
            return [d.x,d.y].join(",");}).join(" "));

        d3.select("#tail"+tails[pesceToChange.key].key)
        .transition()
        .duration(1200)
        .attr("id","tail"+tails[pesceClick.key].key)
        .attr("points",tails[pesceClick.key].map(function(d) {
            return [d.x,d.y].join(",");
            }).join(" "));
        
    }
    //caso due: entrambi i pesci guardano a sinistra
    else if(pesceClick.round & pesceToChange.round){
        //EYES
        d3.select("#eye"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceClick.key)
        .attr("cx", ((parseInt(pesceClick.x)-parseInt(pesceClick.l))+(parseInt(pesceClick.o)*2)))
        .attr("cy", parseInt(pesceClick.y)-(parseInt(pesceClick.o)*2))
        .attr("r", pesceClick.o)
        
        d3.select("#eye"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceToChange.key)
        .attr("cx", ((parseInt(pesceToChange.x)-parseInt(pesceToChange.l))+(parseInt(pesceToChange.o)*2)))
        .attr("cy", parseInt(pesceToChange.y)-(parseInt(pesceToChange.o)*2))
        .attr("r", pesceToChange.o) 
        

        //MOUTH
        d3.select("#mouth"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceToChange.key)
        .attr("x1", parseInt(pesceToChange.x)-parseInt(pesceToChange.l))
        .attr("y1", parseInt(pesceToChange.y))
        .attr("x2", (parseInt(pesceToChange.x)-parseInt(pesceToChange.l))+parseInt(pesceToChange.b))
        .attr("y2", parseInt(pesceToChange.y));

        d3.select("#mouth"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceClick.key)
        .attr("x1", parseInt(pesceClick.x)-parseInt(pesceClick.l))
        .attr("y1", parseInt(pesceClick.y))
        .attr("x2", (parseInt(pesceClick.x)-parseInt(pesceClick.l))+parseInt(pesceClick.b))
        .attr("y2", parseInt(pesceClick.y));


        //TAILS
        let prova=[{"x":parseInt(pesceClick.x)+parseInt(pesceClick.l), "y":parseInt(pesceClick.y)},
        {"x":parseInt(pesceClick.x)+parseInt(pesceClick.l)+parseInt(pesceClick.l/2.5),"y":parseInt(pesceClick.y)-parseInt(pesceToChange.l/3)},
        {"x":parseInt(pesceClick.x)+parseInt(pesceClick.l)+parseInt(pesceClick.l/2.5), "y":(parseInt(pesceClick.y)+parseInt(pesceToChange.l/3))}];    

        d3.select("#tail"+tails[pesceToChange.key].key)
        .transition()
        .duration(1200)
        .attr("id","tail"+tails[pesceClick.key].key)  
        .attr("points",prova.map(function(d) {
        return [d.x,d.y].join(",");
        }).join(" "));

        let prova1=[{"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l), "y":parseInt(pesceToChange.y)},
        {"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l)+parseInt(pesceToChange.l/2.5),"y":parseInt(pesceToChange.y)-parseInt(pesceToChange.l/3)},
        {"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l)+parseInt(pesceToChange.l/2.5), "y":(parseInt(pesceToChange.y)+parseInt(pesceToChange.l/3))}];
    d3.select("#tail"+tails[pesceClick.key].key)
    .transition()
    .duration(1200)
    .attr("id","tail"+tails[pesceToChange.key].key)  
    .attr("points",prova1.map(function(d) {
        return [d.x,d.y].join(",");
        }).join(" "));

    }
    //caso tre: pesce cliccato guarda a sinistra e l'altro a destra
    else if(pesceClick.round & !pesceToChange.round){
        pesceClick.round=false;
        pesceToChange.round=true;
        d3.select("#eye"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceClick.key)
        .attr("cx", ((parseInt(pesceClick.x)-parseInt(pesceClick.l))+(parseInt(pesceClick.o)*2)))
        .attr("cy", parseInt(pesceClick.y)-(parseInt(pesceClick.o)*2))
        .attr("r", pesceClick.o)
        d3.select("#eye"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceToChange.key)
        .attr("cx", ((parseInt(pesceToChange.x)+parseInt(pesceToChange.l))-(parseInt(pesceToChange.o)*2)))
        .attr("cy", parseInt(pesceToChange.y)-(parseInt(pesceToChange.o)*2))
        .attr("r", pesceToChange.o)
        
        d3.select("#mouth"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceToChange.key)
        .attr("x1", parseInt(pesceToChange.x)+parseInt(pesceToChange.l))
        .attr("y1", parseInt(pesceToChange.y))
        .attr("x2", (parseInt(pesceToChange.x)+parseInt(pesceToChange.l))-parseInt(pesceToChange.b))
        .attr("y2", parseInt(pesceToChange.y));

        d3.select("#mouth"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceClick.key)
        .attr("x1", parseInt(pesceClick.x)-parseInt(pesceClick.l))
        .attr("y1", parseInt(pesceClick.y))
        .attr("x2", (parseInt(pesceClick.x)-parseInt(pesceClick.l))+parseInt(pesceClick.b))
        .attr("y2", parseInt(pesceClick.y));
        
        // tails
        d3.select("#tail"+tails[pesceClick.key].key)
            .transition()
            .duration(1200)
            .attr("id","tail"+tails[pesceToChange.key].key)
            .attr("points",tails[pesceToChange.key].map(function(d) {
                return [d.x,d.y].join(",");}).join(" "));

    let prova=[{"x":parseInt(pesceClick.x)+parseInt(pesceClick.l), "y":parseInt(pesceClick.y)},
                {"x":parseInt(pesceClick.x)+parseInt(pesceClick.l)+parseInt(pesceClick.l/2.5),"y":parseInt(pesceClick.y)-parseInt(pesceToChange.l/3)},
                {"x":parseInt(pesceClick.x)+parseInt(pesceClick.l)+parseInt(pesceClick.l/2.5), "y":(parseInt(pesceClick.y)+parseInt(pesceToChange.l/3))}];
            
            
        d3.select("#tail"+tails[pesceToChange.key].key)
        .transition()
        .duration(1200)
        .attr("id","tail"+tails[pesceClick.key].key)    
        .attr("points",prova.map(function(d) {
                return [d.x,d.y].join(",");
                }).join(" "));
    }
    //caso 4: pesce cliccato guarda a destra e l'altro a sinistra
    else{
        pesceClick.round=true;
        pesceToChange.round=false;
        d3.select("#eye"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceClick.key)
        .attr("cx", ((parseInt(pesceClick.x)+parseInt(pesceClick.l))-(parseInt(pesceClick.o)*2)))
        .attr("cy", parseInt(pesceClick.y)-(parseInt(pesceClick.o)*2))
        .attr("r", pesceClick.o)
        d3.select("#eye"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","eye"+pesceToChange.key)
        .attr("cx", ((parseInt(pesceToChange.x)-parseInt(pesceToChange.l))+(parseInt(pesceToChange.o)*2)))
        .attr("cy", parseInt(pesceToChange.y)-(parseInt(pesceToChange.o)*2))
        .attr("r", pesceToChange.o);
    
        d3.select("#mouth"+pesceClick.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceToChange.key)
        .attr("x1", parseInt(pesceToChange.x)-parseInt(pesceToChange.l))
        .attr("y1", parseInt(pesceToChange.y))
        .attr("x2", (parseInt(pesceToChange.x)-parseInt(pesceToChange.l))+parseInt(pesceToChange.b))
        .attr("y2", parseInt(pesceToChange.y));

        d3.select("#mouth"+pesceToChange.key)
        .transition()
        .duration(1200)
        .attr("id","mouth"+pesceClick.key)
        .attr("x1", parseInt(pesceClick.x)+parseInt(pesceClick.l))
        .attr("y1", parseInt(pesceClick.y))
        .attr("x2", (parseInt(pesceClick.x)+parseInt(pesceClick.l))-parseInt(pesceClick.b))
        .attr("y2", parseInt(pesceClick.y));


        d3.select("#tail"+tails[pesceToChange.key].key)
        .transition()
        .duration(1200)
        .attr("id","tail"+tails[pesceClick.key].key)
        .attr("points",tails[pesceClick.key].map(function(d) {
            return [d.x,d.y].join(",");
            }).join(" "));
    
        let prova=[{"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l), "y":parseInt(pesceToChange.y)},
            {"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l)+parseInt(pesceToChange.l/2.5),"y":parseInt(pesceToChange.y)-parseInt(pesceToChange.l/3)},
            {"x":parseInt(pesceToChange.x)+parseInt(pesceToChange.l)+parseInt(pesceToChange.l/2.5), "y":(parseInt(pesceToChange.y)+parseInt(pesceToChange.l/3))}];
        d3.select("#tail"+tails[pesceClick.key].key)
        .transition()
        .duration(1200)
        .attr("id","tail"+tails[pesceToChange.key].key)  
        .attr("points",prova.map(function(d) {
            return [d.x,d.y].join(",");
            }).join(" "));
        }
    
    // flippersUp
    d3.select("#flipperUp"+flippersUp[pesceClick.key].key)
        .transition()
        .duration(1200)
        .attr("id","flipperUp"+flippersUp[pesceToChange.key].key)
        .attr("points",flippersUp[pesceToChange.key].map(function(d) {
            return [d.x,d.y].join(",");
            }).join(" "));

    d3.select("#flipperUp"+flippersUp[pesceToChange.key].key)
        .transition()
        .duration(1200)
        .attr("id","flipperUp"+flippersUp[pesceClick.key].key)
        .attr("points",flippersUp[pesceClick.key].map(function(d) {
                return [d.x,d.y].join(",");
                }).join(" "));
return;
}
