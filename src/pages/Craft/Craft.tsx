import { useState } from 'react';
import { IoBook } from 'react-icons/io5';

import { AppearingText } from '@/components/AppearingText/AppearingText';
import { Block, Cell, CraftCell } from '@/components/CraftCell/CraftCell';
import { MacIconWrapper, Safari } from 'components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './Craft.module.scss';
const Craft = () => {
  const [clickerGlowSize, setClickerGlowSize] = useState(100);

  const [craftingTable, setCraftingTable] = useState<Cell[][]>([
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ]);
  const [craftingResult, setCraftingResult] = useState<Cell>({});

  const [inventory, setInventory] = useState<Cell[][]>(
    Array.from({ length: 4 }, () => Array.from({ length: 12 }, () => ({}))),
  );

  const [pickaxe, setPickaxe] = useState<string>();
  const [block, setBlock] = useState<Block>('wood');
  const [selectedItem, setSelectedItem] = useState<[number, number]>();

  const getInventoryCell = (x: number, y: number) => {
    return inventory[y] ? inventory[y][x] : {};
  };

  const setInventoryCell = (x: number, y: number, cell: Cell) => {
    if (inventory[y]) {
      const updatedRow = [...inventory[y]];
      updatedRow[x] = cell;
      const updatedInventory = [...inventory];
      updatedInventory[y] = updatedRow;
      setInventory(updatedInventory);
    }
  };

  const handleClickBlock = () => {
    setClickerGlowSize(70);
    setTimeout(() => {
      setClickerGlowSize(100);
    }, 300);

    const cell = getInventoryCell(0, 0);
    setInventoryCell(0, 0, {
      contains: block,
      amount: (cell?.amount ?? 0) + 1,
    });
  };

  const handleClickOnCellInInventory = (
    xCoordinateCell: number,
    yCoordinateCell: number,
    cell: Cell,
  ) => {
    if (!cell.contains) return;
    setSelectedItem([xCoordinateCell, yCoordinateCell]);
  };

  const ValidateSelected = (
    xCoordinateCell: number,
    yCoordinateCell: number,
  ) => {
    if (!selectedItem) return;

    if (
      xCoordinateCell === selectedItem[0] &&
      yCoordinateCell === selectedItem[1]
    )
      return true;
  };

  return (
    <div className={styles.container}>
      <Safari openedLink="qalqa.com/mine">
        <div className={styles.webview}>
          <div className={styles.clicker}>
            <h2 className={styles.title}>
              <AppearingText text="Mine" />
            </h2>
            <div className="grid grid-cols-[1fr_3fr_1fr] w-full">
              <div></div>
              <div
                onClick={handleClickBlock}
                className={styles['clicker-block']}
              >
                <div
                  className={styles['clicker-backdrop']}
                  style={{
                    backgroundSize: `${clickerGlowSize}%`,
                  }}
                >
                  <img
                    width={275}
                    height={275}
                    src={`/src/assets/clicker_blocks/${block}.png`}
                    alt="block"
                  />
                </div>
              </div>
              <div className={styles['clicker-pickaxe']}>
                <div className={styles['clicker-pickaxe-container']}>
                  {pickaxe && (
                    <img
                      className={styles['clicker-pickaxe-img']}
                      src={`/src/assets/clicker_tools/${pickaxe}_pickaxe.webp`}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Safari>
      <Safari openedLink="qalqa.com/craft">
        <div className={styles.webview}>
          <div className="flex justify-center">
            <h2 className={styles.title}>
              <AppearingText text="Craft" />
            </h2>
            <ul className={styles['actions-list']}>
              <li className={styles['actions-item']}>
                <MacIconWrapper>
                  <IoBook />
                </MacIconWrapper>
              </li>
            </ul>
          </div>
          <div className={styles['crafting-window']}>
            <h3>Crafting Table</h3>
            <div className={styles['crafting-area']}>
              <div className={styles['crafting-table']}>
                {craftingTable.map((row, rowIndex) => (
                  <div className={styles['crafting-table-row']} key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <div key={cellIndex}>
                        {<CraftCell contains={cell.contains} />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <FaLongArrowAltRight size={64} />
              <div>{<CraftCell contains={craftingResult.contains} />}</div>
            </div>
            <h3>Inventory</h3>
            <div className={styles.inventory}>
              {inventory.map((row, rowIndex) => (
                <div className={styles['inventory-row']} key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <div
                      onClick={() =>
                        handleClickOnCellInInventory(rowIndex, cellIndex, cell)
                      }
                      key={cellIndex}
                    >
                      {
                        <CraftCell
                          isSelected={ValidateSelected(rowIndex, cellIndex)}
                          contains={cell.contains}
                          amount={cell.amount}
                        />
                      }
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Safari>
    </div>
  );
};
export default Craft;
