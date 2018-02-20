/**
 * Fix React 16.x error when run test.
 * Solution: https://github.com/Microsoft/TypeScript-React-Starter/issues/76
 */
import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });
