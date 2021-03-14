import { useCallback, useContext, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import { Context } from 'globalContext';
import { appendReposData, clearReposData } from 'globalStore';
import Header from 'components/Header';
import { Wrapper, List, Item } from './style';

const Home = () => {
  const { store, dispatch } = useContext(Context);
  const { page, repos, username } = store;

  const getNextPage = useCallback(() => {
    if (!username) return null;

    const octokit = new Octokit();
    const nextPage = page + 1;
    octokit.repos
      .listForUser({ username, per_page: 5, page: nextPage })
      .then((e) => {
        dispatch(appendReposData({ appendRepos: e.data, page: nextPage }));
      })
      .catch((e) => {
        console.error(e);
        dispatch(clearReposData());
      });
  }, [dispatch, page, username]);

  useEffect(() => {
    // 只在 page 第0頁然後 getNextPage 有變動時打 api
    if (page === 0) {
      getNextPage();
    }
  }, [getNextPage, page]);

  return (
    <Wrapper>
      <Header />
      <List
        onScroll={(e) => {
          if (
            e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
              e.currentTarget.clientHeight &&
            e.currentTarget.scrollTop !== 0
          ) {
            getNextPage();
          }
        }}
      >
        {repos.map((data) => {
          const { id, name, description, html_url, language } = data;
          return (
            <Item key={id}>
              <div>title: {name}</div>
              <div>description: {description}</div>
              <div>language: {language}</div>
              <div>link: {html_url}</div>
              <a target="_blank" rel="noreferrer" href={html_url}>
                the repo link
              </a>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default Home;
