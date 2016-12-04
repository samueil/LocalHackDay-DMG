import { async, TestBed } from '@angular/core/testing';
import { FeedbackFormComponent } from './feedback-form.component';
describe('FeedbackFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FeedbackFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FeedbackFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/jandor/Repositories/LocalHackDay-DMG/src/app/feedback-form/feedback-form.component.spec.js.map