export const buildUrlPath = ({ basePath, port, complement }) => {
  console.log(`${basePath}:${port}${complement}`);
  return `${basePath}:${port}${complement}`;
};
