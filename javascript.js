var lessThan = document.querySelector(".fa-less-than")
var greaterThan = document.querySelector(".fa-greater-than")
var images = document.querySelector(".slide")
lessThan.style.visibility = "hidden"
var distance = 0
var click = 0

lessThan.addEventListener("click", function(){
    distance = distance + 60
    images.style.transform = `translateX(${distance}px)`
    click = click - 1
    if (click <= 0){
        lessThan.style.visibility = "hidden"
    }
})
greaterThan.addEventListener("click", function(){
    distance = distance - 60
    images.style.transform = `translateX(${distance}px)`
    click = click + 1
    if (click > 0){
        lessThan.style.visibility = "visible"
    }

})
