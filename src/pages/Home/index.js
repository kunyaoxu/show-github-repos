import { useCallback, useContext, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import { Context } from 'globalContext';
import { appendReposData } from 'globalStore';
import { Wrapper, Header, List, Item } from './style';

const Home = () => {
  const { store, dispatch } = useContext(Context);
  const { page, repos, username } = store;

  const getNextPage = useCallback(() => {
    const octokit = new Octokit();
    const nextPage = page + 1;
    octokit.repos
      .listForUser({ username, per_page: 5, page: nextPage })
      .then((e) => {
        dispatch(appendReposData({ appendRepos: e.data, page: nextPage }));
      });
  }, [dispatch, page, username]);

  useEffect(() => {
    // 只在 page 第0頁或 username 更動非 Nullish 或 空字串的時候打 api
    if (page === 0 && !!username) {
      getNextPage();
    }
  }, [getNextPage, page, username]);

  return (
    <Wrapper>
      <Header />
      <List
        onScroll={(e) => {
          if (
            e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
            e.currentTarget.clientHeight
          ) {
            getNextPage();
          }
        }}
      >
        {repos.map((data) => {
          const { id, name, description, html_url } = data;
          return (
            <Item key={id}>
              <div>title: {name}</div>
              <div>description: {description}</div>
              <div>link: {html_url}</div>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default Home;
