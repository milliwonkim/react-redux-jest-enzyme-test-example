import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../containers/App';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('App', () => {
	it('renders without crashing given the required props', () => {
		const props = {
			isFetching: false,
			dispatch: jest.fn(),
			selectedSubreddit: 'reactjs',
			posts: []
		};

		const wrapper = shallow(
			<Provider store={store}>
				<App {...props} />
			</Provider>
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
