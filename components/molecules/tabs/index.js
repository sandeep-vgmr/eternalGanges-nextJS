import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default ReactTabs = (props, children) => (
    <Tabs>
        <TabList>
            <Tab>{props.tabTitle}</Tab>
        </TabList>

        <TabPanel>
            {...children}
        </TabPanel>
    </Tabs>
);