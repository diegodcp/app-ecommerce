import { Company } from "./company.interface";

export interface Product {
    id: number;
    name: string;
    description: string;
    isNew: boolean;
    createdAt: Date;
    shiptime: ShipTime;
    sizetable: SizeTable;
    company: Company;
    productCategory: ProductCategory[];
    productVariation: ProductVariation[];
    favourite: string;
    status: number;
}

export interface ProductVariation {
    id: number;
    sku: string;
    order: number;
    unitPrice: number;
    oldPrice: number;
    available: number;
    quantity: number;
    weight: number;
    status: number;
    product: Product;
    size: ProductVariationSize;
    color: ProductVariationColor;
    images: ProductVariationImage[]; 
}

export interface ProductVariationImage {
    id: number;
    name: string;
    altText: string;
    publicId: string;
    deleteToken: string;
    order: number;
    productVariation: ProductVariation;
}

export interface ProductVariationSize {
    id: number;
    name: string;
    description: string;
    productVariation: ProductVariation;
}

export interface ProductVariationColor {
    id: number;
    name: string;
    code: string;
    productVariation: ProductVariation;
}

export interface ProductCategory {
    id: number;
    category: Category;
    subcategory: SubCategory;
}
export interface Category {
    id: number;
    name: string;
    description: string;
    order: number;
    image: string;
    subcategory: SubCategory[]
}

export interface SubCategory {
    id: number;
    name: string;
    description: string;
    order: number;
    image: string;
}

export interface ShipTime {
    id: number;
    name: string;
    description: string;
}

export interface SizeTable {
    id: number;
    name: string;
    src: string;
    status: string;
}