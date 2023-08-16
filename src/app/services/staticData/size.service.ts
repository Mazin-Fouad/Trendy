import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  private selectedSizeSubject = new BehaviorSubject<string | null>('s');
  selectedSize$ = this.selectedSizeSubject.asObservable();

  setSelectedSize(size: string): void {
    this.selectedSizeSubject.next(size);
  }

  getSelectedSize(): string | null {
    return this.selectedSizeSubject.value;
  }

  removeSelectedSize(): void {
    this.selectedSizeSubject.next(null);
  }
}
