import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppCommonService } from 'src/app/app-services/app-common.service';
import { DateUtils } from 'src/app/app-utilities/app.utilities';
import { TemplateList } from '../role.models';

@Component({
  selector: 'app-quarterly',
  templateUrl: './quarterly.component.html',
  styleUrls: ['./quarterly.component.css']
})
export class QuarterlyComponent implements OnInit {

  @Input() quartelyTemplateList: TemplateList[] = [];
  @Output() child2ParentDataTransfer = new EventEmitter<any>();
  public templateName: string = '';
  constructor(private appCommonService: AppCommonService) { }

  ngOnInit(): void {
    this.templateName = this.quartelyTemplateList[0].template;
  }

  checkStatus(status: string) {
    return this.appCommonService.getColorForStatus(status);
  }

  dateConvert(date: string) {
    return DateUtils.getUTCFormatTime(date);
  }

  child2ParentMethod() {
    let emitDataObject = {
      name : 'Andrew',
      city : 'London',
      Gender : 'Male'
    }
    this.child2ParentDataTransfer.emit(emitDataObject);
  }


}
