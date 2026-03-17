/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/index.html', permanent: false }
    ];
  }
};

export default nextConfig;
```

Save it, then run:
```
git add .
git commit -m "redirect to index.html"
git push