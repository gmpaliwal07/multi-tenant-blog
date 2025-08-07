'use client';
import * as React from 'react';

import {UserButton,OrganizationSwitcher } from '@clerk/nextjs'

const Nav: React.FC = () => {
    return (
        <nav className = " rounded-2xl b-2 p-4 flex justify-between items-center">
            <div>
<h1 className='font-semibold text-xl' >Blog Application</h1>
            </div>
            <div className='flex items-center gap-4'> 
                <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
<UserButton />
            </div>
        </nav>
    )
}

export default Nav;