import React from 'react';
import { PropTypes as T } from 'prop-types';
import styled from 'styled-components';
import FollowButton from '../FollowButton/';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #f5f5f5;
	padding: 15px 25px;

	@media (min-width: 440px) {
		flex-direction: row;
		align-items: center;
		max-height: 90px;
  }
`;

const ContainerPicture = styled.div`
	flex: 0 0 60px;
	width: 60px;
	height: 60px;
	position: relative;
	overflow: hidden;
	border-radius: 50%;
`;

const Picture = styled.img`
	display: inline;
	width: 100%;
	margin: 0 auto;
	height: auto;
`;

const ContainerInfos = styled.div`
	padding: 0px 20px;
	width: 100%;
`;

const Username = styled.p`
	font-size: 16px;
	line-height: 1.6;
	text-align: center;
	padding-top: 10px;

	@media (min-width: 440px) {
		text-align: left;
		padding-top: 0px;
  }
`;

const Biography = styled.p`
	visibility: hidden;

	@media (min-width: 440px) {
		visibility: visible;
		font-size: 14px;
		line-height: 1.5;
		color: #a5a5a5;
  }
`;

const formatBiography = str => str.split('\n').splice(0,1);

const ListItem = ({	
	id, 
	profilePicture, 
	name, 
	username, 
	biography, 
	onFollowUser 
}) => {
	return(
			<CardContainer>
				<ContainerPicture>
					<Picture src={profilePicture} alt={name} />
				</ContainerPicture>
				<ContainerInfos>
					<Username>@{username}</Username>
					<Biography>{formatBiography(biography)}</Biography>
				</ContainerInfos>
				<FollowButton	
					onClick={() => onFollowUser(id)}
				/>
			</CardContainer>
	)
}

ListItem.propTypes = {
	id: T.number,
	profilePicture: T.string,
	name: T.string,
	username: T.string,
	biography: T.string,
	onFollowUser: T.func
}

export default ListItem;
