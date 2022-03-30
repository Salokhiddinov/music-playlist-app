const btnDelete = document.querySelector('.btn-delete')
if(window.location.pathname == "/"){
  btnDelete.addEventListener("click", function(){
    let id = $(this).attr("data-id")

    let request = {
        "url" : `http://localhost:3000/api/songs/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }

})
}



//////////For NAV open/close/////////////////
const menu = document.querySelector(".btn-menu");
const back = document.querySelector(".nav-back");
const nav = document.querySelector(".nav");

let navIsOpen = false;

menu.addEventListener("click", () => {
  navIsOpen = true;
  checkNav();
});

back.addEventListener("click", () => {
  navIsOpen = false;
  checkNav();
});

const checkNav = () => {
  if (!navIsOpen) {
    nav.classList.toggle("hidden");
    menu.classList.add("hidden");
  }

  if (navIsOpen) {
    nav.classList.toggle("hidden");
    menu.classList.add("hidden");
  }
};
////////////////////////////////////////
