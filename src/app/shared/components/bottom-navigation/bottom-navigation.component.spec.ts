import { TestBed, inject } from '@angular/core/testing';

import { BottomNavigationComponent } from './bottom-navigation.component';

describe('a bottom-navigation component', () => {
	let component: BottomNavigationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BottomNavigationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BottomNavigationComponent], (BottomNavigationComponent) => {
		component = BottomNavigationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});