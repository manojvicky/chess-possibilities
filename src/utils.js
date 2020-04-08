function bishop(x, y) {
  const possibleValues = [];
  //top-right
  let dX = Number(x);
  let dY = Number(y);
  while (dX + 1 <= 7 && dY - 1 >= 0) {
    possibleValues.push({ x: dX + 1, y: dY - 1 });
    dX++;
    dY--;
  }

  //top-left
  dX = Number(x);
  dY = Number(y);
  while (dX - 1 >= 0 && dY - 1 >= 0) {
    possibleValues.push({ x: dX - 1, y: dY - 1 });
    dX--;
    dY--;
  }
  //bottom-right
  dX = Number(x);
  dY = Number(y);
  while (dX + 1 <= 7 && dY + 1 <= 7) {
    possibleValues.push({ x: dX + 1, y: dY + 1 });
    dX++;
    dY++;
  }

  //bottom-left
  dX = Number(x);
  dY = Number(y);
  while (dX - 1 >= 0 && dY + 1 <= 7) {
    possibleValues.push({ x: dX - 1, y: dY + 1 });
    dX--;
    dY++;
  }
  return possibleValues;
}

function king(x, y) {
  const possibleValues = [];
  let dX = Number(x);
  let dY = Number(y);

  //right
  if (dX + 1 <= 7) {
    possibleValues.push({ x: dX + 1, y: dY });
  }
  //left
  if (dX - 1 >= 0) {
    possibleValues.push({ x: dX - 1, y: dY });
  }
  //top
  if (dY - 1 >= 0) {
    possibleValues.push({ x: dX, y: dY - 1 });
  }
  //bottom
  if (dY + 1 <= 7) {
    possibleValues.push({ x: dX, y: dY + 1 });
  }
  //top-right
  if (dX + 1 <= 7 && dY - 1 >= 0) {
    possibleValues.push({ x: dX + 1, y: dY - 1 });
  }
  //top-left
  if (dX - 1 >= 0 && dY - 1 >= 0) {
    possibleValues.push({ x: dX - 1, y: dY - 1 });
  }
  //bottom-right
  if (dX + 1 <= 7 && dY + 1 <= 7) {
    possibleValues.push({ x: dX + 1, y: dY + 1 });
  }

  //bottom-left
  if (dX - 1 >= 0 && dY + 1 <= 7) {
    possibleValues.push({ x: dX - 1, y: dY + 1 });
  }

  return possibleValues;
}

function queen(x, y) {
  const possibleValues = [];
  let dX = Number(x);
  let dY = Number(y);

  //right
  while (dX + 1 <= 7) {
    possibleValues.push({ x: dX + 1, y: dY });
    dX++;
  }
  dX = Number(x);

  //left
  while (dX - 1 >= 0) {
    possibleValues.push({ x: dX - 1, y: dY });
    dX--;
  }
  dX = Number(x);

  //top
  while (dY - 1 >= 0) {
    possibleValues.push({ x: dX, y: dY - 1 });
    dY--;
  }
  dY = Number(y);

  //bottom
  while (dY + 1 <= 7) {
    possibleValues.push({ x: dX, y: dY + 1 });
    dY++;
  }
  dY = Number(y);

  //top-right
  dX = Number(x);
  dY = Number(y);
  while (dX + 1 <= 7 && dY - 1 >= 0) {
    possibleValues.push({ x: dX + 1, y: dY - 1 });
    dX++;
    dY--;
  }

  //top-left
  dX = Number(x);
  dY = Number(y);
  while (dX - 1 >= 0 && dY - 1 >= 0) {
    possibleValues.push({ x: dX - 1, y: dY - 1 });
    dX--;
    dY--;
  }
  //bottom-right
  dX = Number(x);
  dY = Number(y);
  while (dX + 1 <= 7 && dY + 1 <= 7) {
    possibleValues.push({ x: dX + 1, y: dY + 1 });
    dX++;
    dY++;
  }

  //bottom-left
  dX = Number(x);
  dY = Number(y);
  while (dX - 1 >= 0 && dY + 1 <= 7) {
    possibleValues.push({ x: dX - 1, y: dY + 1 });
    dX--;
    dY++;
  }

  return possibleValues;
}

function rook(x, y) {
  const possibleValues = [];
  let dX = Number(x);
  let dY = Number(y);

  //right
  while (dX + 1 <= 7) {
    possibleValues.push({ x: dX + 1, y: dY });
    dX++;
  }
  dX = Number(x);

  //left
  while (dX - 1 >= 0) {
    possibleValues.push({ x: dX - 1, y: dY });
    dX--;
  }
  dX = Number(x);

  //top
  while (dY - 1 >= 0) {
    possibleValues.push({ x: dX, y: dY - 1 });
    dY--;
  }
  dY = Number(y);

  //bottom
  while (dY + 1 <= 7) {
    possibleValues.push({ x: dX, y: dY + 1 });
    dY++;
  }
  return possibleValues;
}

function knight(x, y) {
  const possibleValues = [];
  let dX = Number(x);
  let dY = Number(y);

  //top-right and top-left
  if (dY + 2 <= 7) {
    if (dX + 1 <= 7) {
      possibleValues.push({ x: dX + 1, y: dY + 2 });
    }
    if (dX - 1 >= 0) {
      possibleValues.push({ x: dX - 1, y: dY + 2 });
    }
  }

  //bottom-left and bottom right
  if (dY - 2 >= 0) {
    if (dX + 1 <= 7) {
      possibleValues.push({ x: dX + 1, y: dY - 2 });
    }
    if (dX - 1 >= 0) {
      possibleValues.push({ x: dX - 1, y: dY - 2 });
    }
  }

  //right-top and right-bottom
  if (dX + 2 <= 7) {
    if (dY + 1 <= 7) {
      possibleValues.push({ x: dX + 2, y: dY + 1 });
    }
    if (dY - 1 >= 0) {
      possibleValues.push({ x: dX + 2, y: dY - 1 });
    }
  }

  //left-top and left-bottom
  if (dX - 2 >= 0) {
    if (dY + 1 <= 7) {
      possibleValues.push({ x: dX - 2, y: dY + 1 });
    }
    if (dY - 1 >= 0) {
      possibleValues.push({ x: dX - 2, y: dY - 1 });
    }
  }

  return possibleValues;
}

function Utils() {
  return {
    bishop,
    king,
    queen,
    rook,
    knight
  };
}
export default Utils();
