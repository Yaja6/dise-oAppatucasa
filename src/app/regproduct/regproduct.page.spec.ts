import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegproductPage } from './regproduct.page';

describe('RegproductPage', () => {
  let component: RegproductPage;
  let fixture: ComponentFixture<RegproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
