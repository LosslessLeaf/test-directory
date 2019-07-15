// var hotel = {
//     name: "The Code-Inn",
//     roomNumbers: ["101", "102", "103", "104", "105", "106"],
//     roomsBooked: [],
//     bookSelectedRoom: function(seat) {
//         for (let i = 0; i < this.roomNumbers.length; i++) {
//             if (document.getElementById("roomsAvailable").value == this.roomNumbers[i]) {
//                 this.roomsBooked = this.roomNumbers.splice(i, 1).concat(this.roomsBooked);
//                 document.getElementById("roomsBooked").innerText = this.roomsBooked;
//                 this.refreshRooms();
//                 this.bookedRoomsRefresh();
//             }
//         }
//     },
//     refreshRooms: function() {
//         var hotelRoomsAvailable = `<form><select id="roomsAvailable">`;
//         for (let i = 0; i < this.roomNumbers.length; i++) {
//             hotelRoomsAvailable += `<option value="${hotel.roomNumbers[i]}">${hotel.roomNumbers[i]}</option>`;
//         }
//         hotelRoomsAvailable += `</select></form>`;
//         document.getElementById("roomsAvail").innerHTML = hotelRoomsAvailable;
//     },
//     bookedRoomsRefresh: function() {
//         var hotelRoomsBooked = `<form><select id="roomToBook">`;
//         for (let i = 0; i < this.roomsBooked.length; i++) {
//             hotelRoomsBooked += `<option value="${this.roomsBooked[i]}">${this.roomsBooked[i]}</option>`;
//         }
//         hotelRoomsBooked += `</select></form>`;
//         document.getElementById("roomsBooked").innerHTML = hotelRoomsBooked;
//     },
//     deselectRoom: function() {
//         for (let i = 0; i < this.roomsBooked.length; i++) {
//             if (document.getElementById("roomToBook").value == this.roomsBooked[i]) {
//                 this.roomNumbers.push(this.roomsBooked.splice(i, 1).toString());
//                 document.getElementById("roomsAvail").innerText = this.roomNumbers;
//                 this.refreshRooms();
//                 this.bookedRoomsRefresh();
//             }
//         }
//     },
//     reorderRooms: function() {
//         alert(this.roomNumbers);
//         for(let i = 0; i < this.roomNumbers.length; i++) {
//             // if(this.roomNumbers[i])
//         }
//     }
    
    
    
    
    
    
// // };
// // create a function that accepts 3 numbers, 3 items on your bill, BETTER FUNCTION (accepts array of numbers, totals them, applies 7% tax, adds 15% gratuity, returns total.)


// function addItem(arr) {
//     var totaler = 0;
//     var sumItems = arr.forEach(item => {
//         totaler = totaler + item;
//     });
    
//     console.log(`Your bill before tax is: ${totaler}`);
//     console.log(`Your bill's tax is: ${(totaler * .07).toFixed(2)}`);
//     console.log(`Your bill with tax is: ${totaler + (totaler * .07)}`);
    
//     totaler = totaler + (totaler * .07);
    
//     console.log(`15% gratuity with your bill is: ${((totaler * .15)).toFixed(2)}`);
    
//     totaler = totaler + (totaler * .15);
    
//     console.log(`Your bill's total with tip is: ${totaler.toFixed(2)}`);
//     return totaler.toFixed(2);
// }



// addItem([2, 7, 22]);


// function myFunction() {
//     const text = document.getElementById("displayText");
//     if (text.innerText == "") {
//         text.innerText = "The button is clicked!";
//     } else {
//         text.innerText = "";
//     }
// }







