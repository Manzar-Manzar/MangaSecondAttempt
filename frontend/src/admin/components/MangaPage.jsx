// src/admin/pages/MangaPage.js
import React from 'react';
import AdminLayout from '../AdminLayout';
import MangaList from '../components/MangaList';
import MangaForm from '../components/MangaForm';

const MangaPage = () => {
  return (
    <AdminLayout>
      <MangaList />
      <MangaForm />
    </AdminLayout>
  );
};

export default MangaPage;
