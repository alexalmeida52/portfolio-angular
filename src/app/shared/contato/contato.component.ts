import { Component, OnInit } from '@angular/core';
import axios from 'axios';
declare var $ : any;

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  data: any = {};
  mensagem = false;
  email = false;
  nome = false;
  
  constructor() { }
  public verificarCampos(data=null){
    if(data != null){
      if(data == "data.nome"){
        console.log('Nome alterado');
        this.data.nome == null || this.data.nome == '' ? this.nome = true : this.nome = false;
        return null;
      } else if(data == "data.email"){
        console.log('Email alterado');
        this.data.email == null || this.data.email == ''|| !this.validateEmail(this.data.email) ? this.email = true : this.email = false;
        return null;
      } else if(data == "data.mensagem"){
        console.log('Mensagem alterado = ' + this.data.mensagem + ' ' + this.mensagem);
        this.data.mensagem == null || this.data.mensagem == '' ? this.mensagem = true : this.mensagem = false;
        return null;
      }
    }
    if(this.data.nome == null){
      this.nome = true;
    } else {
      this.nome = false;
    }
    if(this.data.email == null || !this.validateEmail(this.data.email)){
      this.email = true;
    } else {
      this.email = false;
    }
    if(this.data.mensagem == null){
      this.mensagem = true;
    } else {
      this.mensagem = false;
    }
    return this.nome || this.email || this.mensagem ? true : false;
  }
  verificar: boolean = false;
  enviarMensagem(data){
    if(this.verificarCampos()){
      this.myFunction("erro-snackbar");
      return 0;
    } 
    console.log('Dados enviados', data);

    return new Promise((resolve, reject) => {
      axios.post('/enviar/mensagem', data)
      .then(res => {
        this.myFunction("snackbar");
        console.log('Mensgem enviada com sucesso.');
        this.data = {};
        resolve('Mensgem enviada com sucesso.');
      })
      .catch(() => {
        console.log('problema na requisição');
        this.myFunction("erro-snackbar");
      });
    });
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  public myFunction(snack) {
    // Get the snackbar DIV
    var x = document.getElementById(snack);
  
    // Add the "show" class to DIV
    x.className = "snackbar show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  watch(){
    
    $('#name').keyup(function() {
      if($('#name').val() != null && $('#name').val() != ''){
        $('#name').removeClass('alert-input')
        console.log($('#email').hasClass('alert-input'));
        if(!$('#email').hasClass('alert-input') && !$('#message').hasClass('alert-input') ){
          $('.main-btn').removeClass('btn btn-outline-danger alert-input');          
        }
      } else {
        $('#name').addClass('alert-input');
        $('.main-btn').addClass('btn btn-outline-danger alert-input')

      }
    });

    $('#email').keyup(function() {
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      if(validateEmail($('#email').val())){
        console.log('email valido');
        $('#email').removeClass('alert-input');
        if(!$('#name').hasClass('alert-input') && !$('#message').hasClass('alert-input') ){
          $('.main-btn').removeClass('btn btn-outline-danger alert-input');          
        } 
      } else {
        $('#email').addClass('alert-input');
        $('.main-btn').addClass('btn btn-outline-danger alert-input')
      }
    });

    $('#message').keyup(function() {
      if($('#message').val() != null && $('#message').val() != ''){
        $('#message').removeClass('alert-input');
        if(!$('#email').hasClass('alert-input') && !$('#name').hasClass('alert-input') ){
          $('.main-btn').removeClass('btn btn-outline-danger alert-input');          
        }
      } else {
        $('#message').addClass('alert-input');
        $('.main-btn').addClass('btn btn-outline-danger alert-input');
      }
    });
  }
  ngOnInit() {
    this.watch();
  }

}
