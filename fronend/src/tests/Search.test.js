import {React} from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/Search';


it("renders correctly", () => {
    const components = renderer.create(<Search/>)
    expect(components).toMatchSnapshot();
})