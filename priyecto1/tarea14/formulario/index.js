const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => {
    console.log(evento)
    console.log(f)
    evento.preventDefault()
})


$(() => {
    

    $(".hide-btn").click(() => {
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        // $("h1").show()
        $("h1").fadeIn()
    })

   
})