const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb+srv://satyampandeyhcc:satyam123@cluster0.iukbirw.mongodb.net/ticketbookingsystem?retryWrites=true&w=majority";
//ADD
Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const passengerDetailsSchema = Schema({
    title: String,
    firstName: String,
    lastName: String,
    age: { type: Number, min: [1, "Passengers below 1 year are not allowed"], max: [70, "Passengers above 70 years are not allowed"] }
});

const bookingSchema = Schema({
    bookingId: { type: Number, unique: true },
    flightId: String,
    departureDate: { type: Date, default: new Date() },
    origin: String,
    destination: String,
    timing: String,
    noOfTickets: Number,
    charges: { type: Number, min: [0, "Charges cannot be less than 0"] },
    passengerDetails: { type: [passengerDetailsSchema], default: [] },
}, { collection: "Booking" })

const flightSchema = Schema({
    routeId: { type: String, unique: true },
    origin: String,
    destination: String,
    flightIds: { type: [String], default: [] },
    flightTimings: { type: [String], default: [] },
    prices: { type: [String], default: [] }
}, { collection: "Flight" })

let collection = {};

collection.getBookingCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Booking', bookingSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getFlightCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Flight', flightSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;