import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValue'
})
export class FieldValuePipe implements PipeTransform {
  transform(data: any, fieldName: string): any {
    if (data && data[fieldName]) {
      return data[fieldName];
    }
    return null;
  }
}
