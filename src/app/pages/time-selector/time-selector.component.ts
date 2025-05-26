import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss'],
  imports: [CommonModule],

  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimeSelectorComponent),
    multi: true
  }]
})
export class TimeSelectorComponent implements ControlValueAccessor {
  times = [
    '09:00am', '09:30am', '10:00am', '10:30am', 
    '11:00am', '11:30am', '12:00pm', '12:30pm'
  ];

  value: string | null = null;
  onChange = (_: any) => {};
  onTouched = () => {};

  selectTime(time: string) {
    this.value = time;
    this.onChange(time);
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
