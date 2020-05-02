import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-viewer-arrow',
  templateUrl: './viewer-arrow.component.html',
  styleUrls: ['./viewer-arrow.component.scss']
})
export class ViewerArrowComponent {
  @Output() prev: EventEmitter<void> = new EventEmitter<void>();
  @Output() next: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  onPrev(e: Event) {
    this.prev.emit();
  }

  onNext(e: Event) {
    this.next.emit();
  }

  onList() {

  }

}
