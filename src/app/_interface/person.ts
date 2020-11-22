export interface Person {
    id : number;
    lastName : string;
    birthName? : string;
    name : string;

    birthDay?: number;
    birthMonth?: number;
    birthYear?:number;

    deathDay?: number;
    deathMonth?: number;
    deathYear?:number;

    partner? : string;
    partnerId? : number;
    married? :boolean;

    imageSrc? : string;

    male : boolean;

    adress1? : string;
    adress2? : string;

    tel? : string;

}
