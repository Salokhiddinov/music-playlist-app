$("#update-song").submit(function (event) {
  event.preventDefault();

  var temp_array = $(this).serializeArray();
  var data = {};
  console.log(temp_array);
  $.map(temp_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `/api/songs/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
  window.location.replace("/all-songs");
});

////////// For delete //////////////////

$("a.delete").click(function () {
  console.log("delete btn");
  var id = $(this).attr("data-id");

  var request = {
    url: `api/songs/${id}`,
    method: "DELETE",
  };

  if (confirm("Delete?")) {
    $.ajax(request).done(function (response) {
      alert("Data Deleted Successfully!");
      location.reload();
    });
  }
});
