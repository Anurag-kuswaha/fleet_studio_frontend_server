import React, { useState } from 'react';
import './style.css';
import DiffLine from '../DiffLine';
import openedIcon from '../../assets/images/opened-icon.svg'
import closedIcon from '../../assets/images/closed-icon.svg'

const FileDiff = ({ file }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="file-diff">
            <h3 onClick={toggleOpen}> {isOpen ? <img src={openedIcon} /> : <img src={closedIcon} />} {file.headFile.path}</h3>
            {isOpen && (
                <div className="diff-content">
                    {file.hunks.map((hunk, index) => (

                        <div key={index} className="hunk">
                            <div className="hunk-header">{hunk.header}</div>
                            <pre className="diff-lines">

                                {hunk.lines.map((line, lineIndex) => (
                                    <DiffLine key={lineIndex} line={line} />
                                ))}
                            </pre>
                        </div>


                    ))}
                </div>)}
        </div>
    );
};

export default FileDiff;
