export interface Person {
    id : number;
    nachname : string;
    gebName? : string
    vorname : string;
    gebDatum? : Date;
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
