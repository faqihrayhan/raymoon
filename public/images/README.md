# Guide: Adding & Customizing Images

Website portofolio **Raymoon** dirancang dengan struktur asset terpusat agar kamu bisa menambahkan/mengganti gambar PNG dengan sangat mudah.

---

## 1. Letak Folder Asset (`/public`)

Semua file gambar diletakkan di dalam folder `public/images/`:

* `public/images/profile/`
  * `avatar.png` → Foto avatar profil
  * `hero-cosmic.png` → Gambar ilustrasi di Hero section
* `public/images/tech/`
  * Ikon-ikon teknologi (contoh: `python.png`, `solana.png`, `solidity.png`, `typescript.png`, `docker.png`, dll)
* `public/images/projects/`
  * Screenshot/Banner portofolio & experience (contoh: `solana-agents.png`, `arc-contracts.png`, `nota-app.png`, `python-automation.png`, `outpost.png`)
* `public/images/background/`
  * Background texture / cosmic overlays

---

## 2. Cara Mengubah atau Menambah Asset di Code

Buka file **`src/config/assets.ts`**. Cukup ubah path nama file yang diinginkan:

```typescript
export const ASSETS = {
  profile: {
    avatar: "/images/profile/avatar.png",
    hero: "/images/profile/hero-cosmic.png",
  },
  tech: {
    python: "/images/tech/python.png",
    solana: "/images/tech/solana.png",
    // Tambah tech baru di sini
  },
  projects: {
    solanaAgents: "/images/projects/solana-agents.png",
    // Tambah project baru di sini
  }
};
```

---

## 3. Menambah Project / Tech Stack Baru

* Untuk data proyek: edit **`src/config/portfolio.ts`** pada array `EXPERIENCES` atau `TECH_STACK`.
* Jika gambar PNG belum ada di folder `/public`, komponen `SafeImage` secara otomatis menampilkan fallback placeholder futuristik sehingga website tidak akan error/rusak.
