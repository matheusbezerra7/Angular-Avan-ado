import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgBrazil, TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { TasksComponent } from './demos/todo-list/components/tasks/tasks.component';
import { TasksIniciadasComponent } from './demos/todo-list/components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './demos/todo-list/components/tasks-finalizadas/tasks-finalizadas.component';
import { TodoModule } from './demos/todo-list/todo.module';


export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    NgBrazil,
    TextMask.TextMaskModule,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken : 'dasu9e218973812dsad'
    }),
    TodoModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
    // ImageFormaterPipe - pode ser aqui ou no componente
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
