const formatIsoDate = (date: string) => new Date(date).toLocaleString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

export default formatIsoDate;
