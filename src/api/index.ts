import axios from "axios";

const instance = axios.create({
  baseURL: "http://ergast.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface DriverData {
  code?: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber?: string;
  url: string;
}

export interface RaceData {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
  FirstPractice: {
    date: string;
    time: string;
  };
  SecondPractice: {
    date: string;
    time: string;
  };
  ThirdPractice: {
    date: string;
    time: string;
  };
  Qualifying: {
    date: string;
    time: string;
  };
}

export const getDrivers = async (offset: number = 0): Promise<DriverData[]> => {
  const {
    data: {
      MRData: {
        DriverTable: { Drivers },
      },
    },
  } = await instance.get(`/f1/drivers.json?limit=10&offset=${offset * 10}`);

  return new Promise<DriverData[]>((resolve, reject) => {
    resolve(Drivers);
    reject(new Error("Error"));
  });
};

export const getRaceSchedule = async (): Promise<RaceData[]> => {
  const {
    data: {
      MRData: {
        RaceTable: { Races },
      },
    },
  } = await instance.get(`/f1/current.json`);

  return new Promise<RaceData[]>((resolve, reject) => {
    resolve(Races);
    reject(new Error("Error"));
  });
};
