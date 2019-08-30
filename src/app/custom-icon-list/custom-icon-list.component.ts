import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-icon-list',
  template: `
    <div class="icon">
      <div class="icon-container">
        <div class="icon-box"></div>
        <div class="icon-line"></div>
      </div>
      <div class="icon-container">
        <div class="icon-box"></div>
        <div class="icon-line"></div>
      </div>
      <div class="icon-container">
        <div class="icon-box"></div>
        <div class="icon-line"></div>
      </div>
      <div class="icon-container">
        <div class="icon-box"></div>
        <div class="icon-line"></div>
      </div>
    <div>
  `,
  styles: [
    `
    div.icon-container {
      position: relative;
      display: flex;
      align-items: center;
      padding: 1px;
    }

    div.icon-box {
      display: inline-block;
      width: 21px;
      height: 20px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 2px solid #C9C9C9;
      border-radius: 4px;
      opacity: 1;
    }

    div.icon-line {
      margin-left: 5px;
      display: inline-block;
      width: 67px;
      height: 0px;
      border: 2px solid #C9C9C9;
      opacity: 1;
    }
    `
  ]
})
export class CustomIconListComponent  {
}
