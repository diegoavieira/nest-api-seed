export default (): any => ({
  port: parseInt(process.env.PORT, 10) || 5000
});
