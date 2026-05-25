import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, HeartCrack } from 'lucide-react';
import ProductCard from '../components/ProductCard.tsx';

export default function WishlistPage() {
  const favoriteProducts = [
    { id: 1, name: "طقم كنب زاوية فاخر", price: "4,500", rating: 4.8, reviews: 124, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", store: "مفروشات الرقي", tag: "الأكثر مبيعاً" },
    { id: 2, name: "سرير مزدوج مودرن", price: "2,200", rating: 4.5, reviews: 89, img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=400", store: "بيت الراحة" },
    { id: 4, name: "خزانة ملابس 6 أبواب", price: "1,950", rating: 4.2, reviews: 34, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400", store: "إيكيا" },
    { id: 6, name: "كرسي استرخاء مخملي", price: "1,200", rating: 4.7, reviews: 78, img: "https://images.unsplash.com/photo-1598300042247-d317bd127e7b?auto=format&fit=crop&q=80&w=400", store: "أشلي" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 md:pb-12">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-diyar-dark transition">الرئيسية</Link>
            <ChevronLeft size={16} />
            <Link to="/profile" className="hover:text-diyar-dark transition">حسابي</Link>
            <ChevronLeft size={16} />
            <span className="font-bold text-diyar-dark">المفضلة</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-diyar-dark mb-1">المفضلة</h1>
          <p className="text-gray-500 text-sm">تضم المفضلة الخاصة بك {favoriteProducts.length} منتجات</p>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
              <HeartCrack size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-diyar-dark mb-2">قائمة المفضلة فارغة</h3>
            <p className="text-gray-500 mb-8 max-w-md">لم تقم بإضافة أي منتجات إلى قائمة المفضلة حتى الآن. تصفح المنتجات وأضف ما يعجبك هنا لسهولة الوصول إليه لاحقاً.</p>
            <Link to="/" className="bg-diyar-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">
              تصفح المنتجات
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
