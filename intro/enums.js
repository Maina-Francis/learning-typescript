"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enumerators
var SeatChoices;
(function (SeatChoices) {
    SeatChoices["AISLE"] = "aisle";
    SeatChoices[SeatChoices["MIDDLE"] = 2] = "MIDDLE";
    SeatChoices[SeatChoices["WINDOW"] = 3] = "WINDOW";
})(SeatChoices || (SeatChoices = {}));
const seat = SeatChoices.AISLE;
console.log(seat);
