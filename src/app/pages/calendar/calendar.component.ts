import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true
  }]
})
export class CalendarComponent implements OnInit, ControlValueAccessor {
  currentDate = new Date();
  currentMonth!: number;
  currentYear!: number;
  monthName = '';
  weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  calendarDays: (number | null)[][] = [];
  selectedDateString = '';
  selectedDay: number | null = null;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  ngOnInit() {
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.updateCalendar();
  }

  writeValue(value: any): void {
    if (value) {
      const date = new Date(value);
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.selectedDay = date.getDate();
      this.selectedDateString = value;
      this.updateCalendar();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: handle disabled state
  }

  updateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const weeks: (number | null)[][] = [];

    this.monthName = new Date(this.currentYear, this.currentMonth).toLocaleString('default', { month: 'long' });

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day++);
        }
      }
      weeks.push(week);
    }
    this.calendarDays = weeks;
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.updateCalendar();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.updateCalendar();
  }

  selectDate(day: number | null) {
    if (day !== null) {
      this.selectedDay = day;
      const month = this.currentMonth + 1;
      this.selectedDateString = `${this.currentYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      this.onChange(this.selectedDateString);
      this.onTouched();
    }
  }

  isSelected(day: number | null): boolean {
    return day === this.selectedDay;
  }
}
