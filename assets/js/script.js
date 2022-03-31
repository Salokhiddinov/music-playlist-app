////////// For delete //////////////////
console.log("script connected");
if (window.location.pathname == "/") {
  $ondelete = $("section .wrapper .all-items .list-item .");
  $ondelete.click(function () {
    alert('btndelete')
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
