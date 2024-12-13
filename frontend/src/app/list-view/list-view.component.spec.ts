import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let composant: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListViewComponent);
    composant = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait etre créé', () => {
    expect(composant).toBeTruthy();
  });
});
