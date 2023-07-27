import Input from './UI/Input/Input';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <hr style={{ margin: '15px 0' }} />
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск"
      />
      <Select
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
        defaultValue={'Сортировка'}
        value={filter.sort}
        onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
      />
    </>
  );
};

export default PostFilter;
