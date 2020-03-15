export interface Person {
    id : number;
    nachname : string;
    gebName? : string
    vorname : string;
    gDay?: number;
    gMonth?: number;
    gYear?:number;
    gebDatum? : Date;
    sDay?: number;
    sMonth?: number;
    sYear?:number;
    sterbDatum? : Date;
    partner? : string;
    partnerId? : number;
    married? :boolean;
    imageSrc? : string;
    male : boolean;
    adress1? : string;
    adress2? : string;
    tel? : string;

}
