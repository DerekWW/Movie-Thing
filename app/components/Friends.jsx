import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const friends = [ 'Ted Danson', 'Shelley Long', 'George Wendt',
  'John Ratzenburger', 'Rhea Perlman', 'Bebe Neuwirth',
  'ted@danson.com', 'shelleylong@mail.component', 'georgew@this.com',
];

const Friends = () => (
  <div>
    <AutoComplete
      floatingLabelText="Find friends"
      filter={AutoComplete.fuzzyFilter}
      dataSource={friends}
      maxSearchResults={0}
    />
  </div>
);

export default Friends;
