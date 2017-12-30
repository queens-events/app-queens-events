import React from 'react';
import OrganizationCard from '../card/OrganizationCard.jsx';
import orgListStyle from './organizationList.css'

const OrganizationList = () => {
  return(
    <div className="orgListContainer">
      <h1>Organizations</h1>
      <div className="orgList">
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
        <OrganizationCard />
      </div>
    </div>
  );
}

export default OrganizationList