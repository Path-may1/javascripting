const smartGarbage = function (trash, bins) {
  const binNames = Object.keys(bins);
  for (let x of binNames) {
  if (x === trash) {
  bins[x] =bins[x]+1;
  }
  }
  return(bins);
  }
  
  smartGarbage('recycling',{ waste: 4, recycling: 2, compost: 5 });
