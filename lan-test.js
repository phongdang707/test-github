const tbc = (a, b) => {
  if (typeof a !== "number") {
    throw new Error("a must be a number");
  }

  if (typeof b !== "number") {
    throw new Error("b must be a number");
  }

  return (a + b) / 2;
};

const tbc2 = (a, b) => {
  if (typeof a !== "number") {
    throw new Error("a must be a number");
  }

  if (typeof b !== "number") {
    throw new Error("b must be a number");
  }

  return (a + b) / 2;
};
