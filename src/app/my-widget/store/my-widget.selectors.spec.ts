import * as fromMyWidget from './my-widget.reducer';
import { selectMyWidgetState } from './my-widget.selectors';

describe('MyWidget Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMyWidgetState({
      [fromMyWidget.myWidgetFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
