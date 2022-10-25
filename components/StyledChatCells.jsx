import {styled} from '@stitches/react';
import ChatCells from './ChatCells';

const StyledChatCells = styled(ChatCells, {
    '&.chat': {
        position: 'relative',
        maxWidth: '60%',
        padding: '10px',
        marginBottom: '2px',
    },
    '&.chat-message': {
        backgroundColor: 'gainsboro',
        borderRadius: '10px',
        marginLeft: 'auto',
    },
    '&.chat-message-client': {
        backgroundColor: 'royalblue',
        borderRadius: '10px',
        marginRight: 'auto',
    },
});

export default StyledChatCells;