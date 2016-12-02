import { Component, OnInit } from '@angular/core';

import { SmeupService } from './smeup.service';

import { Comp } from './comp/comp';

@Component({
  selector: 'su-smeup',
  templateUrl: './smeup.component.html',
  styleUrls: ['./smeup.component.scss']
})
export class SmeupComponent implements OnInit {

  fun: string = 'F(EXD;*SCO;) 2(MB;SCP_SCH;X1CRU) SS(CONAP())';

  comp: Comp;

  constructor(private smeupService: SmeupService) { }

  ngOnInit() {

    this.smeupService.getComp(this.fun).subscribe(v => this.comp = v);
  }
}
