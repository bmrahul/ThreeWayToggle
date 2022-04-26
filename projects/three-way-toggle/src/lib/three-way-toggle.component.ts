import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'three-way-toggle',
  template: `
    <ng-container>
      <div class="form-wrap">
        <div class="form-group">
          <form>
            <fieldset id="{{idValue}}">
              <label>{{labelValue}}</label>
              <div class="pressed-bg">
                <div class="switch-toggle switch-3 switch-candy" [ngClass]="{
                          na: switchtoggle == 'na',
                          yes: switchtoggle == 'yes',
                          no: switchtoggle == 'no'
                        }">
                  <div class="tri-switch-wrap">
                    <input id="no" name="state-{{idValue}}" value="no" [checked]="switchtoggle === 'no'" type="radio"
                      (change)="onSelectionChange('no')" [(ngModel)]="switchtoggle">
                    <label for="no" class="for-no"><i class="fa fa-check"></i></label>
                  </div>
                  <div class="tri-switch-wrap">
                    <input id="na" name="state-{{idValue}}" value="na" [checked]="switchtoggle === 'na'" type="radio"
                      checked="checked" (change)="onSelectionChange('na')" [(ngModel)]="switchtoggle">
                    <label for="na"></label>
                  </div>
                  <div class="tri-switch-wrap">
                    <input id="yes" name="state-{{idValue}}" value="yes" [checked]="switchtoggle === 'yes'" type="radio"
                      (change)="onSelectionChange('yes')" [(ngModel)]="switchtoggle">
                    <label for="yes"><i class="fa fa-times"></i></label>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css);

      .no {
          background-image: linear-gradient(to right, #8f2b2361, #ff4f6bde);
          -webkit-transition: all 300ms;
          -moz-transition: all 300ms;
          transition: all 300ms;
      }

      .yes {
          background-image: linear-gradient(to right, #01bf00cc, #96e994);
          -webkit-transition: all 300ms;
          -moz-transition: all 300ms;
          transition: all 300ms;
      }

      .na {
          background-image: linear-gradient(to right, #01bf00cc, #ff4f6bde);
          -webkit-transition: all 300ms;
          -moz-transition: all 300ms;
          transition: all 300ms;
      }

      .pressed-bg {
          border: double 3px #bfbfbf24;
          border-radius: 50px;
          background-image: linear-gradient(white, white), linear-gradient(to bottom, #e7e7e7, #dfdfdf33);
          background-origin: border-box;
          display: inline-block;
          background-clip: content-box, border-box;
          box-shadow: inset 2px 2px 5px #d7d7d7;
      }

      .form-wrap {
          padding: 20px;
      }

      .switch-toggle {
          display: inline-flex;
          border-radius: 50px;
          padding: 2px;
      }

      .tri-switch-wrap,
      .pressed-bg {
          position: relative;
          display: inline-flex;
          align-items: center;
      }

      .tri-switch-wrap input {
          cursor: pointer;
          height: 1.2rem;
          width: 1.2rem;
          position: absolute;
          opacity: 0;
          z-index: 1;
      }

      .tri-switch-wrap label {
          top: 0;
          height: 1.2rem;
          width: 1.2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
      }

      .tri-switch-wrap label i {
          opacity: 0.2;
      }

      .tri-switch-wrap input:checked~label {
          background-color: #f7f7f7;
      }

      .tri-switch-wrap input:checked~label i {
          opacity: 0;
      }

      .tri-switch-wrap label:after {
          content: "";
          position: absolute;
          display: none;
      }

      fieldset {
          display: inline-block;
      }

      fieldset>label {
          display: inline-block;
          background: none;
      }
  `
  ],
  encapsulation: ViewEncapsulation.None
})
export class ThreeWayToggleComponent implements OnInit {
  idValue: any;
  switchtoggle: string = 'na';
  @Input() labelValue: string = '';
  @Output() toggleValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.idValue = this.labelValue.replace(/\s/g, "").replace("?", "");
  }

  onSelectionChange(value: any) {
    this.toggleValue.emit(this.switchtoggle);
  }
}
