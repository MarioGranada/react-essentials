const TabContentContainer = ({ title, tabButtons, children }) => (
  <section id="examples">
    <h2>{title}</h2>
    <menu>{tabButtons}</menu>
    <div id="tab-content">{children}</div>
  </section>
);

export default TabContentContainer;
