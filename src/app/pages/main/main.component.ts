import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(
  ) {}

  title = 'ToDo';
}
