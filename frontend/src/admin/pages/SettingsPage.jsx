// src/admin/pages/SettingsPage.js
import React from 'react';
import AdminLayout from '../AdminLayout';
import NotificationSettings from '../components/NotificationSettings';

const SettingsPage = () => {
  return (
    <AdminLayout>
      <NotificationSettings />
    </AdminLayout>
  );
};

export default SettingsPage;
