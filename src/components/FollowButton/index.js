import React from "react";
import { PropTypes as T } from "prop-types";
import styled from "styled-components";
import Icon from "./icon-follow.svg";

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 8px 14px;
	background-color: #0080ff;
	-moz-border-radius: 1px; /* Firefox */
	-webkit-border-radius: 1px; /* Safari, Chrome */
	border-radius: 1px;
	font-size: 14px;
	color: #ffffff;
	cursor: pointer;

	&:hover {
		background-color: #044fb3;
	}

	@media (min-width: 440px) {
		width: auto;
	}
`;

const Text = styled.span`
	padding-left: 10px;
`;

const FollowButton = ({ onClick }) => (
	<Container onClick={onClick}>
		<img src={Icon} alt="follow" />
		<Text>Follow</Text>
	</Container>
);

FollowButton.propTypes = {
	onClick: T.func
};

export default FollowButton;
