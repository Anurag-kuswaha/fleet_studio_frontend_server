import React from 'react';
import './style.css';
import moment from 'moment';

const CommitDetails = ({ message, author, committer, oid, parents }) => {
    return (
        <div className="commit-details">
            <div className="text-style-header">{message}</div>
            <div className="author-comitter">
                <p>Authored by <span>{author.name}</span> {Math.abs(moment(author.date).diff(moment(), 'days'))} days ago</p>
                <p>Committed by <span>{committer.name}</span> {Math.abs(moment(committer.date).diff(moment(), 'days'))} days ago</p>
            </div>
            <div className="extra-commit-details">
                <div>...</div>
            <div className="right-side">
            <p>Commit {oid}</p>
            <p >Parent <span className="parent">{parents.map(parent => parent.oid).join(', ')} </span></p>
            </div>
            </div>
        </div>
    );
};

export default CommitDetails;