import { Component, OnInit } from '@angular/core';
import { Person } from '../../_interface/person';


@Component({
  selector: 'app-template-personshower',
  templateUrl: './template-personshower.component.html',
  styleUrls: ['./template-personshower.component.sass']
})
export class TemplatePersonshowerComponent implements OnInit {
  public $childs: Array<Person> = [];
  public $parents: Array<Person> = [];
  public selectedPerson$ : Person;
  public child1$ : Person;
  public child2$ : Person;
  public parent1$ : Person;
  public parent2$ : Person;


  constructor() {
    this.selectedPerson$ = {
      id: 1,
      vorname: "Manuel",
      nachname: "Simon",
      gebDatum: new Date('1987-05-27'),
      sterbDatum: "",
      imageSrc: "../../../assets/data/pics/01.jpeg",
      partner: "Daniela Simon",
      partnerKind: 1,
      sex: "m" 
    }
   
    this.child1$ = {
     id: 2,
     vorname: "Nathaniel",
     nachname: "Simon",
     gebDatum: new Date('2012-12-06'),
     sterbDatum: "",
     imageSrc: "../../../assets/data/pics/02.jpeg",
     partner: "",
     partnerKind: 0,
     sex: "m"
    }
    this.child2$ = {
      id: 3,
      vorname: "Mathilda",
      nachname: "Simon",
      gebDatum: new Date('2018-01-30'),
      sterbDatum: "",
      imageSrc: "../../../assets/data/pics/03.jpeg",
      partner: "",
      partnerKind: 0,
      sex: "w"
     }
     this.$childs.push(this.child1$);
     this.$childs.push(this.child2$);

     this.parent1$ = {
      id: 4,
      vorname: "Stefanie",
      nachname: "Richter",
      gebDatum: new Date('1967-08-08'),
      sterbDatum: "",
      imageSrc: "../../../assets/data/pics/04.jpeg",
      partner: "Jan Richter",
      partnerKind: 1,
      sex: "w"
     }
     this.parent2$ = {
      id: 5,
      vorname: "Michael",
      nachname: "Simon",
      gebDatum: new Date('1968-02-05'),
      sterbDatum: "",
      imageSrc: "../../../assets/data/pics/05.jpeg",
      partner: "Yvonne Simon",
      partnerKind: 1,
      sex: "m"
     }

     this.$parents.push(this.parent1$);
     this.$parents.push(this.parent2$);


    

 }

  ngOnInit() {
  }

}
