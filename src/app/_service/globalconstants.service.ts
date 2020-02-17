import { Injectable } from '@angular/core';
import { Person } from '../_interface/person';
import { Event } from '../_interface/event';
import { RelPersonPerson } from '../_interface/rel-person-person';
import { RelEventPerson } from '../_interface/rel-event-person';




@Injectable({
  providedIn: 'root'
})
export class GlobalConstants {

  public static personList: Array<Person> = [{
      id: 1,
      vorname: "Manuel",
      nachname: "Simon",
      gebDatum: new Date('1987-05-27'),
      imageSrc: "../../../assets/data/pics/p01.jpeg",
      partner: "Daniela Simon",
      married: true,
      male: true, 
      partnerId: 13,
      adress1: "Gohliserstraße 30",
      adress2: "01159 Dresden"
    },
    {
      id: 2,
      vorname: "Nathaniel",
      nachname: "Simon",
      gebDatum: new Date('2012-12-06'),
      imageSrc: "../../../assets/data/pics/p02.jpeg",
      partner: "",
      married: false,
      male: true
     },
     {
      id: 3,
      vorname: "Mathilda",
      nachname: "Simon",
      gebDatum: new Date('2018-01-30'),
      imageSrc: "../../../assets/data/pics/p03.jpeg",
      partner: "",
      married: false,
      male: false,
     },
     {
      id: 4,
      vorname: "Stefanie",
      nachname: "Richter",
      gebDatum: new Date('1967-08-08'),
      imageSrc: "../../../assets/data/pics/p04.jpeg",
      partner: "Jan Richter",
      married: true,
      male: false,
      gebName: "Odrich"
     },
     {
      id: 5,
      vorname: "Michael",
      nachname: "Simon",
      gebDatum: new Date('1968-02-05'),
      imageSrc: "../../../assets/data/pics/p05.jpeg",
      partner: "Yvonne Simon",
      married: true,
      male: true
     },
     {
      id: 6,
      vorname: "Deborah",
      nachname: "Simon",
      gebDatum: new Date('1996-03-07'),
      imageSrc: "../../../assets/data/pics/p06.jpeg",
      partner: "Konstantin Müller",
      married: false,
      male: false,
     },
     {
      id: 7,
      vorname: "Philomena",
      nachname: "Heinrich",
      gebDatum: new Date('1998-07-05'),
      imageSrc: "../../../assets/data/pics/p07.jpeg",
      partner: "Konstantin Decker",
      married: false,
      male: false,
     },
     {
      id: 8,
      vorname: "Luisa",
      nachname: "Heinrich",
      gebDatum: new Date('1993-11-13'),
      imageSrc: "../../../assets/data/pics/p08.jpeg",
      partner: "",
      partnerId: null,
      married: false,
      male: false,
     },
     {
      id: 9,
      vorname: "Konstantin",
      nachname: "Müller",
      gebDatum: new Date('1997-04-27'),
      imageSrc: "../../../assets/data/pics/p09.jpeg",
      partner: "Deborah Simon",
      married: false,
      male: true
     },
     {
      id: 10,
      vorname: "Konstantin",
      nachname: "Decker",
      gebDatum: new Date('1997-04-27'),
      imageSrc: "../../../assets/data/pics/p10.jpeg",
      partner: "Philomena Heinrich",
      married: false,
      male: true
     },
     {
      id: 11,
      vorname: "Jan",
      nachname: "Richter",
      gebDatum: new Date('1972-03-03'),
      imageSrc: "../../../assets/data/pics/p11.jpeg",
      partner: "Stefanie Richter",
      married: true,
      male: true
     },
     {
      id: 12,
      vorname: "Jonas",
      nachname: "Simon",
      gebDatum: new Date('1990-03-27'),
      imageSrc: "../../../assets/data/pics/p12.jpeg",
      partner: "",
      married: false,
      male: true
     },
     {
      id: 13,
      vorname: "Daniela",
      nachname: "Simon",
      gebDatum: new Date('1987-09-19'),
      imageSrc: "../../../assets/data/pics/p13.jpeg",
      partner: "Manuel Simon",
      married: true,
      male: false,
      gebName: "Kerber"
     },
     {
      id: 14,
      vorname: "Maximilian",
      nachname: "Nicolaus",
      gebDatum: new Date('2002-08-16'),
      imageSrc: "../../../assets/data/pics/p14.jpeg",
      partner: "",
      married: false,
      male: true
     }

    ];

    public static relPersonPerson: Array<RelPersonPerson> = [{
      id: 1,
      parentId: 1,
      childId: 2,
      real: true
    },
    {
      id: 2,
      parentId: 1,
      childId: 3,
      real: true
    },
    {
      id: 3,
      parentId: 4,
      childId: 1,
      real: true
    },
    {
      id: 4,
      parentId: 5,
      childId: 6,
      real: true
    },
    {
      id: 5,
      parentId: 5,
      childId: 1,
      real: true
    },
    {
      id: 6,
      parentId: 4,
      childId: 7,
      real: false
    },
    {
      id: 7,
      parentId: 13,
      childId: 2,
      real: true
    },
    {
      id: 8,
      parentId: 13,
      childId: 3,
      real: true
    },
    {
      id: 9,
      parentId: 4,
      childId: 8,
      real: false
    },
    {
      id: 10,
      parentId: 4,
      childId: 12,
      real: true
    },
    {
      id: 11,
      parentId: 4,
      childId: 6,
      real: true
    },
    {
      id: 12,
      parentId: 4,
      childId: 14,
      real: true
    }];

    public static eventList: Array<Event> = [{
      id: 1,
      datum : new Date("1998-06-13"),
      label: 'Mein erstes Lebensereignis',
      kind: 0
    },
    {
      id: 2,
      datum : new Date("2001-04-01"),
      label: 'ein weiteres tolles Ereignis',
      kind: 0
    },
    {
      id: 3,
      datum: new Date('2012-12-06'),
      label: "In einer kalten Winternacht kam Nathaniel im Diakonissenkrankehaus in Dresden gegen 3:00 Uhr nachts zu Welt. In dieser Nacht hat es so viel geschneit, das der Heimweg durch den Schnee in Dresden lange gedauert hat.",
      kind: 0
    },
    {
      id: 4,
      datum: new Date('2018-05-19'),
      label: "Hochzeit in Dresden von Daniela Simon geb. Kerber und Manuel Simon",
      kind: 0
    },
    {
      id: 5,
      datum: new Date('2018-01-30'),
      label: "Geburt Mathilda im Uniklinikum Dresden",
      kind: 0
    }
  ];

  public static relEventPerson: Array<RelEventPerson> = [{
    id: 1,
    idEvent: 1,
    idPerson: 1
  },
  {
    id: 2,
    idEvent: 2,
    idPerson: 1
  },
  {
    id: 3,
    idEvent: 3,
    idPerson: 1
  },
  {
    id: 4,
    idEvent: 4,
    idPerson: 1
  },
  {
    id: 5,
    idEvent: 3,
    idPerson: 13
  },
  {
    id: 5,
    idEvent: 4,
    idPerson: 13
  },
  {
    id: 6,
    idEvent: 5,
    idPerson: 1
  },
  {
    id: 7,
    idEvent: 5,
    idPerson: 13
  }

]

  constructor() { }
}
