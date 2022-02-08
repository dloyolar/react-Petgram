import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window
      .fetch('https://petgram-server-dloyolar.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => setCategories(response));
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
