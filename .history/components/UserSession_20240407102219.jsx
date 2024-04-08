'use client'
import { useAppDispatch } from '@redux/store';
import { useSession } from 'next-auth/react';
import React from 'react'

export const UserSession = () => {
    const session = useSession();
    const dispatch = useAppDispatch()

    useEffect(() => {
        const { status, data } = session;

        if (status === "authenticated" && data?.user?.email) {
            dispatch(userData(data.user));
        }

    }, [session]);

    console.log(session)
    return (
        <div></div>
    )
}
