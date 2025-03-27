import { Output, Input, Component, EventEmitter } from '@angular/core';

@Component({ 
  selector: 'app-filters',
  standalone: false,
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Input() search: string = '';
  @Input() historyClick: number = -1;

  @Output() setSort = new EventEmitter();
  @Output() setCarts = new EventEmitter();
}
