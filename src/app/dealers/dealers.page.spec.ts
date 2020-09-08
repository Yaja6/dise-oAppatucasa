import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealersPage } from './dealers.page';

describe('DealersPage', () => {
  let component: DealersPage;
  let fixture: ComponentFixture<DealersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
