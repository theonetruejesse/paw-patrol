import { Wrapper } from './components/Wrapper';
import Routes from './Routes';

const App = ({ children }) => {
	return (
		<Wrapper>
			<Routes />
		</Wrapper>
	);
};

export default App;
