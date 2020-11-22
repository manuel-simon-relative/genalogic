import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Person } from '../../../_interface/person';
import { GlobalConstants } from '../../../_service/globalconstants.service';


@Component({
  selector: 'app-template-personshower',
  templateUrl: './template-personshower.component.html',
  styleUrls: ['./template-personshower.component.sass']
})
export class TemplatePersonshowerComponent implements OnInit, OnChanges {
  public $childs: Array<Person> = [];
  public $parents: Array<Person> = [];
  public selectedPerson$ : Person;
  public father$ : Person;
  public mother$ : Person;

  @Input() selectedPersonId : any;
  @Output('changeSelectedPerson') changeSelectedPersonEvent: EventEmitter<any> = new EventEmitter<any>();
  


  constructor() {   

 }


  ngOnInit() {

    }

    public onChangeSelectedPerson(selected: number) {

      this.changeSelectedPersonEvent.emit(selected);
    }
    ngOnChanges(){
      this.$parents = [];
      this.$childs = [];
      //selectierte Person finden
    for (var forPerson of GlobalConstants.personList) {
      if (forPerson.id == this.selectedPersonId) {
        this.selectedPerson$ = forPerson;
      }
    }
    

    //Kinder finden
    for (var i of GlobalConstants.relParentChild) {
      if (this.selectedPersonId == i.parentId) {
        for (var forChild of GlobalConstants.personList) {
          if (i.childId == forChild.id) {
            this.$childs.push(forChild)
          }
        }
      }
    }
    this.$childs.sort(comparePersonByBirthDate);
    //Eltern finden
    var foundFather:Boolean = false;
    var foundMother:Boolean = false;

    for (var i of GlobalConstants.relParentChild) {
      if (this.selectedPersonId == i.childId && i.real) {
        for (var forFather of GlobalConstants.personList) {
          if (i.parentId == forFather.id && forFather.male) {
            foundFather = true;
            this.father$ = forFather;
          }
        }
      }
    }
    for (var i of GlobalConstants.relParentChild) {
      if (this.selectedPersonId == i.childId && i.real) {
        for (var forMother of GlobalConstants.personList) {
          if (i.parentId == forMother.id && !forMother.male) {
            foundMother = true;
            this.mother$ = forMother;
          }
        }
      }
    }
    if (!foundFather) {
      for (var i of GlobalConstants.relParentChild) {
        if (this.selectedPersonId == i.childId) {
          for (var forFather of GlobalConstants.personList) {
            if (i.parentId == forFather.id && forFather.male) {
              foundFather = true;
              this.father$ = forFather;
            }
          }
        }
      }
    }

    if (!foundMother) {
      for (var i of GlobalConstants.relParentChild) {
        if (this.selectedPersonId == i.childId) {
          for (var forMother of GlobalConstants.personList) {
            if (i.parentId == forMother.id && !forMother.male) {
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
        name: "unbekannt",
        lastName: "unbekannt",
        male: true,
        imageSrc : "../../../assets/pics/jpg/placeholderMan.jpg"
      }
    }

    if (!foundMother) {
      this.mother$ = {
        id: 0,
        name: "unbekannt",
        lastName: "unbekannt",
        male: false,
        imageSrc : "../../../assets/pics/jpg/placeholderWoman.jpg"       
      }
    }
    this.$parents.push(this.father$);
    this.$parents.push(this.mother$); 
    this.$parents.sort(comparePersonByBirthDate);
      
   
    }
  }


  function comparePersonByBirthDate(person1: Person, person2: Person): number {
    var result: number = 0;
    if (person1.birthYear == person2.birthYear) {
      if (person1.birthMonth == person2.birthMonth) {
        if (person1.birthDay == person2.birthDay) {
          result = 0
        }
        if (person1.birthDay > person2.birthDay) result = -1;
        if (person1.birthDay < person2.birthDay) result = 1;
      }
      if (person1.birthMonth > person2.birthMonth) result = -1;
      if (person1.birthMonth < person2.birthMonth) result = 1;
    }
    if (person1.birthYear > person2.birthYear) result = -1;
    if (person1.birthYear < person2.birthYear) result = 1;

    return result;
  }