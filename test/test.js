var venue = {
    name: "Paul Wears Two Left Shoes",
    seatsAvail: ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113"],
    bookedSeats: [],
    displaySeats: function() {
        console.log(this.seatsAvail.length - this.bookedSeats.length + " seats available.");
    },
    Displayseats: function() {
        var seatsToBook = "";
        for (var i = 0; i < venue.seatsAvail.length; i++) {
            //need to escape quotes on the following line, research escaping characters and quotes especially
            seatsToBook += "<button class='dropdown-item funbuttonatag seat' onclick='venue.SeatAvails();' value=\'" + venue.seatsAvail[i] + "\'>" + venue.seatsAvail[i] + "</button><br>";
        }
        document.getElementById("seatsAvailo").innerHTML = seatsToBook;
    },
    SeatAvails: function() {
        const classname = Array.from(document.getElementsByClassName("seat"));

        // for(const c of classname) {
        //     c.addEventListener("click", function() {
        //         alert(c.value);
        //     }, false);
        // }
        // for (var i = 0; i < classname.length; i++) {
        //     alert(classname[i]);

        //     classname[i].addEventListener('click', function() {
        //         alert(classname[i].value);
        //     }, false);
        // }


        // var attribute = this.getAttribute("data-myattribute");
        // alert(attribute);
        var alertVal = function() {
                alert(classname[i].value);
        }
        
        for(let i = 0; i < classname.length; i++) {
            classname[i].addEventListener('click', alertVal);
        }
        // Array.from(classname).forEach(function(element) {
        //     element.addEventListener('click', function() {
        //         alert(element.value);
        //     });
        // });


    }
};
