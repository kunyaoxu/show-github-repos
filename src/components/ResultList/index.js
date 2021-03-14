import { useCallback, useContext, useEffect, useRef } from 'react';
import { Octokit } from '@octokit/rest';
import { Context } from 'globalContext';
import { appendReposData, clearReposData, setIsEnd } from 'globalStore';
import { COUNT_PER_PAGE } from 'constant';
import {
  Wrapper,
  Item,
  RepoLink,
  Title,
  Language,
  Description,
  Nothing,
} from './style';

const ResultList = () => {
  const { store, dispatch } = useContext(Context);
  const { page, repos, username, isEnd } = store;
  const isFetchSomething = useRef(false);

  const getNextPage = useCallback(() => {
    if (!username || isEnd || isFetchSomething.current) return null;

    isFetchSomething.current = true;
    const octokit = new Octokit();
    const nextPage = page + 1;
    octokit.repos
      .listForUser({ username, per_page: COUNT_PER_PAGE, page: nextPage })
      .then((e) => {
        if (e?.data?.length > 0) {
          dispatch(appendReposData({ appendRepos: e.data, page: nextPage }));
        } else {
          dispatch(setIsEnd());
        }
        isFetchSomething.current = false;
      })
      .catch((e) => {
        console.error(e);
        dispatch(clearReposData());
        isFetchSomething.current = false;
      });
  }, [dispatch, isEnd, page, username]);

  useEffect(() => {
    // 只在 page 第0頁然後 getNextPage 有變動時打 api
    if (page === 0) {
      getNextPage();
    }
  }, [getNextPage, page]);

  return (
    <Wrapper
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
            <Title>Title: {name}</Title>
            <Description>Description: {description}</Description>
            <Language>Language: {language}</Language>
            <RepoLink target="_blank" rel="noreferrer" href={html_url}>
              open the repository link
            </RepoLink>
          </Item>
        );
      })}
      {isEnd && <Nothing>nothing else ...</Nothing>}
    </Wrapper>
  );
};

export default ResultList;
