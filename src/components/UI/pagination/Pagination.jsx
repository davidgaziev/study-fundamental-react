import { usePagination } from '../../hooks/usePagination';
import Button from '../button/Button';

const Pagination = ({ totalPages, page, updatePosts, limit }) => {
  const pages = usePagination(totalPages);

  return (
    <div>
      {pages.map((p) => (
        <Button
          onClick={() => updatePosts(limit, p)}
          className={
            p === page
              ? 'page-selector page-selector__current'
              : 'page-selector'
          }
          key={p}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
