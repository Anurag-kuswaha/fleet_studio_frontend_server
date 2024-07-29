import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommitDetails from '../../Components/CommitDetails';
import FileDiff from '../../Components/FileDiff';
import './style.css';

const CommitPage = () => {
  const { owner, repository, oid } = useParams();
  const [commitData, setCommitData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/repositories/${owner}/${repository}/commits/${oid}/diff`);
        setCommitData(response.data);
      } catch (error) {
        console.error('Error fetching commit data', error);
      }
    };
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/repositories/${owner}/${repository}/commits/${oid}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching commit data', error);
      }
    };
    fetchCommitData();
    fetchUserData()
  }, [owner, repository, oid]);


  if (!commitData || !userData) return <div>Loading...</div>;

  return (
    <div className="commit-page">
      <CommitDetails 
        message={userData.message} 
        author={userData.author} 
        committer={userData.committer} 
        oid={userData.oid} 
        parents={userData.parents} 
      />
      <div className="commit-diff">
        {commitData.data.map((file, index) => (
          <FileDiff key={index} file={file} />
        ))}
      </div>
    </div>
  );
};

export default CommitPage;

