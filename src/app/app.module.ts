import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './shared/blog/blog.component';
import { ContatoComponent } from './shared/contato/contato.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';
import { ServicosComponent } from './shared/servicos/servicos.component';
import { SobreComponent } from './shared/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    PortfolioComponent,
    ServicosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
