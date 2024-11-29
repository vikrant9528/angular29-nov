import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appClrchng]'
})
export class ClrchngDirective {

  constructor(public el:ElementRef) {
    // el.nativeElement.style.color = "green";
    // el.nativeElement.style. = "hello"   }
}
}
