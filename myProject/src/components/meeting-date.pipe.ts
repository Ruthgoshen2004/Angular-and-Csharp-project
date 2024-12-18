import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meetingDate',
  standalone: true  // הוסף את האפשרות הזאת
})
export class MeetingDatePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }

    let date = new Date(value);

    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }

    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    let dayString = day < 10 ? `0${day}` : `${day}`;
    let monthString = month < 10 ? `0${month}` : `${month}`;

    return `${dayString}/${monthString}/${year}`;
  }
}
