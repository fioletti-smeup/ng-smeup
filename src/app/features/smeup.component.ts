import { Component, OnInit } from '@angular/core';

import { SmeupService } from './smeup.service';

import { Comp } from './comp/comp';
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'su-smeup',
  templateUrl: './smeup.component.html',
  styleUrls: ['./smeup.component.css'],
})
export class SmeupComponent implements OnInit {

  fun: string = 'F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())';

  comp: Comp;
  date: Date;

  constructor(private smeupService: SmeupService, private appRef: ApplicationRef) {
  }

  ngOnInit() {
    this.getComp();
  }

  getComp(): void {

    this.smeupService
      .getComp(this.fun)
      .subscribe(
        v => { this.comp = v; /* TODO remove this workaround */this.appRef.tick(); });
  }
}
