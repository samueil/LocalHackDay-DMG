import { async, TestBed } from '@angular/core/testing';
import { FreshListComponent } from './fresh-list.component';
describe('FreshListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FreshListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FreshListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/fresh-list/fresh-list.component.spec.js.map