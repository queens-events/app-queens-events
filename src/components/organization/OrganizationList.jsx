import React from 'react';
import OrganizationCard from '../cards/OrganizationCard.jsx';
import orgListStyle from '../../../style/organizationList.css'

const OrganizationList = () => {
  return(
    <div className="orgListContainer">
      <h1>Organization List</h1>
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