import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../_interface/person';
import { GlobalConstants } from '../../../_service/globalconstants.service';


@Component({
  selector: 'app-template-personshower',
  templateUrl: './template-personshower.component.html',
  styleUrls: ['./template-personshower.component.sass']
})
export class TemplatePersonshowerComponent implements OnInit {
  public $childs: Array<Person> = [];
  public $parents: Array<Person> = [];
  public selectedPerson$ : Person;
  public father$ : Person;
  public mother$ : Person;

  @Input() selectedPersonId : any;
  


  constructor() {   

 }

  ngOnInit() {
    //selectierte Person finden
    for (var forPerson of GlobalConstants.personList) {
      if (forPerson.id == this.selectedPersonId) {
        this.selectedPerson$ = forPerson;
      }
    }
    console.log(this.selectedPerson$);

    //Kinder finden
    for (var i of GlobalConstants.relPersonPerson) {
      if (this.selectedPersonId == i.parentId) {
        for (var forChild of GlobalConstants.personList) {
          if (i.childId == forChild.id) {
            this.$childs.push(forChild)
          }
        }
      }
    }
    this.$childs.sort(comparePerson);
    //Eltern finden
    var foundFather:Boolean = false;
    var foundMother:Boolean = false;

    for (var i of GlobalConstants.relPersonPerson) {
      if (this.selectedPersonId == i.childId && i.real) {
        for (var forFather of GlobalConstants.personList) {
          if (i.parentId == forFather.id && forFather.sex == "m") {
            foundFather = true;
            this.father$ = forFather;
          }
        }
      }
    }
    for (var i of GlobalConstants.relPersonPerson) {
      if (this.selectedPersonId == i.childId && i.real) {
        for (var forMother of GlobalConstants.personList) {
          if (i.parentId == forMother.id && forMother.sex == "w") {
            foundMother = true;
            this.mother$ = forMother;
          }
        }
      }
    }
    if (!foundFather) {
      for (var i of GlobalConstants.relPersonPerson) {
        if (this.selectedPersonId == i.childId) {
          for (var forFather of GlobalConstants.personList) {
            if (i.parentId == forFather.id && forFather.sex == "m") {
              foundFather = true;
              this.father$ = forFather;
            }
          }
        }
      }
    }

    if (!foundMother) {
      for (var i of GlobalConstants.relPersonPerson) {
        if (this.selectedPersonId == i.childId) {
          for (var forMother of GlobalConstants.personList) {
            if (i.parentId == forMother.id && forMother.sex == "w") {
              foundMother = true;
              this.mother$ = forMother;
            }
          }
        }
      }  
    }

    if (!foundFather) {
      this.father$ = {
        id: 0,
        vorname: "unbekannt",
        nachname: "unbekannt",
        sex: "m",
        gebDatum: new Date('1900-01-01'),
        imageSrc : "../../../assets/pics/jpg/placeholderMan.jpg"
      }
    }

    if (!foundMother) {
      this.mother$ = {
        id: 0,
        vorname: "unbekannt",
        nachname: "unbekannt",
        sex: "w",
        gebDatum: new Date('1900-01-01'),
        imageSrc : "../../../assets/pics/jpg/placeholderWoman.jpg"       
      }
    }
    console.log(this.father$);
    console.log(this.mother$);
    console.log(this.$childs)
    this.$parents.push(this.father$);
    this.$parents.push(this.mother$);  
    };

  }


  function comparePerson(person1: Person, person2: Person): number {
    if (person1.gebDatum > person2.gebDatum) {
      return 1;
    } else return -1;
  }