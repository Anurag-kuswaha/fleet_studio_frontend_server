import React from 'react';
import './style.css';

const DiffLine = ({ line }) => {
    return (
        <>

            <div className='line-wrapper'>
                <div key={line.headLineNumber} className={`diff-line row ${line.content.startsWith('-') ? 'removed' : line.content.startsWith('+') ? 'added' : ''}`}>
                    <div className='base-line-number col-2'> { line.content.startsWith('+') ? '' : line.baseLineNumber}</div>
                    <div className={`head-line-number col-2 ${line.content.startsWith('+') || line.content.startsWith('-') ? '' : 'with-bg'}`}> { line.content.startsWith('-') ? '' : line.headLineNumber}</div>
                    <div className='col-10'> {line.content.startsWith('\\') ? <></> : line.content} </div>
                </div>
            </div>
        </>
    );
};

export default DiffLine;
