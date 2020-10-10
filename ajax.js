function datosjson(numero){
    const xhtpp = new XMLHttpRequest()
    let nuevoDiv = document.getElementById('respuesta')
    let listabutton = document.getElementById('botones')
    xhtpp.open('GET', 'datos.json', true);
    xhtpp.send()
    xhtpp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            if(datos[numero]){
                nuevoDiv.innerHTML = '';
                listabutton.innerHTML = '';
                listabutton.innerHTML ='<button><a id="recargar" href="javascript:location.reload()">Volver</a></button>'
                nuevoDiv.innerHTML = "<p id='texto'>" + datos[numero]['nombre'] + "</p>"
                nuevoDiv.innerHTML += '<p id="descripcion">' + datos[numero]['descripcion'] + '</p>'
                let imagenes = datos[numero]['imagenes']
                if(imagenes.length > 0){
                    imagenes.forEach(function(element){
                        nuevoDiv.innerHTML += '<div class="imagendiv">' + element +'</div>' 
                    })
                }
            }
        }
    }
}

