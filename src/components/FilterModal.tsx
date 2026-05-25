import React, { useState } from 'react';
import { X, Star, ChevronDown } from 'lucide-react';

export function FilterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleSelection = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter((prev: string[]) => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6" dir="rtl">
      <div className="absolute inset-0 bg-diyar-dark/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-2xl flex flex-col relative z-10 shadow-2xl h-[90vh] md:h-auto md:max-h-[85vh] mt-auto md:mt-0 overflow-hidden transform transition-transform">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-20">
          <h2 className="text-2xl font-sans font-bold text-diyar-dark">فلاتر البحث</h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-diyar-dark hover:bg-gray-100 rounded-full transition-colors"><X size={24} /></button>
        </div>
        
        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Price */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-diyar-dark">السعر (ريال)</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input type="number" placeholder="من" className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-diyar-brown focus:ring-1 focus:ring-diyar-brown outline-none transition-all" />
              </div>
              <span className="text-gray-400">-</span>
              <div className="flex-1 relative">
                <input type="number" placeholder="إلى" className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:border-diyar-brown focus:ring-1 focus:ring-diyar-brown outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* Type */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-diyar-dark">النوع</h3>
            <div className="flex flex-wrap gap-2">
              {['غرف نوم', 'صالونات', 'مطابخ', 'مكاتب', 'طاولات', 'ديكور', 'إضاءة'].map((type) => (
                <button 
                  key={type}
                  onClick={() => toggleSelection(setSelectedTypes, type)}
                  className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${selectedTypes.includes(type) ? 'border-diyar-brown bg-diyar-brown text-white' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-diyar-dark">اللون</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'أبيض', class: 'bg-white border-gray-200' },
                { name: 'أسود', class: 'bg-black border-black' },
                { name: 'بني', class: 'bg-amber-800 border-amber-800' },
                { name: 'خشبي', class: 'bg-[#C19A6B] border-[#C19A6B]' },
                { name: 'رمادي', class: 'bg-gray-400 border-gray-400' },
                { name: 'أزرق', class: 'bg-blue-800 border-blue-800' },
                { name: 'أخضر', class: 'bg-emerald-700 border-emerald-700' },
              ].map((color) => (
                <button 
                  key={color.name}
                  onClick={() => toggleSelection(setSelectedColors, color.name)}
                  className={`w-10 h-10 rounded-full border shadow-sm relative flex items-center justify-center transition-transform hover:scale-110 ${color.class}`}
                  title={color.name}
                >
                  {selectedColors.includes(color.name) && (
                    <div className={`absolute inset-0 rounded-full ring-2 ring-offset-2 ring-diyar-brown pointer-events-none`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Merchant */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-diyar-dark">التاجر / المتجر</h3>
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-diyar-dark appearance-none focus:bg-white focus:border-diyar-brown focus:ring-1 focus:ring-diyar-brown outline-none transition-all cursor-pointer">
                <option value="">الكل</option>
                <option value="ikea">إيكيا (IKEA)</option>
                <option value="homecentre">هوم سنتر (Home Centre)</option>
                <option value="abayat">أبيات (Abyat)</option>
                <option value="almutlaq">مفروشات المطلق</option>
                <option value="midas">ميداس (Midas)</option>
              </select>
              <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-diyar-dark">التقييم</h3>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group w-fit">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedRating === rating ? 'bg-diyar-brown border-diyar-brown' : 'border-gray-300 group-hover:border-diyar-brown'}`}>
                    {selectedRating === rating && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                  </div>
                  <input type="radio" className="hidden" name="rating" checked={selectedRating === rating} onChange={() => setSelectedRating(rating)} />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                    {rating < 5 && <span className="text-sm text-gray-500 mr-2 font-medium">فأكثر</span>}
                  </div>
                </label>
              ))}
            </div>
          </div>

        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex gap-4 bg-white sticky bottom-0 z-20 md:rounded-b-3xl">
          <button 
            onClick={() => {
              setSelectedTypes([]);
              setSelectedColors([]);
              setSelectedRating(null);
            }}
            className="px-6 py-3.5 text-gray-600 font-bold hover:bg-gray-100 transition rounded-xl w-1/3 text-center"
          >
            مسح الكل
          </button>
          <button className="flex-1 bg-diyar-dark text-white py-3.5 rounded-xl font-bold hover:bg-diyar-brown transition-colors shadow-lg shadow-diyar-dark/20 text-lg">
            إظهار (124) نتيجة
          </button>
        </div>
      </div>
    </div>
  );
}
