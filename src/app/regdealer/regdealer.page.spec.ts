import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegdealerPage } from './regdealer.page';

describe('RegdealerPage', () => {
  let component: RegdealerPage;
  let fixture: ComponentFixture<RegdealerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegdealerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegdealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
