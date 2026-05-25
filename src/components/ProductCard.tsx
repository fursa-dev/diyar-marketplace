import React from 'react';
import { Heart, Star, Store, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({product}: {product: any}) {
  return (
    <Link to={`/product/${product?.id || '1'}`} className="block h-full group">
      <div className="border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white relative flex flex-col h-full">
        <div className="relative mb-2 aspect-[4/3] md:h-40 overflow-hidden">
          <img 
            src={product.img} 
            alt={product.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=60&w=400";
            }}
          />
          <Heart 
            className="absolute top-2 right-2 text-diyar-brown cursor-pointer hover:fill-diyar-brown bg-white/80 backdrop-blur-md p-1.5 rounded-full w-7 h-7 shadow-sm transition-all z-10" 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} 
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 text-[9px] font-bold rounded shadow-sm z-10">تخفيض 20%</span>
        </div>
        
        <div className="flex flex-col flex-grow px-3 pb-3">
          <div className="flex items-center gap-1 text-gray-500 text-[10px] mb-1 font-medium">
            <Store size={12} className="text-diyar-brown" />
            <span>{product.vendor || product.store}</span>
          </div>
          
          <h3 className="font-bold text-sm md:text-base mb-1.5 line-clamp-2 text-diyar-dark leading-tight">{product.name}</h3>
          
          <div className="flex flex-wrap items-center justify-between gap-y-1 mb-2 mt-auto">
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < 4 ? "currentColor" : "none"} strokeWidth={i < 4 ? 0 : 2} />)}
              <span className="text-gray-400 text-[9px] mr-1 mt-0.5">({product.reviews || 24})</span>
            </div>
            <div className="flex items-center gap-1 text-diyar-brown text-[9px] bg-orange-50 px-1.5 py-0.5 rounded-md font-medium">
               <Award size={10} />
               <span>+50 نقطة</span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 mb-3">
            <span className="font-bold text-lg text-diyar-dark">{product.price} ر.س</span>
            {(product.oldPrice || product.originalPrice) && (
              <span className="text-gray-400 line-through text-[10px]">{product.oldPrice || product.originalPrice} ر.س</span>
            )}
          </div>
          <button 
            className="w-full bg-gray-50 text-diyar-dark border border-gray-200 rounded-lg py-1.5 font-bold text-xs transition-all group-hover:bg-diyar-dark group-hover:text-white group-hover:border-diyar-dark flex items-center justify-center gap-1.5 mt-auto z-10 relative"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            أضف للسلة
          </button>
        </div>
      </div>
    </Link>
  );
}
