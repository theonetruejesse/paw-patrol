import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import React, { Component } from 'react';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<AuthProvider>
					<Router>
						<App />
					</Router>
				</AuthProvider>
			</ColorModeProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// // For Testing Purposes Only:
// import { DateAndTimePicker } from "./components/DateAndTimePicker";
// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <ColorModeProvider
//         options={{
//           useSystemColorMode: true,
//         }}
//       >
//         <DateAndTimePicker  />
//       </ColorModeProvider>
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
