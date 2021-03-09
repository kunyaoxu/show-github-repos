import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';

const Home = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const octokit = new Octokit();
    octokit.repos.listForUser({ username: 'kunyaoxu' }).then((e) => {
      console.log(e.data);
      setRepos(e.data);
    });
  }, []);
  return (
    <div>
      {repos.map((data) => {
        const { id, name } = data;
        return (
          <div key={id}>
            <div>{id}</div>
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
