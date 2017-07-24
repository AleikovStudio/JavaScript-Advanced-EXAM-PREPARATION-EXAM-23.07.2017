function attachEvents() {
    $("#btnDelete").on("click", function () {
        $("#towns :selected").remove();
    });

    $("#btnAdd").click(function () {
        let town = $("#newItem").val();
        if (town !== "") {
            let option = $("<option>").text(town);
            $("#towns").append(option);
            $("#newItem").val("");
        }
    });
}