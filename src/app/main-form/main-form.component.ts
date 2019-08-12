import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service'

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  flag:boolean = true;
  otherflag:boolean = false;

  dataEncuesta:object[]= [];

  dataLocalStorage:any;


  bootcampAnswer:string;
  temarioAnswer:string;
  avanceAnswer:string;
  practiseAnswer:string;
  headTeacherAnswer:string;
  supportTeacherAnswer:string;

  //answer0:string;
  //answer1:string;


  
  
  test(){

    /* esto es para que al desordenar el array me queede el envio al backend con los nombres de las preguntas
    let newData:object[] = [{

      0 : {"titulo": this.dataEncuesta[0], "answer": this.answer0},
      
    }]*/

    let sendData:object = {

      "¿Qué Bootcamp?" : this.bootcampAnswer,
      "¿consideras que el temario?" : this.temarioAnswer,
      "¿Consideras que estás avanzando al ritmo adecuado?" : this.avanceAnswer,
      "¿Estás llevando a la práctica la teoría" : this.practiseAnswer,
      "¿El Head Teacher aclara tus dudas?" : this.headTeacherAnswer,
      "¿El Teacher Assistant aclara tus dudas?" : this.supportTeacherAnswer
      
    }

    this._mainService.post("https://cors-anywhere.herokuapp.com/https://formvalidation.free.beeceptor.com/awesome",sendData)
    .subscribe((response) => {
      //console.log(response)
    })

    this.dataLocalStorage = localStorage.setItem("answers", JSON.stringify(sendData));
    
    //console.log(sendData)
    

  }

  constructor(public _mainService : MainService) { 

    let dataLocal:object[] = JSON.parse(localStorage.getItem("answers"))

    if(dataLocal !== null){
      this.dataLocalStorage = dataLocal
      this.otherflag = true
      //alert('Esta encuesta ya la has respondido')
      localStorage.clear()

    } else{

    this._mainService.get('https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/JoseHervas/fullstack-bootcamp/master/Contents/01-Front-end/03-JavaScript/02-jQuery/03-AJAX/encuesta.json').subscribe((response) => {

    

    this.dataEncuesta = response["questions"]

    //random order
    //this.dataEncuesta.sort(function() { return 0.5 - Math.random() })

    
    //console.log(this.dataEncuesta)
  
  })

  }//end if

  }



  ngOnInit() {

   
  }

}
