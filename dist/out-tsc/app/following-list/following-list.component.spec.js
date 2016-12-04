import { async, TestBed } from '@angular/core/testing';
import { FollowingListComponent } from './following-list.component';
describe('FollowingListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FollowingListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FollowingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/following-list/following-list.component.spec.js.map