/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
cssModules: true  // After true than use import statement in next.js
})

module.exports = nextConfig
