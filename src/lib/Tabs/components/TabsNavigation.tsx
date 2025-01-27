import { css, styled } from 'styled-components';
import { Flex } from '../..';
import { RefObject } from 'react';
import TabsNavigationScrollButton from './TabsNavigationScrollButton';
import { TabsDirection } from '../../types/type';
import useTabs from '../hooks/useTabs';

type TabsNavigationProps = {
  tabsNavigation: RefObject<HTMLDivElement>;
  scrollButtons: boolean;
  direction: TabsDirection;
  centered: boolean;
  accentColor: string;
};

function TabsNavigation({
  tabsNavigation,
  scrollButtons,
  direction,
  accentColor,
  centered,
}: TabsNavigationProps) {
  const { isOverFlow, selectPanel, isSelected, panelList } = useTabs();

  return (
    <Layout direction={direction}>
      <TabsNavigationScrollButton
        scrollButtons={scrollButtons}
        direction={direction}
      >
        <TabsList ref={tabsNavigation} direction={direction}>
          <Flex
            tag="ul"
            direction={direction === 'vertical' ? 'column' : 'row'}
            justify={centered && !isOverFlow ? 'center' : 'flex-start'}
            align={centered && !isOverFlow ? 'center' : 'flex-start'}
          >
            {panelList.map(({ label, disabled }) => {
              return (
                <Flex.Item
                  tag="li"
                  key={label}
                  onClick={() => {
                    if (disabled) return;
                    selectPanel(label);
                  }}
                  style={{
                    color: isSelected(label)
                      ? accentColor
                      : disabled
                      ? '#cecece'
                      : '#000000',
                    cursor: !disabled && 'pointer',
                    userSelect: disabled && 'none',
                  }}
                >
                  {label}
                  {isSelected(label) && (
                    <SelectedLine
                      direction={direction}
                      $accentColor={accentColor}
                    />
                  )}
                </Flex.Item>
              );
            })}
          </Flex>
        </TabsList>
      </TabsNavigationScrollButton>
    </Layout>
  );
}

export default TabsNavigation;

const TAPS_LIST_STYLE = {
  horizontal: css`
    min-width: 100%;
    flex-direction: row;
    word-break: normal;
    white-space: nowrap;
    border-bottom: 1.5px solid #d0d0d0;
  `,
  vertical: css`
    min-width: 160px;
    width: 160px;
    flex-direction: column;
    word-break: break-all;
    white-space: normal;
    border-right: 1.5px solid #d0d0d0;
  `,
} as const;

const SELECTED_LINE_STYLE = {
  horizontal: css`
    width: 100%;
    height: 2px;
    left: 0;
  `,
  vertical: css`
    height: 100%;
    width: 2px;
    right: 0;
  `,
};

const Layout = styled.div<{ direction: TabsDirection }>`
  display: flex;
  align-items: center;
  gap: 10px;

  text-align: center;
  line-height: 160%;

  ${({ direction }) => TAPS_LIST_STYLE[direction]}
`;

const TabsList = styled.div<{ direction: TabsDirection }>`
  width: 100%;
  height: 100%;

  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  & > ul {
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    & > li {
      padding: 12px 16px;
      position: relative;

      transition: color 0.2s ease;
    }
  }
`;

const SelectedLine = styled.span<{
  direction: TabsDirection;
  $accentColor: string;
}>`
  position: absolute;
  bottom: 0;
  background-color: ${({ $accentColor }) => $accentColor};

  ${({ direction }) => SELECTED_LINE_STYLE[direction]}
`;
