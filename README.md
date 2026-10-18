# Next.js RBAC Demo (NextAuth v5 + Prisma + SQLite)

## เริ่มใช้งาน (Windows / Mac / Linux)
```
npm install
npm run db:setup
npm run dev
```
เปิด http://localhost:3000

`npm run db:setup` จะสร้างฐานข้อมูล SQLite (prisma/dev.db) และสร้างบัญชีทดสอบ:

| Role  | Email             | Password |
|-------|-------------------|----------|
| ADMIN | admin@example.com | admin123 |
| STAFF | staff@example.com | staff123 |
| USER  | user@example.com  | user123  |

(เปลี่ยนรหัสผ่านหรือลบบัญชีเหล่านี้ก่อนนำไปใช้งานจริง)

## GitHub Login (ไม่บังคับ)
GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
- Homepage URL: http://localhost:3000
- Callback URL: http://localhost:3000/api/auth/callback/github

แล้วใส่ AUTH_GITHUB_ID / AUTH_GITHUB_SECRET ใน `.env` และรีสตาร์ต `npm run dev`

## หน้าต่าง ๆ
/ · /login · /signup · /login-github · /dashboard · /admin (ADMIN เท่านั้น) · /unauthorized

## เปลี่ยน role
`npm run db:studio` แล้วแก้ role ของผู้ใช้
