import React, { useEffect, useState } from 'react';
import { useCategoriesData } from '../../hooks/useCategoriesData';
import { Category } from '../Category';
import { Item, List } from './styles';

export const ListOfCategories = React.memo(() => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  if (loading) return 'Loading...';

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
});
