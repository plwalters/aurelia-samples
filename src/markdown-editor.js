import {customElement} from 'aurelia-framework';

@customElement('markdown-editor')
export class MarkdownEditor{
  constructor(){
    this.mymarkdowntext = '#hey \n ##you';
  }
}
