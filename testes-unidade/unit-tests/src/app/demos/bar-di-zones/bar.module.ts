import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarComponent
  ],
  providers: [

  ],
  exports: [
    BarComponent
  ]
})
export class BarModule {
  // nome do metodo não é obrigatorio pode ser qual voce quiser
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManualUnidade', useValue: config },
        { provide: BAR_UNIDADE_CONFIG, useValue: config },
      ]
    }
  }


  static forChild() {

  }
}