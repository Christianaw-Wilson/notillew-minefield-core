import { columns as columnsManager }  from './columns';
import generator from "./generator";
import mines from "./mines";

export const isMine = mines.isMine;


interface MinefieldCore {
  minefields: Array<number[]>,
  minesMap: Object,
}

const minefieldCore = {
  generate: (columns: number, rows: number, minesQuantity: number): MinefieldCore => {
    if (columns < 12 || rows < 12) {
      throw new Error('Invalid rows or columns quantity');
    }

    if (minesQuantity < 6 || minesQuantity >= (columns * rows)) {
      throw new Error('Invalid mines quantity');
    }

    const { minefields: tempMinefields, minesMap } = mines.insertMines(
      generator.linesAndRows(columns, rows),
      minesQuantity,
    );

    const minefields = columnsManager.numberifyColumns(tempMinefields);

    return {
      minefields,
      minesMap,
    };
  },
};

minefieldCore.generate(12, 12, 24);

export default minefieldCore;
