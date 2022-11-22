export const getShortDate = (date) =>
  !!date
    ?
    new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    : '';

export const getDateTime = (date) =>
  !!date
    ?
    new Date(date).toLocaleString('en-US')
    : '';

export const getDateDiff = (date) => {
  if (!date) return null;
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(new Date(date) - new Date());
  return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
}
