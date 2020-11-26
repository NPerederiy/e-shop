import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = ({
    name = 'Nikita Perederii',
    link = 'https://github.com/NPerederiy'
}) => (
    <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href={link}>
            {name}
    </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default Copyright;