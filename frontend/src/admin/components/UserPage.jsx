// src/admin/pages/UserPage.js
import React from 'react';
import AdminLayout from '../AdminLayout';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const UserPage = () => {
  return (
    <AdminLayout>
      <UserList />
      <UserForm />
    </AdminLayout>
  );
};

export default UserPage;
