import React, { FC } from 'react';
import PageLayout from '@/page/layout/index';
import { Route, Switch, Router } from 'react-router-dom';

import CreateMember from '@/page/member/create.tsx';
import ListMember from '@/page/member/list.tsx';

const Member: FC = () => {
  console.log(Router);

  return (
    <PageLayout>
      <Switch>
        <Route exact path="/member/create" component={CreateMember} />
        <Route exact path="/member" component={ListMember} />
      </Switch>
    </PageLayout>
  );
};

export default Member;
