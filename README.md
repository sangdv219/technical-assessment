This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Tôi chọn Next.js vì đây là framework toàn diện cho React, hỗ trợ render linh hoạt (SSR/SSG), tối ưu SEO, và có trải nghiệm dev hiện đại. Dưới đây là các lý do chính:

SEO & Hiệu năng: Với Server-side Rendering (SSR) hoặc Static Generation (SSG), Next.js giúp cải thiện hiệu suất tải trang ban đầu, rất quan trọng với SEO và tốc độ load.

Routing tích hợp sẵn: Không cần cấu hình router riêng như React Router, Next.js dùng file-based routing rất trực quan, giúp giảm boilerplate code.

Fullstack-ready: Next.js hỗ trợ API routes, thích hợp cho các bài test fullstack, không cần thiết lập backend riêng.

Built-in optimization: Tự động tối ưu hình ảnh (next/image), preload link (next/link), hỗ trợ internationalization, giúp tăng trải nghiệm người dùng.

Khả năng mở rộng: Phù hợp cho cả MVP nhỏ và production-grade app. Dễ dàng scale, triển khai qua Vercel, Docker hoặc cloud khác.
