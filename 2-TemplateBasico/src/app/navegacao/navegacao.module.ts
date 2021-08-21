import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";

const nevagacaoComponents = [
    MenuComponent,
    HomeComponent,
    FooterComponent
]

@NgModule({
    declarations: [
        nevagacaoComponents
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        nevagacaoComponents
    ]
})
export class NavegacaoModule {}