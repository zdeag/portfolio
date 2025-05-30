import type { NextConfig } from "next";
import withMarkdoc from "@markdoc/next.js";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});

export default nextConfig;
