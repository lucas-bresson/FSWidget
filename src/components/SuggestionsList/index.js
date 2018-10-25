import React, { Component } from "react";
import styled from "styled-components";
import Suggestions from "../../data/follower-suggestions.json";
import ListItem from "./ListItem";
import { CSSTransitionGroup } from "react-transition-group";
import "./transition.css";

const ContainerList = styled.div`
	position: relative;
	margin: 40px;
	width: 470px;
	height: 500px;
	box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.15);
`;

const SubContainerList = styled.div`
	max-height: 100%;
	overflow-y: auto;

	&::-webkit-scrollbar { 
    display: none; /* Safari and Chrome */
`;

class SuggestionsList extends Component {
	state = {
		followedUsersIds: []
	};

	handleFollowUser = id => {
		this.setState(({ followedUsersIds }) => ({
			followedUsersIds: [...followedUsersIds, id]
		}));
	};

	render() {
		return (
			<ContainerList>
				<SubContainerList>
					<ul>
						<CSSTransitionGroup
							transitionName="card"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}
						>
							{Suggestions.filter(
								user => !this.state.followedUsersIds.includes(user.userId)
							).map(({ userId, profilePicture, name, username, biography }) => (
								<li key={userId}>
									<ListItem
										profilePicture={profilePicture}
										name={name}
										username={username}
										biography={biography}
										onFollowUser={this.handleFollowUser}
										id={userId}
									/>
								</li>
							))}
						</CSSTransitionGroup>
					</ul>
				</SubContainerList>
			</ContainerList>
		);
	}
}

export default SuggestionsList;