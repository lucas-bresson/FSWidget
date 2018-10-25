import React from "react";
import styled from "styled-components";
import SuggestionsList from "../SuggestionsList/";

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const App = () => (
	<Container>
		<SuggestionsList />
	</Container>
);

export default App;
