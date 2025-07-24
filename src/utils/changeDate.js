export const changeDate = (date) => {
  const time = new Date(date);
  return `${time.getFullYear()}.${time.getMonth() + 1}.${time.getDate()}`;
};
