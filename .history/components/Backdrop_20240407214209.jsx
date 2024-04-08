import React from 'react'

export const Backdrop = () => {
    return (
        <div className="fixed inset-0 transition-opacity z-[]" aria-hidden="true">
            <div className="absolute inset-0 bg-black bg-opacity-75" />
        </div>
    )
};