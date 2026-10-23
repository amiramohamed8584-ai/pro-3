let inputwatch =document.getElementById("inputwatch")
let addBtn =document.getElementById("addBtn")
let count =document.getElementById("count")
let content =document.getElementById("content")
let edit=null

let allproducts =[
    {id:1, name:"ROLEX DAYTONE ", price:500, img:"image/watch-1.jpeg"},
    {id:2, name:"OLVES LEATHER BLUE", price:550, img:"image/watch-2.jpeg"},
    {id:3, name:"ALPA QUARTZ", price:400, img:"image/watch-3.jpeg"},
    {id:4, name:"OLEVS QUARTZ", price:480, img:"image/watch-4.jpeg"},
    {id:5, name:"CASIO F-SHOCK", price:500, img:"image/watch-5.jpeg"},
    {id:6, name:"CURREN STEEL BLACK", price:520, img:"image/watch-6.jpeg"},
]
count.innerHTML=`${allproducts.length} عدد المنتجات`
function drow(){
    content.innerHTML=""
    allproducts.forEach((ele)=>{
        content.innerHTML +=`
        <div class="card bg-base-100 w-96 shadow-sm  ">
  <figure class="px-10 pt-10">
    <img src="${ele.img}" style="width:18rem;height:250px; object-fit:cover" alt="${ele.img}" class="card-img-top" >
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${ele.name}</h2>
    <p class="card-price">price:${ele.price}$</p>
    <button  type="button" onclick="deletbtn(${ele.id})" class="btn bg-slate-300 w-8 h-6" > x </button>
    <button  type="button" onclick="EditBtn(${ele.id})" class="btn bg-slate-300 w-15 h-6" > EDIT </button>

  </div>
</div> `
 })
}
drow()
inputwatch.addEventListener('input',()=>{
    if(inputwatch.value !=""){
        addBtn.removeAttribute('disabled')
    }else{
        addBtn.setAttribute('disabled',true)
    }
})

addBtn.addEventListener('click',()=>{
    if(edit){
    let findproduct = allproducts.find(f=> f.id===edit)
    if(findproduct){
        findproduct.name = inputwatch.value
        drow()}
        edit= null
        addBtn.innerHTML="ADD"
    } else{

        let lastID =allproducts.length ? allproducts[allproducts.length-1].id+1:1
        allproducts.push({name:inputwatch.value, price:prompt("input price"), img:prompt("input URL image")})
        drow()
        count.innerHTML=`${allproducts.length} عدد المنتجات`
    }

    let neweproduct =allproducts[allproducts.length-1]
inputwatch.value=""
addBtn.setAttribute('disabled',true)

})
let search = document.getElementById("search");

search.oninput = function() {
    let value = search.value.toLowerCase().trim();
    let products = document.querySelectorAll("#content .card");
    products.forEach(function(product) {
        let name = product.querySelector(".card-title").innerText.toLowerCase();
        if (name.includes(value)) {
            product.style.display = ""; 
        } else {
            product.style.display = "none"; 
        }
    });
};
search.addEventListener('input',()=>{
    if(search.value !=""){
        searchbtn.removeAttribute('disabled')
    }else{
        searchbtn.setAttribute('disabled',true)
    }
})
function deletbtn(id){
    let index =allproducts.map((del)=>{
        return del.id
    }).indexOf(id)
    if(index != -1){
        allproducts.splice(index,1)
    }
    drow()
    count.innerHTML=`${allproducts.length} عدد المنتجات`

}function EditBtn(id){
    let findproduct = allproducts.find(f=> f.id===id)
    if(findproduct){
        inputwatch.value=findproduct.name
        addBtn.removeAttribute("disabled")
        addBtn.innerHTML="save edit"
        edit = id
    }
}
