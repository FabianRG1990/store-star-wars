import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-star-wars',
  standalone: true,
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsComponent {}
