// Quiet typescript warnings when font files are imported.
declare module "*.woff" {
  const fontUrl = "";
  export default fontUrl;
}
