import {styled} from '@stitches/react';
import React from 'react';

const StyledChatCells = styled('div', {
    '&.chat': {
        position: 'relative',
        maxWidth: '60%',
        padding: '10px',
        marginBottom: '2px',
    },
    '&.chat-message-client': {
        backgroundColor: 'royalblue',
        borderRadius: '10px',
        marginLeft: 'auto',
        color: 'white',
    },
    '&.chat-message': {
        backgroundColor: 'gainsboro',
        borderRadius: '10px',
        marginRight: 'auto',
    },
});

export default StyledChatCells;