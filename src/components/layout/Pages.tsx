import React, {ReactNode} from 'react';
import {Helmet} from 'react-helmet-async';
import {Box} from '@mui/material';

interface PagesProps {
    children: ReactNode;
    title: string;
}

const Pages: React.FC<PagesProps> = ({children, title}) => {
    return (
        <Box ml="110px" mt="64px">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </Box>
    );
};

export default Pages;