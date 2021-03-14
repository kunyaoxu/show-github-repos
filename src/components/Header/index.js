import { useCallback, useContext, useState } from 'react';
import { Context } from 'globalContext';
import { clearReposData, setUsername } from 'globalStore';
import { Input, InputWrapper, Search, Wrapper } from './style';

const Header = () => {
  const { store, dispatch } = useContext(Context);
  const [tmpValue, setTmpValue] = useState(store.username ?? '');
  const { username } = store;

  const getFirstPage = useCallback(
    (nextUsername) => {
      if (username === nextUsername) return null;
      dispatch(clearReposData());
      dispatch(setUsername(nextUsername));
    },
    [dispatch, username]
  );

  return (
    <Wrapper>
      <InputWrapper
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('submit');
          getFirstPage(tmpValue);
        }}
      >
        <Input
          type="text"
          value={tmpValue}
          onChange={(e) => {
            setTmpValue(e.target.value);
          }}
        />
        <Search type="submit">🔍</Search>
      </InputWrapper>
    </Wrapper>
  );
};

export default Header;
