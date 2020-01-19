test('test', async () => {
  const shares_amount = '2500000000000000000';
  console.log(appendZero(shares_amount, 10));
});

function appendZero(num: string, count: number): string {
  const length = num.length;
  const dotIndex = num.lastIndexOf('.');
  if (dotIndex <= 0) return appendZero(num + '.0', count);
  if (length - (dotIndex + 1) < count) return appendZero(num + '0', count);
  return num;
}
