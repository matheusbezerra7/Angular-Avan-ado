import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContadorComponent } from "./contator.component";


describe('ContadorComponent', () => {
    let component: ContadorComponent;
    let fixture: ComponentFixture<ContadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContadorComponent
            ]
        });

        fixture = TestBed.createComponent(ContadorComponent);
        component = fixture.componentInstance;

        component.valor = 0;
    });

    it('Não deve incrementar abaixo do valor permitido', () => {
        component.incrementar()
        expect(component.valor).toBe(1);
        component.decrementar()
        expect(component.valor).toBe(0);
        component.decrementar()
        expect(component.valor).toBe(0);
    });

    it('Não deve incrementar acima do valor permitido', () => {
        for(let i = 0; i < 200; i++) {
            component.incrementar();
        }
        expect(component.valor).toBe(100);
    });

});