import { z } from "zod";
import { RoundZ, SessionZ } from "./prisma";

export const seriesIds = [
    "F1",
    "F2",
    "F3",
    "FE",
    "INDY",
    "W",
    "WEC",
    "F1A",
] as const;
export const SeriesIdZ = z.enum(seriesIds);
export type SeriesId = z.infer<typeof SeriesIdZ>;

export const SessionTypeZ = z.enum([
    "PRACTICE",
    "QUALIFYING",
    "RACE",
    "SPRINT",
    "SHAKEDOWN",
]);
export type SessionType = z.infer<typeof SessionTypeZ>;

export enum CircuitTitle {
    Miami = "Miami International Autodrome",
    Bahrain = "Bahrain International Circuit",
    Hungaroring = "Hungaroring",
    Spa = "Circuit de Spa-Francorchamps",
    Monza = "Monza Circuit",
    AbuDhabi = "Yas Marina Circuit",
    Mexico = "Autódromo Hermanos Rodríguez",
    Monaco = "Circuit de Monaco",
    GillesVilleneuve = "Circuit Gilles Villeneuve",
    Imola = "Imola Circuit",
    Jeddah = "Jeddah Corniche Circuit",
    AlbertPark = "Albert Park Circuit",
    Barcelona = "Circuit de Barcelona-Catalunya",
    Baku = "Baku City Circuit",
    RedBull = "Red Bull Ring",
    Silverstone = "Silverstone Circuit",
    PaulRicard = "Circuit Paul Ricard",
    Zandvoort = "Circuit Zandvoort",
    COTA = "Circuit of the Americas",
    Singapore = "Marina Bay Street Circuit",
    Suzuka = "Suzuka International Racing Course",
    Interlagos = "Interlagos Circuit",
    StPetersburg = "St. Petersburg, Florida",
    Texas = "Texas Motor Speedway",
    LongBeach = "Long Beach, California",
    Barber = "Barber Motorsports Park",
    Indy = "Indianapolis Motor Speedway",
    BelleIsle = "Belle Isle Park (Michigan)",
    RoadAmerica = "Road America",
    MidOhio = "Mid-Ohio Sports Car Course",
    Toronto = "Grand Prix of Toronto",
    Iowa = "Iowa Speedway",
    Nashville = "Nashville Street Circuit",
    Gateway = "Gateway Motorsports Park",
    Portland = "Portland International Raceway",
    LagunaSeca = "WeatherTech Raceway Laguna Seca",
    Rome = "Circuito Cittadino dell'EUR",
    Berlin = "Tempelhof Airport Street Circuit",
    Jakarta = "Jakarta International e-Prix Circuit",
    Marrakesh = "Circuit International Automobile Moulay El Hassan",
    NewYork = "Brooklyn Street Circuit",
    London = "ExCeL London",
    Seoul = "Seoul ePrix",
    LeMans = "Circuit de la Sarthe",
    Fuji = "Fuji Speedway",
}

export const NextRaceZ = SessionZ.pick({
    startDate: true,
    endDate: true,
}).merge(z.object({ round: RoundZ.pick({ title: true, series: true }) }));
export type NextRace = z.infer<typeof NextRaceZ>;
