
//pega a tag menu
var menu = document.getElementById('menu-nav')
// define o menu como invisivel
//menu.style.display = 'none'

//escuta os eventos do site, se a função de clique for chamada
function btn_burguer_on_click()
{
    //verifica se o menu está invisivel
    if (menu.style.display == 'none') {
        //se estiver, fique visivel
        menu.style.display = 'block'
    }
    else // se não
    {
        // deixe o menu invisivel
        menu.style.display = 'none'
    }
}


window.onresize = function () {
    let largura = window.innerWidth
    if (largura > 669)
    {
        menu.style.display = 'block'
    }
}