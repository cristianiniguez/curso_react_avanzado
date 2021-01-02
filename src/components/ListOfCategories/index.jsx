import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://petgram-server-criniguez.vercel.app/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
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
