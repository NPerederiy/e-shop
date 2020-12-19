import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './counter.scss';
import { Box } from '@material-ui/core';

const Counter = ({
    count = 0
}) => {
    const [value, setValue] = React.useState(count);

    return (
        <Box>
            <Button className='counter-button' disabled={value === 1} onClick={() => setValue(prevCount => prevCount - 1)}>
                -
            </Button>
            <TextField className='counter-text-field' variant='outlined' value={value} />
            <Button className='counter-button' onClick={() => setValue(prevCount => prevCount + 1)}>
                +
            </Button>
        </Box>
    )
}

export default Counter;