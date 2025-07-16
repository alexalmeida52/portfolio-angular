import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  mais: boolean = true;
  plus: String = "mais trabalhos";
  works: any = [];
  count = 3;
  menos: boolean = false;
  worksAll: any = [
    {
      image: "assets/images/work/aircnc/login.JPG",
      link: "#",
      nome: "Aircnc"
    },
    {
      image: "assets/images/work/aircnc/new.JPG",
      link: "#",
      nome: "Aircnc"
    },
    {
      image: "assets/images/work/aircnc/site.JPG",
      link: "#",
      nome: "Aircnc"
    },
    {
      image: "assets/images/work/bethehero/incidents.JPG",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "assets/images/work/bethehero/incidents.JPG",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "assets/images/work/bethehero/register.JPG",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "assets/images/work/bethehero/logon.PNG",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "assets/images/work/bethehero/app-detail.png",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "assets/images/work/bethehero/app-incidents.png",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "assets/images/work/bethehero/splash.png",
      link: "https://bthehero.herokuapp.com",
      nome: "Aplicativo Be The Hero"
    },
    {
      image: "https://lh3.googleusercontent.com/7GbcTus2J_jp7NPXdrpfSscufwil-O8xY78rirDem7bWbXBa5WxRl_fhxxPAbAVfVg=w1360-h657-rw",
      link: "https://play.google.com/store/apps/details?id=com.ionicframework.bomedicoapp450858",
      nome: "Aplicativo Bomédico"
    },
    {
      image: "https://lh3.googleusercontent.com/Tu1WRoc-E5FHvKc3TfnlFHQ7ZUnOVJGJ6Ft5apJgvQDF7aIGfiBjjNmBMOYHWsN_7va2=w1360-h657-rw",
      link: "https://play.google.com/store/apps/details?id=com.ionicframework.bomedicoapp450858",
      nome: "Aplicativo Bomédico"
    },
    {
      image: "https://lh3.googleusercontent.com/9siQCeLcBTgGhJVrtc6AISSp4DC9dAyfgmikqCESA886bIrWk3boSeYjDFvn2ui9ol0=w1360-h657-rw",
      link: "https://play.google.com/store/apps/details?id=com.ionicframework.bomedicoapp450858",
      nome: "Aplicativo Bomédico"
    },
    {
      image: "assets/images/work/sistema-bomedico.PNG",
      link: "https://bomedico.com.br",
      nome: "BackOffice"
    },
    {
      image: "assets/images/work/sistema-bomedico-dash.PNG",
      link: "https://bomedico.com.br",
      nome: "BackOffice"
    },
    {
      image: "assets/images/work/sistema-bomedico-estatisticas.PNG",
      link: "https://bomedico.com.br",
      nome: "BackOffice"
    },
    {
      image: "assets/images/work/bethehero/modulo-local.jpg",
      link: "https://bomedico.com.br",
      nome: "Módulo de Conexão Local"
    },
  ];
  constructor() { }
  public maisTrabalhos(){
    this.mais = this.mais ? false : true;
    this.plus = this.mais ? "menos" : "mais trabalhos"
  }
  public loadMore(){
    this.count += 3; 
    this.menos = true;
    console.log('Valor de count :'+ this.count);
    for( let i = this.count; i < this.count + 3; i++){
      console.log(this.worksAll.length +' = '+ i);
      if( this.worksAll.length <= i){
        this.mais = false;
        return;
      } 
      this.works.push(this.worksAll[i]);
      // this.mais = false;
      
    }
  }
  public loadLess(){
    this.works = [];
    this.count = 0; 
    for(let i = 0; i < 6; i++){
      this.works.push(this.worksAll[i]);
    }
    this.menos = false;
    this.mais = true;

  }
  ngOnInit() {
    for(let i = 0; i < 6; i++){
      this.works.push(this.worksAll[i]);
    }
  }
}
