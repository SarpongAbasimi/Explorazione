import React from 'react';
import styles from './SearchForm.module.scss';
import SearchIcon from '@material-ui/icons/Search';

type SearchProps = {
  inputPlaceHolder?: string
}

export const SearchForm: React.FunctionComponent<SearchProps> = ({ inputPlaceHolder }) => {
  return(
    <React.Fragment>
      <form className={styles.search}>
        <div className={styles['search-icon-container']}>
          <SearchIcon className={styles['search-logo']}></SearchIcon>
        </div>
        <input type='text' placeholder={inputPlaceHolder}>
        </input>
      </form>
    </React.Fragment>
  )
}

SearchForm.defaultProps = {
  inputPlaceHolder: 'Search'
}