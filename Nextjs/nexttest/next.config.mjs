/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return [
      {
        source :"/",
        destination:"/products",
        permanent:true
      },
      {
        source:"/admin",
        destination:"/",
        permanent:false
      }
    ]
  }
};

export default nextConfig;
