import React, { FC } from 'react';
import PageLayout from '@/page/layout/index';
import { Route, Switch } from 'react-router-dom';

import CreateMember from '@/page/member/create';
import ListMember from '@/page/member/list';

const Member: FC = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/member/create" component={CreateMember} />
      <Route exact path="/member" component={ListMember} />
    </Switch>
  </PageLayout>
);

export default Member;
