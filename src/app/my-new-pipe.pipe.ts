import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import * as ja from 'date-fns/locale/ja';

@Pipe({
  name: 'commentDate',
})
export class MyNewPipePipe implements PipeTransform {
  transform(date: string): string {
    return format(date, 'YYYY年MMMMDo', { locale: ja });
  }
}
