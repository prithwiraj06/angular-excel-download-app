import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as Excel from 'xlsx';
@Injectable({
  providedIn: 'root'
})

export class ExcelDownloadService {
  EXCEL_TYPE: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION: string = '.xlsx';

  public exportAsExcelFile(excelData: any[], excelFileName: string, sheetName: string[]) {
    const worksheet: Excel.WorkSheet = Excel.utils.json_to_sheet(excelData);
    //update header name 
    var range = Excel.utils.decode_range(worksheet['!ref']);
    for (var C = range.s.r; C <= range.e.r; ++C) {
      var address = Excel.utils.encode_col(C) + "1";
      if (!worksheet[address]) continue;
      worksheet[address].v = worksheet[address].v.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
      });
    }
    const workbook: Excel.WorkBook = { Sheets: { [sheetName[0]]: worksheet }, SheetNames: sheetName };
    const excelBuffer: any = Excel.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: this.EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + this.EXCEL_EXTENSION);
  }

}