import { TestBed, inject } from '@angular/core/testing';

import { NavBottomComponent } from './nav-bottom.component';

describe('a nav-bottom component', () => {
	let component: NavBottomComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavBottomComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavBottomComponent], (NavBottomComponent) => {
		component = NavBottomComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});