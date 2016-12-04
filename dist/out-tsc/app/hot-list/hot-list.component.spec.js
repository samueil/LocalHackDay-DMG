import { async, TestBed } from '@angular/core/testing';
import { HotListComponent } from './hot-list.component';
describe('HotListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HotListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HotListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/hot-list/hot-list.component.spec.js.map