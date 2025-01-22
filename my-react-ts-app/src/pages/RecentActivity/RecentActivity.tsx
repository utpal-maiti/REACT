import React, { FC } from 'react';
import { RecentActivityWrapper } from './RecentActivity.styled';

interface RecentActivityProps {}

const RecentActivity: FC<RecentActivityProps> = () => (
 <RecentActivityWrapper data-testid="RecentActivity">
    RecentActivity Component
 </RecentActivityWrapper>
);

export default RecentActivity;
