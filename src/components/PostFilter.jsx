import Input from './UI/input/Input';
import Select from './UI/select/Select';
import classes from '../styles/PostFilter.module.css';

const PostFilter = ({ filter, setFilter, setLimit }) => {
  return (
    <div>
      <hr style={{ margin: '15px 0' }} />
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск"
      />
      <div className={classes['post-filter']}>
        <Select
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
          defaultValue={'Сортировка'}
          onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
        />

        <Select
          options={[
            { value: 5, name: '5' },
            { value: 15, name: '15' },
            { value: 20, name: '20' },
            { value: 30, name: '30' },
            { value: -1, name: 'Все посты' },
          ]}
          defaultValue={'Количество постов'}
          onChange={(v) => setLimit(v)}
        />
      </div>
    </div>
  );
};

export default PostFilter;
