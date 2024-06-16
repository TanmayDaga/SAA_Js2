const logger = require("../../utils/logger");
const { EventTypes } = require("../../models/events/EventTypes");
const { Events } = require("../../models/events/Events");

async function init() {

  try {
    await EventTypes.sync()
    await Events.sync()
    // Create dummy EventTypes
    
    const eventType2 = await EventTypes.create({
      name: "Alumni Interviews",
    });

    const eventType3 = await EventTypes.create({
      name: "Ask an alumnus",
    });

    const eventType4 = await EventTypes.create({
      name: "Flagship Events",
    });

    // Create dummy Events
    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Alumni Connect Session - Jalem Raj Rohit",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType3.id,
    });

    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Echoes of Wisdom - Rajendra Nagar",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType2.id,
    });

    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Ask an Alumnus - Krati Saxena",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType3.id,
    });

    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Ask an Alumnus - Krati Saxena",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType3.id,
    });

    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Ask an Alumnus - Gurjot Singh",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType3.id,
    });

    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Dashak 3.0",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType4.id,
    });

    await Events.create({
      startDate: "2024-06-01",
      endDate: "2024-06-02",
      name: "Prometeo x SAA",
      startTime: "09:00:00",
      endTime: "17:00:00",
      venue: "Conference Hall A",
      description: "Annual tech conference",
      eventTypeId: eventType4.id,
    });

    await Events.create({
      startDate: "2024-07-15",
      endDate: "2024-07-15",
      name: "Soon to be Alumnus",
      startTime: "10:00:00",
      endTime: "15:00:00",
      venue: "Workshop Room B",
      description: "Hands-on workshop on AI",
      eventTypeId: eventType3.id,
    });                 

    await Events.create({
      startDate: "2024-08-20",
      endDate: "2024-08-20",
      name: "Alumni Day",
      startTime: "18:00:00",
      endTime: "21:00:00",
      venue: "Community Center",
      description: "Local developers meetup",
      eventTypeId: eventType4.id,
    });

    await Events.create({
      startDate: "2024-08-20",
      endDate: "2024-08-20",
      name: "Scribble Day",
      startTime: "18:00:00",
      endTime: "21:00:00",
      venue: "Community Center",
      description: "Local developers meetup",
      eventTypeId: eventType4.id,
    }); 

    logger("Dummy data created successfully", "debug");
  } catch (error) {
    logger(`${error}`, "error");
  }
}

module.exports = { init };
