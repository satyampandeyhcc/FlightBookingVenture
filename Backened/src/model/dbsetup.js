const collection = require("../utilities/connection");
//SATYAM PANDEY
const flightDb = [
  {
    routeId: "MB001",
    origin: "mumbai",
    destination: "bangalore",
    flightIds: ["GO-101", "UA-323", "SJ-432", "GI-427", "GI-439"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [2234, 2100, 3400, 4200, 2300],
  },
  {
    routeId: "BD001",
    origin: "bangalore",
    destination: "delhi",
    flightIds: ["GO-536", "UA-234", "UA-124", "GI-876"],
    flightTimings: ["09:00-12:30", "04:00-08:00", "12:00-15:30", "00:30-03:00"],
    prices: [3600, 3950, 3849, 4200],
  },
  {
    routeId: "DK001",
    origin: "delhi",
    destination: "kolkata",
    flightIds: ["GI-256", "GI-323", "SJ-896", "UA-427", "GO-439", "UA-543"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
      "09:00-11:30",
    ],
    prices: [2234, 2100, 3400, 4200, 2300, 2235],
  },
  {
    routeId: "BM001",
    origin: "delhi",
    destination: "mumbai",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [2234, 2100, 3400, 4200, 2300],
  },
  {
    routeId: "AK001",
    origin: "agra",
    destination: "kanpur",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [2224, 2200, 3100, 4100, 2400],
  },
  {
    routeId: "PK001",
    origin: "punjab",
    destination: "kolkata",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [2234, 2100, 3400, 4200, 2300],
  },

  {
    routeId: "VG001",
    origin: "varanasi",
    destination: "gorakhpur",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [2500, 2200, 2400, 3200, 2200],
  },
  {
    routeId: "GG001",
    origin: "goa",
    destination: "gorakhpur",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [12500, 12200, 12400, 13200, 12200],
  },
  {
    routeId: "BG001",
    origin: "bangalore",
    destination: "gorakhpur",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [10000, 14200, 13400, 13200, 13300],
  },
  {
    routeId: "RR001",
    origin: "ranchi",
    destination: "gorakhpur",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [12345, 14200, 13400, 13200, 13300],
  },

  {
    routeId: "SG001",
    origin: "surat",
    destination: "goa",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [12000, 11200, 12400, 13100, 11300],
  },
  {
    routeId: "RG001",
    origin: "ranchi",
    destination: "goa",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [12345, 11200, 12400, 13100, 11300],
  },
  {
    routeId: "  KG001",
    origin: "kushinagar",
    destination: "goa",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [12346, 11200, 12400, 13100, 11300],
  },
  {
    routeId: "  RG001",
    origin: "raipur",
    destination: "goa",
    flightIds: ["SJ-101", "SJ-323", "GI-432", "GA-427", "GI-986"],
    flightTimings: [
      "09:00-11:30",
      "04:00-07:00",
      "12:00-14:30",
      "18:00-20:30",
      "00:30-02:00",
    ],
    prices: [13245, 11200, 12400, 13100, 11300],
  }
];
const bookingDB = [
  {
    bookingId: 1001,
    flightId: "SJ-101",
    departureDate: "11-09-2023",
    origin: "delhi",
    destination: "mumbai",
    timing: "09:00-11:30",
    charges: 4968,
    noOfTickets: 2,
    passengerDetails: [
      {
        title: "Mr",
        firstName: "John",
        lastName: "Snow",
        age: 44,
      },
      {
        title: "Ms",
        firstName: "Blake",
        lastName: "Snow",
        age: 16,
      },
    ],
  },
];

exports.setupDb = () => {
  return collection.getBookingCollection().then((booking) => {
    return booking.deleteMany().then(() => {
      return booking.insertMany(bookingDB).then(() => {
        return collection.getFlightCollection().then((flights) => {
          return flights.deleteMany().then(() => {
            return flights.insertMany(flightDb).then((data) => {
              if (data) return "Insertion Successfull";
              else {
                let err = new Error("Insertion failed");
                err.status = 400;
                throw err;
              }
            });
          });
        });
      });
    });
  });
};

// exports.setupDb = async () => {
//     try {
//         const booking = await collection.getBookingCollection();
//         await booking.deleteMany();
//         await booking.insertMany(bookingDB);

//         const flights = await collection.getFlightCollection();
//         await flights.deleteMany();
//         const data = await flights.insertMany(flightDb);

//         if (data) return "Insertion Successful";
//         else throw new Error("Insertion failed");
//     } catch (err) {
//         throw err;
//     }
// };
