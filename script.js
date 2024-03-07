const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

// cart

const btn = document.querySelectorAll(".item button");
// console.log(btn);
btn.forEach(function(button,index){
  button.addEventListener("click",function(event){
     var btnItem = event.target
     var product = btnItem.parentElement
     var productImg = product.querySelector(".img1").src
     var productName = product.querySelector(".name").innerText
     var productPrice = product.querySelector(".price").innerText
    //  console.log(productPrice,productImg,productName)

     addcart(productPrice,productImg,productName)
  })
})
function addcart(productPrice,productImg,productName){
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0 ; i<cartItem.length;i++){
    var productT = document.querySelectorAll(".title")
    if(productT[i].innerHTML == productName ){
      alert("Sản phẩm đã có trong giỏ hàng")
      return
    }
  }
  var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'"><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="delete">Xóa</span></td></tr>'
  addtr.innerHTML= trcontent
  var cartTable = document.querySelector("tbody")
  cartTable.append(addtr)
  cartotal()
  deleteCart()
  // console.log(cartTable)
}

// ----------TOTAL-----
function cartotal(){
  var cartItem = document.querySelectorAll("tbody tr")
  var totalC=0
  for(var i=0 ; i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input").value
    var productPrice = cartItem[i].querySelector(".prices").innerHTML
    totalA = productPrice*inputValue*1000
    totalC = totalC+totalA
  }
  var cartotalA = document.querySelector(".price-total span")
  var cartPrice = document.querySelector("#actions .item")
  cartotalA.innerHTML =totalC.toLocaleString('de-DE')
  cartPrice.innerHTML = totalC.toLocaleString('de-DE')
  inputchange()
}
// --------------delete---------------------
function deleteCart(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0 ; i<cartItem.length;i++){
    var productT = document.querySelectorAll(".delete")
    productT[i].addEventListener("click",function(event){
      var cartDelete = event.target
      var  cartIte = cartDelete.parentElement.parentElement
      cartIte.remove()
      cartotal()
    })
   
  }
}

function inputchange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0 ; i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener("change",function(){
      cartotal()
    })
   
  }
}
const cartbtn = document.querySelector(".X")
const cartshow = document.querySelector("#actions .item1")
cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%"
})