$(function () {
  // this code will execute when the DOM is ready.
  $("#loadDataBtn").on("click", loadData);
  loadData();
});

function loadData() {
  console.log("Sending Ajax Call");
  $("#statusRow td").html("Loading Data...");
  $.ajax({
    url: "https://usman-fake-api.herokuapp.com/api/products",
    success: processResponse,
  });
  console.log("Ajax Call Sent");
}

function processResponse(response) {
  console.log(response);
  $("#statusRow").remove();
  for (var i = 0; i < response.length; i++) {
    $("#tableBody").append(
      `<tr><td><button class="btn btn-danger">Delete</button></td><td>${response[i].department}</td><td>` +
        response[i].name +
        `</td><td>${response[i].price}</td></tr>`
    );
  }
}

//Handle Addition
$(function () {
  $("#addForm").on("submit", function (e) {
    e.preventDefault();
    console.log($("#department").val());
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/products",
      method: "post",
      data: {
        department: $("#department").val(),
        name: $("#name").val(),
        price: $("#price").val(),
      },
      success: function () {
        console.log("muneeb");
        window.location.href = "APIHTML.html";
      },
      error: function () {
        window.location.href = "APIHTML.html";
      },
    });
  });
});
