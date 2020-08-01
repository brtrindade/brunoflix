import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [category, setCategory] = useState(initialValues);
  const [categories, setCategories] = useState([]);

  const setCategoryValue = (key, value) => {
    setCategory({
      ...category,
      [key]: value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryValue(
      name,
      value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories([
      ...categories,
      category,
    ]);
    setCategory(initialValues);
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {category.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            type="text"
            name="name"
            labelText="Nome da Categoria"
            value={category.name}
            onChange={handleChange}
          />

          <FormField
            type="textarea"
            name="description"
            labelText="Descrição"
            value={category.description}
            onChange={handleChange}
          />

          <FormField
            type="color"
            name="color"
            labelText="Cor"
            value={category.color}
            onChange={handleChange}
          />

        </div>
        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categories.map((category, i) => (
          <li key={i}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}
