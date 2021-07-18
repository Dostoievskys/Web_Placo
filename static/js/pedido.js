import p from './carrito.json' assert {type:"json"};

window.createProducts = function createProducts(){
    var prod = p,
    wrapper = $('.list-group'),
    contenido = ''
    var total = 0;
    console.log('prod: ',prod);

    for(var i = 0; i < prod.length; i++){
        /*disenio en js de catalogo dinamico */
        total = total + (parseInt(prod[i].cant)*parseInt(prod[i].price));
        contenido+= '<li class="list-group-item">'+prod[i].producto+'<p>'+prod[i].cant+' x '+prod[i].price+'</p> <img class="Pimagen" src="/img/cafe1.jpg" ></li>'
    }
    contenido+= '<li class="list-group-item">Total: '+total+'</li>'
    wrapper.html(contenido)
}

createProducts();