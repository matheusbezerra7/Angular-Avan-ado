import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRoutingModule } from "./admin.route";



@NgModule({
    declarations:[
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    exports:[],
    providers:[]
})

export class AdminModule {}