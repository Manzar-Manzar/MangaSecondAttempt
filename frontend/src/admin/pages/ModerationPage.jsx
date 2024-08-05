// src/admin/pages/ModerationPage.js
import React from 'react';
import AdminLayout from '../AdminLayout';
import ContentModeration from '../components/Moderation';

const ModerationPage = () => {
  return (
    <AdminLayout>
      <ContentModeration />
    </AdminLayout>
  );
};

export default ModerationPage;
