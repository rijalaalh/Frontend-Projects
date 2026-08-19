const bookName=document.getElementById("bookName")
const urlbookName=document.getElementById("urlbookName")
const btnAddbook=document.getElementById("addbookbtn")
const listItems=document.getElementById("list-items")
let listBook=localStorage.getItem("bookItem")?JSON.parse(localStorage.getItem("bookItem")):[]  
function reRenderBook(){
    listItems.innerHTML=""
    const listBook=localStorage.getItem("bookItem")?JSON.parse(localStorage.getItem("bookItem")):[]
    if(listBook.length===0)return;
    listBook.forEach(item => {
        listItems.innerHTML+=` <li id="${item.date}"><a href="${item.url}" target="_blank">${item.name}</a>
            <button type="button" class="deletebook"  onclick="deleteBook(this)">Delete</button></li>`
    });
}

btnAddbook.addEventListener("click",addBookmarker)
function addBookmarker(){
    const regexurl=/https?:\/\/.+\.\w+/ig
    if(bookName.value.length===0 || !regexurl.test(urlbookName.value)){
        alert("your book Name or your url book not valid")
        return;
    }
    listBook.push({
        name:bookName.value,
        url:urlbookName.value,
        date:Date.now(),
    })
    localStorage.setItem("bookItem",JSON.stringify(listBook))
    reRenderBook()
}
function deleteBook(element){
    const id=element.parentElement.id
    const deletedElement=document.getElementById(id)
    deletedElement.classList.add("finished")
    listBook=listBook.filter((book)=>{
        console.log(book.date!=id)
        return book.date!==Number(id)
    })
    localStorage.setItem("bookItem",JSON.stringify(listBook))
    setTimeout(()=>{
    reRenderBook()
    },500)
}
reRenderBook()
document.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        addBookmarker()
    }
})
