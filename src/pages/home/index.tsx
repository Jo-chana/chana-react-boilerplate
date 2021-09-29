import React from 'react';

export function Home() {
    return <div style={ { 
        paddingTop: 120,
        paddingLeft: 32,
        paddingRight: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
    } }>
        <h1>Chana react boilerplate</h1>
        <h3>Make your website fast, easier, richful</h3>
    </div>;
}