
$(".human-form").on("submit", function (event) {
    event.preventDefault();
    var newHome = {
        pet_type: $("question1-human").val(),
        residence: $("question2-human").val(),
        pet_size: $("question3-human").val(),
        hypo: $("question4-human").val(),
        activity: $("question5-human").val(),
        pet_age: $("question6-human").val(),
        has_kids: $("question7-human").val(),
    };

    $.ajax("/api/humans", {
        type: "POST",
        data: newHome
    }).then(
        function () {
            console.log("created new human");


        });
});

$(".pet-form").on("submit", function (event) {
    event.preventDefault();

    console.log('pre-ajax');
    var newPet = {
        pet_name: $("question1-pet").val(),
        pet_type: $("question2-pet").val(),
        pet_age: $("question3-pet").val(),
        pet_breed: $("question4-pet").val(),
        pet_size: $("question5-pet").val(),
        hypo: $("question6-pet").val(),
        activity: $("question7-pet").val(),
        kid_friendly: $("question8-pet").val()
    };
if ($("question8-pet").val()) {
    newPet.pet_picture = $("question9-pet").val().trim()
}

    $.ajax("/api/pets", {
        type: "POST",
        data: newPet
    }).then(
        function () {
            console.log("created new pet");
        }
    );

});


