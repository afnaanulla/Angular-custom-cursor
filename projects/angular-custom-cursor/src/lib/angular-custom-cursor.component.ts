import { Component, Input, AfterViewInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-angular-custom-cursor',
  template: `
    <div id="cursor">
      <img [src]="cursorImage" />
    </div>
  `,
  styles: [`
    #cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      pointer-events: none;
      transition: transform 0.05s linear;
      z-index: 9999;
    }

    #cursor img {
      width: 60%;
      height: 60%;
      transform-origin: center;
      transition: transform 0.1s linear;
    }
  `]
})
export class AngularCustomCursorComponent implements AfterViewInit, OnDestroy {
  @Input() cursorImage: string = 'https://res.cloudinary.com/djli98uhu/image/upload/v1740763067/custom-cursor/brqrrpil8cc0rjxps4vr.png';

  private INTERVAL_POSITION = 5;
  private INTERVAL_ROTATION = 100;
  private lastCursorPos = { x: -999, y: -999 };
  private currentCursorPos = { x: -999, y: -999 };
  private lastCursorAngle = 0;
  private cursorAngle = 0;
  private cursorEl!: HTMLElement;
  private cursorImageEl!: HTMLImageElement;
  private mouseMoveListener!: () => void;
  private positionInterval!: any;
  private rotationInterval!: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.cursorEl = this.el.nativeElement.querySelector('#cursor')!;
    this.cursorImageEl = this.cursorEl.querySelector('img') as HTMLImageElement;

    if (!this.cursorEl || !this.cursorImageEl) {
      console.error('Cursor elements not found!');
      return;
    }

    this.mouseMoveListener = this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
      this.currentCursorPos = { x: event.clientX, y: event.clientY };
    });

    this.positionInterval = setInterval(() => this.setCurrentCursorProps(), this.INTERVAL_POSITION);

    this.rotationInterval = setInterval(() => {
      const delt = {
        x: this.lastCursorPos.x - this.currentCursorPos.x,
        y: this.lastCursorPos.y - this.currentCursorPos.y
      };

      if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;

      this.cursorAngle = Math.atan2(delt.y, delt.x) * (180 / Math.PI);

      this.setCurrentCursorProps();
      this.lastCursorPos = { ...this.currentCursorPos };
      this.lastCursorAngle = this.cursorAngle;
    }, this.INTERVAL_ROTATION);
  }

  private setCurrentCursorProps(): void {
    this.cursorEl.style.transform = `translate(${this.currentCursorPos.x}px, ${this.currentCursorPos.y}px)`;

    while (Math.abs(this.lastCursorAngle - this.cursorAngle) > 180) {
      if (this.cursorAngle > this.lastCursorAngle) {
        this.cursorAngle -= 360;
      } else if (this.cursorAngle < this.lastCursorAngle) {
        this.cursorAngle += 360;
      }
    }

    this.cursorImageEl.style.transform = `rotate(${this.cursorAngle - 90}deg)`;
  }

  ngOnDestroy(): void {
    if (this.mouseMoveListener) this.mouseMoveListener();
    if (this.positionInterval) clearInterval(this.positionInterval);
    if (this.rotationInterval) clearInterval(this.rotationInterval);
  }
}
