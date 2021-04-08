export const patientDetail = {
  patient: {
    patientID: 2,
    lfn: null,
    firstName: "Frank",

    lastName: "Billings",

    createDtTm: "2020-12-25T00:00:00",

    updtDtTm: "2020-12-25T00:00:00",

    active: "1",
  },

  drssignment: [
    {
      id: 2,

      patientID: 2,

      doctorID: 3,

      createDtTm: "0001-01-01T00:00:00",

      updtDtTm: "0001-01-01T00:00:00",

      active: null,
    },
  ],

  doctors: [
    {
      doctorID: 3,
      phone: "+1-650-513-0524",
      sms: "+1-650-513-0524",
      mail: "doctor@example.com",
      scheduleName: "Surgeon",
      tag: "Surgeon",
      priority: 1,
      system: null,

      systemID: null,

      firstName: "Saffron",

      lastName: "Gbagada",

      createDtTm: "2020-12-25T00:00:00",

      updtDtTm: "2020-12-25T00:00:00",

      active: "1",
    },
    {
      doctorID: 4,
      scheduleName: "Surgeon",
      tag: "Surgeon",
      priority: 2,
      system: null,

      systemID: null,

      firstName: "Adam",

      lastName: "Gates",

      createDtTm: "2020-12-25T00:00:00",

      updtDtTm: "2020-12-25T00:00:00",

      active: "1",
    },
  ],

  schedule: [
    {
      scheduleID: 3,

      doctorID: 3,

      scheduleName: "Surgeon",
      tag: "Surgeon",
      phone: "+1",
      sms: "",
      priority: 1,

      startDate: "2021-04-07T00:00:00",

      endDate: "2021-04-14T00:00:00",

      createDtTm: "2020-12-25T00:00:00",

      updtDtTm: "2020-12-25T00:00:00",

      active: "1",
    },
  ],

  tags: [
    {
      tagID: 3,

      doctorID: 3,

      tag: "Surgeon",

      createDtTm: "2020-12-25T00:00:00",

      updtDtTm: "2020-12-25T00:00:00",

      active: "1",
    },
  ],
};
