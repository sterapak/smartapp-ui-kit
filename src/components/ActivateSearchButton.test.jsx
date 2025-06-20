import { render } from '@testing-library/react';
import * as store from '../store/useAppStore';
import ActivateSearchButton from './ActivateSearchButton';

describe('ActivateSearchButton', () => {
  beforeAll(() => {
    jest.spyOn(store, 'useAppStore').mockImplementation((selector) => selector({ setStatus: jest.fn() }));
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('renders without crashing', () => {
    render(<ActivateSearchButton />);
  });
}); 