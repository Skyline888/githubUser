import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const FetchError = ({eventAlert, errorMessage}) =>
    // console.log(eventAlert, errorMessage) ||
    <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        open={errorMessage.open}
        onClose={eventAlert}
        ContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{errorMessage.error.message}</span>}
    />
;

export default FetchError;