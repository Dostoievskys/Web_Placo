import p from './carrito.json' assert {type:"json"};

window.createProducts = function createProducts(){
    var prod = p,
    wrapper = $('.list-group'),
    contenido = ''
    var total = 0;
    console.log('prod: ',prod);
    contenido+= '<form id="compra" action="https://www.paypal.com/cgi-bin/webscr" method="POST">'
    for(var i = 0; i <prod.length; i++){
        /*disenio en js de catalogo dinamico */
        total = total + (parseFloat(prod[i].cant)*parseFloat(prod[i].price));
        contenido+= '<li class="list-group-item">'+prod[i].producto+'<p>'+prod[i].cant+' x '+prod[i].price+'</p></li>' //<img class="Pimagen" src="/img/cafe1.jpg" >
    }
    contenido+= '<li class="list-group-item">Total: '+total+' USD</li>'
    contenido+='<input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="amount" value="'+total+'"><input type="hidden" name="currency_code" value="USD"><input type="hidden" name="business" value="diegotapialeal@hotmail.com"></input>'
    contenido+='<input type="hidden" name="return" value="http://localhost:3000/catalogo/pedido/PagoRealizado">'
    contenido+='<input type="hidden" name="item_name" value="Compra en Bocca">'
    /**<input type="hidden" name="upload" value="1"> */
    contenido+='</form>'
    wrapper.html(contenido)
}

createProducts();
