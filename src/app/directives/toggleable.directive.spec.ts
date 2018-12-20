import { ToggleableDirective } from './toggleable.directive';

describe('ToggleableDirective', () => {
  let directive: ToggleableDirective;

  beforeEach(() => directive = new ToggleableDirective());

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should start with display set to true', () => {
    expect(directive.display).toBeTruthy();
  });

  it('should toggle the display', () => {
    directive.toggleDeck();
    expect(directive.display).toBeFalsy();
  });
});
