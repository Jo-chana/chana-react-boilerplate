import React, { CSSProperties, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from 'react-sidebar';

import { dispatch } from '../store';
import { selectSidebar, sidebarClick } from '../store/sidebar';

export function SidebarButton({
    style,
}: {
    style?: CSSProperties;
}) {

    const handleClick = useCallback(() => dispatch(sidebarClick()), []);

    const buttonStyle: CSSProperties = {
        // Add style for button which open sidebar
        ...style,
    }

    return <div onClick={ handleClick } 
        style={ buttonStyle } />
}

function SidebarComponent() {
    return <div>
        {/* Add your sidebar components */}
    </div>
}

export function SidebarContainer() {

    const open = useSelector(selectSidebar);
    const handleSetOpen = useCallback(() => {
        dispatch(sidebarClick());
    }, [])

    return <Sidebar 
        onSetOpen={ handleSetOpen } 
        styles={ { 
            sidebar: { backgroundColor: 'white', position: 'fixed' }
        } } sidebar={ <SidebarComponent /> } open={ open } >
        <b>Main Content</b>
    </Sidebar>
}

