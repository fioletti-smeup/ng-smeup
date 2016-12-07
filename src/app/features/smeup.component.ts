import { Component, OnInit } from '@angular/core';

import { SmeupService } from './smeup.service';

import { Comp } from './comp/comp';
import { ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'su-smeup',
    templateUrl: './smeup.component.html',
    styleUrls: ['./smeup.component.css'],
})
export class SmeupComponent implements OnInit {
    // TODO
    startFun: string = 'F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())';
    // startFun: string = 'F(EXB;B£SER_46;WRK.SCP) 1(MB;SCP_SET;WETEST_EXB) 2(;;MAT_013)';
    fun = this.startFun;
    form: FormGroup;
    comp: Comp;
    date: Date;

    constructor(
        private smeupService: SmeupService,
        private appRef: ApplicationRef,
        fb: FormBuilder
    ) {
        this.form = fb.group({
            fun: this.startFun
        });
    }

    ngOnInit() {
        console.log('Module is hot? ' + !!module.hot);
        this.smeupService
            .getComp(this.form.get('fun').value)
            .subscribe(
            v => {
                this.comp = v;
                // TODO remove this workaround
                if (module.hot) this.appRef.tick();
            });
    }

    getComp(): void {

        this.smeupService
            .getComp(this.form.get('fun').value)
            .subscribe(
            v => this.comp = v);
    }
}
