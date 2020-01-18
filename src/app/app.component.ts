import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { IEmployee } from './models/employee.model';
import { ExcelDownloadService } from './services/excel-download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees: IEmployee[] = [];
  constructor(private _employeeService: EmployeeService, private _excelDownloadService: ExcelDownloadService){}
  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.employees = this._employeeService.getEmployees();
  }

  downloadAsExcel() {
    const fileName: string = 'Employee Data';
    const sheetName: string = 'Employee Details';
    this._excelDownloadService.exportAsExcelFile(this.employees,fileName,[sheetName]);
  }
}
