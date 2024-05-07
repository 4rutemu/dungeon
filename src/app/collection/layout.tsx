'use client'

import * as React from 'react';
import PageLayout from '@/components/_public/PageLayout';

interface Props {
  children: React.ReactElement;
}

export default function CollectionLayout(props: Props) {
  return (
    <PageLayout label="Collection">{props.children}</PageLayout>
  );
}
