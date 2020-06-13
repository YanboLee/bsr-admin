import React, { FC } from 'react';
import PageLayout from '@/page/layout/index';
import { Route, Switch } from 'react-router-dom';

import ListMember from '@/page/audit/list';

const Member: FC = () => (
  <PageLayout>
    <Switch>
      <Route exact path="/audit" component={ListMember} />
    </Switch>
  </PageLayout>
);

export default Member;
