export interface Company {
    id: number;
    numberId: string;
    name: string;
    businessName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    createdAt: Date;
    modifiedAt: Date;
    theme: string;
    feature: CompanyFeature[]
    images: CompanyImage[]
    status: number;
    metaDescription: string;
    aboutus: string;
    siteUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    tiktokUrl: string;
}

interface CompanyFeature {
  id: number;
  name: string;
  available: boolean;
}

export interface CompanyImage {
  id: number;
  name: string;
  description: string;
  altText: string;
  type: string;
}
