import { Observable } from "rxjs";
import { SubjectRes } from "../interfaces/subjectRes/subject-res";

export abstract class methodSUbject{
abstract  getall_subject(numpage: number, limit: number ):Observable<any>
}