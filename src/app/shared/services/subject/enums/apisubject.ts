import { inject } from "@angular/core";
import { DashboardComponent } from "../../../../core/pages/dashboard/dashboard.component";

export class Apisubject {


  
  static addsubject = 'https://exam.elevateegy.com/api/v1/subjects';
  static update_subject = `https://exam.elevateegy.com/api/v1/subjects/6715d26f96af8c051a2191bd`;
  static delete_subject = `https://exam.elevateegy.com/api/v1/subjects/6715d26f96af8c051a2191bd`;
  static getAllSubjects(numpage: number, limit: number): string {
    return `https://exam.elevateegy.com/api/v1/subjects?page=${numpage}&limit=${limit}`;
  }
  static getsingle_subject = `https://exam.elevateegy.com/api/v1/subjects/6715db9addfd54f0a196ab6c`;
}
