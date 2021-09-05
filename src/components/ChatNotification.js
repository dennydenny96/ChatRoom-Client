import React from 'react';
import { Row, Container } from 'react-bootstrap';

let styles = {
	currentUserTextContainer: {
		marginBottom: 10,
		flex: 0,
		justifyContent: 'center',
		display: 'flex',
	},
	textBubble: {
		padding: 10,
		justifyContent: 'center',
		flex: 0,
		display: 'flex',
		borderRadius: 8,
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.50)'
	},
	usernameText: {
		fontSize: 9
	}
}

const ChatNotification = (props) => {
	const {
		text
	} = props

	return (
		<Row style={styles.currentUserTextContainer}>
			<Container>
				<Row style={styles.textBubble}>
					{text}
				</Row>
			</Container>
		</Row>
	);
}

export default ChatNotification;