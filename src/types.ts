/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Campaign {
  id: string;
  title: string;
  category: "pembangunan" | "wakaf" | "sosial" | "beasiswa" | "pendidikan" | "orang-tua-asuh" | "operasional-dakwah" | string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  donorsCount: number;
  imageUrl: string;
  isUrgent?: boolean;
}

export interface FosterPackage {
  id: string;
  name: string;
  price: number;
  period: string;
  benefits: string[];
  description: string;
  badge?: string;
}

export interface EducationUnit {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  targetAudience: string;
  features: string[];
  imageUrl: string;
  iconName: string; // Used to map to Lucide icons
}

export interface ProgressUpdate {
  id: string;
  title: string;
  date: string;
  percentage: number;
  description: string;
  category: "pembangunan" | "kegiatan" | "keuangan";
  imageUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: "pembangunan" | "rutaba" | "tahfidz" | "kegiatan";
  imageUrl: string;
}

export interface Testimony {
  id: string;
  author: string;
  role: string;
  content: string;
}
