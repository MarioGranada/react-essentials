import TabContentContainer from './TabContentContainer';

const Tabs = ({ title, tabButtons, children }) => {
  return (
    <TabContentContainer title={title} tabButtons={tabButtons}>
      {children}
    </TabContentContainer>
  );
};

export default Tabs;
