import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-checkbox',
  template: `
    <label class="custom-checkbox">
      <input type="checkbox" [checked]="checked">
      <span></span>
    </label>
  `,
  styles: [
    `
    .custom-checkbox {
      padding: 1px;
      display: block;
      width: 35px;
      height: 35px;
    }

    .custom-checkbox input {
      display: none;
    }

    .custom-checkbox span {
      border: 1px solid #C9C9C9;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .custom-checkbox:hover span,
    .custom-checkbox input:checked + span {
      border: 1px solid #B7C876;
    }

    // .custom-checkbox input:checked + span:before {
    //   content: "✔";
    //   font-size: 1em;
    //   color: #B7C876;
    // }

    .custom-checkbox input:checked + span:before {
      content: "";
      position: relative;
      top: -2px;
      left: -7px;
      width: 6px;
      height: 15px;
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
      border-right: 2px solid #B7C876;
      border-bottom: 2px solid #B7C876;
      transform: rotate(40deg);
      backface-visibility: hidden;
      transform-origin: 100% 100%;
      -webkit-transform-origin: 100% 100%;
      -webkit-backface-visibility: hidden;
      -webkit-transform: rotate(40deg);
    }
    `
  ]
})
export class CustomCheckboxComponent  {
  @Input() checked: boolean;
}
