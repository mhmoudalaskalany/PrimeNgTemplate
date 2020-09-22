import { NgModule } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        TreeModule,
        ToastModule,
        ButtonModule
    ],
    exports: [
        TreeModule,
        ToastModule,
        ButtonModule
    ]
})
export class PrimeModule { }
