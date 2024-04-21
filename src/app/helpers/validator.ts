import { AbstractControl } from '@angular/forms';

export function noWhitespaceValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const isWhitespace = (control.value || '').trim().length === 0;
  return isWhitespace ? { 'whitespace': true } : null;
}
