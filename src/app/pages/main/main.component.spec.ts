import { TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MainModule } from './main.module';

describe('MainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ToDo' title`, () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ToDo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ToDo');
  });
});
