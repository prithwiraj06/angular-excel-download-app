import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee.model';
@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    employees: IEmployee[] = [];
    constructor() {
        this.employees = [
            {employeeId: 1, name: 'Prithwi', designation: 'Software Engineer', dateOfBirth: new Date('06/10/1993'), gender: 'Male', mobileNumber: 8340203933},
            {employeeId: 2, name: 'Prasanna', designation: 'Software Engieer', dateOfBirth: new Date('06/10/1993'), gender: 'Male', mobileNumber: 8340203933},
            {employeeId: 3, name: 'Nagesh', designation: 'Software Engineer', dateOfBirth: new Date('06/10/1993'), gender: 'Male', mobileNumber: 8340203933},
            {employeeId: 4, name: 'Syed', designation: 'Software Engineer', dateOfBirth: new Date('06/10/1993'), gender: 'Male', mobileNumber: 8340203933},
            {employeeId: 5, name: 'Rakesh', designation: 'Software Engineer', dateOfBirth: new Date('06/10/1993'), gender: 'Male', mobileNumber: 8340203933}
        ]
    }

    getEmployees(): IEmployee[] {
        return this.employees;
    }
}