interface Kategori {
  id: string;
  name: string;
  description: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface Laporan {
  id: string;
  user_id: string;
  judul: string;
  kategori_id: string;
  kategori: Kategori;
  deskripsi: string;
  created_at: string;
  updated_at: string;
  user: User;
}

interface Rekening {
  id: string;
  user_id: string;
  kode: string;
  name: string;
  cabang: string;
  rekening: string;
  bank: string;
  created_at: string;
  updated_at: string;
  user: User;
}
