import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../Interfaces/project';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Project[], name:string): Project[] {
    if(value.length===0 || name===''){
      name = name.toLowerCase();
      return value
    }
    const student:Project[]=[]
    for (let project of value){
   if (project.name.toLowerCase().indexOf(name)!=-1){
    student.push(project)
   }
  }
  return student
}

}
