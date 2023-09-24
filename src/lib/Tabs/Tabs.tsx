/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useRef } from 'react';
import TabPanel from './TabPanel';
import { css, styled } from 'styled-components';
import useTabs from './hooks/useTabs';
import useTabsScroll from './hooks/useTabsScroll';
import TabsNavigation from './components/TabsNavigation';

export type TabsDirection = 'horizontal' | 'vertical';

type TabsProps = {
  /**
   * Tabs의 Navigation의 가로폭이 화면 폭보다 길어졌을 때, 위치를 이동시킬 수 있는 버튼의 유무를 지정하는 속성
   *
   *  * @default 'true'
   */
  scrollButtons?: boolean;
  /**
   * Tabs의 위치를 지정하는 속성
   *
   *  * @default 'horizontal'
   */
  direction?: TabsDirection;
  /**
   * Tabs의 Navigation을 가운데로 정렬하는 속성
   *
   *  * @default 'false'
   */
  centered?: boolean;
};

function Tabs({
  scrollButtons = true,
  direction = 'horizontal',
  centered = false,
  children,
}: PropsWithChildren<TabsProps>) {
  const tabsNavigation = useRef<HTMLDivElement>(null);

  const { panelList, selectedPanel, selectPanel, isSelected } =
    useTabs(children);

  const { isOverFlow, scrollState, handleMoveScroll } = useTabsScroll(
    tabsNavigation,
    direction
  );

  return (
    <Layout direction={direction}>
      <TabsNavigation
        isOverFlow={isOverFlow}
        scrollState={scrollState}
        handleMoveScroll={handleMoveScroll}
        tabsNavigation={tabsNavigation}
        selectPanel={selectPanel}
        isSelected={isSelected}
        panelList={panelList}
        scrollButtons={scrollButtons}
        direction={direction}
        centered={centered}
      />
      {selectedPanel?.contents}
    </Layout>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;

const LAYOUT_STYLE = {
  horizontal: css`
    flex-direction: column;
  `,
  vertical: css`
    flex-direction: row;
  `,
} as const;

const Layout = styled.div<{ direction: TabsDirection }>`
  display: flex;
  position: relative;

  height: 100%;
  max-height: 100vh;

  ${({ direction }) => LAYOUT_STYLE[direction]}
`;
