function myCalculateFee(shareCapital) {
  if (shareCapital <= 25000) {
    return 300;
  } else if (shareCapital > 25000 && shareCapital <= 500000) {
    return 300 + 20 * ((shareCapital - 25000) / 5000);
  } else if (shareCapital > 500000 && shareCapital <= 1000000) {
    return 2200 + 10 * ((shareCapital - 500000) / 5000);
  } else if (shareCapital > 1000000 && shareCapital <= 50000000) {
    return 3200 + 5 * ((shareCapital - 1000000) / 15000);
  } else if (shareCapital > 50000000) {
    return 19535 + 3 * ((shareCapital - 50000000) / 20000);
  } else {
    return 0;
  }
}
