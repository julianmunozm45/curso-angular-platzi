import { Product } from './../../product.model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  constructor() {
    console.log('1. Constructor');
  }

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  addToCart(): void {
    this.productClicked.emit(this.product.id);
  }
}
