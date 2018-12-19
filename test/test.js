var hotel = {
    name: "The Code-Inn",
    roomNumbers: ["101", "102", "103", "104", "105", "106"],
    roomsBooked: [],
    bookSelectedRoom: function(seat) {
        for (let i = 0; i < this.roomNumbers.length; i++) {
            if (document.getElementById("roomsAvailable").value == this.roomNumbers[i]) {
                this.roomsBooked = this.roomNumbers.splice(i, 1).concat(this.roomsBooked);
                document.getElementById("roomsBooked").innerText = this.roomsBooked;
                this.refreshRooms();
                this.bookedRoomsRefresh();
            }
        }
    },
    refreshRooms: function() {
        var hotelRoomsAvailable = `<form><select id="roomsAvailable">`;
        for (let i = 0; i < this.roomNumbers.length; i++) {
            hotelRoomsAvailable += `<option value="${hotel.roomNumbers[i]}">${hotel.roomNumbers[i]}</option>`;
        }
        hotelRoomsAvailable += `</select></form>`;
        document.getElementById("roomsAvail").innerHTML = hotelRoomsAvailable;
    },
    bookedRoomsRefresh: function() {
        var hotelRoomsBooked = `<form><select id="roomToBook">`;
        for (let i = 0; i < this.roomsBooked.length; i++) {
            hotelRoomsBooked += `<option value="${this.roomsBooked[i]}">${this.roomsBooked[i]}</option>`;
        }
        hotelRoomsBooked += `</select></form>`;
        document.getElementById("roomsBooked").innerHTML = hotelRoomsBooked;
    },
    deselectRoom: function() {
        for (let i = 0; i < this.roomsBooked.length; i++) {
            if (document.getElementById("roomToBook").value == this.roomsBooked[i]) {
                this.roomNumbers.push(this.roomsBooked.splice(i, 1).toString());
                document.getElementById("roomsAvail").innerText = this.roomNumbers;
                this.refreshRooms();
                this.bookedRoomsRefresh();
            }
        }
    },
    // reorderRooms: function() {
    //     alert(this.roomNumbers);
    //     for(let i = 0; i < this.roomNumbers.length; i++) {
    //         if(this.roomNumbers[i])
    //     }
    // }
};

