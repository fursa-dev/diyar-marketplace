import React, { useState } from 'react';
import { Search, Plus, Filter, Edit, Trash2, Tag, Megaphone, Check, X, Upload, ArrowRight, Eye, LayoutGrid, List } from 'lucide-react';

export default function VendorProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const MOCK_PRODUCTS = [
    { id: 1, name: 'أريكة استرخاء مخملية', category: 'الصالونات', price: 1250, stock: 15, isAffiliate: true, commission: '10%' },
    { id: 2, name: 'طاولة طعام خشبية', category: 'غرف الطعام', price: 2400, stock: 5, isAffiliate: false, commission: null },
    { id: 3, name: 'كرسي مكتب مريح', category: 'المكاتب', price: 450, stock: 0, isAffiliate: true, commission: '15%' },
    { id: 4, name: 'سرير مزدوج', category: 'غرف النوم', price: 3200, stock: 8, isAffiliate: true, commission: '8%' },
    { id: 5, name: 'طاولة قهوة', category: 'الصالونات', price: 350, stock: 24, isAffiliate: false, commission: null },
  ];

  const filteredProducts = MOCK_PRODUCTS.filter(p => p.name.includes(searchTerm));

  if (selectedProduct) {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setSelectedProduct(null)} className="p-2 text-gray-500 hover:text-diyar-dark hover:bg-gray-100 rounded-xl transition">
              <ArrowRight size={20} />
            </button>
            <div>
              <h2 className="text-xl font-bold text-diyar-dark">{selectedProduct.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{selectedProduct.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="px-4 py-2 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 shadow-sm">
               إلغاء التفعيل
             </button>
             <button className="px-4 py-2 text-sm font-bold text-white bg-diyar-brown rounded-xl hover:bg-[#A67B5B] transition flex items-center gap-2 shadow-sm">
               <Edit size={16} />
               تعديل تفاصيل المنتج
             </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300" alt="صورة المنتج" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 flex-1">
                   <div>
                     <h3 className="font-bold text-xl text-diyar-dark mb-1">{selectedProduct.name}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">أريكة استرخاء مخملية مصممة خصيصاً لتوفير أقصى درجات الراحة مع تصميم عصري يناسب غرف المعيشة الحديثة. مصنوعة من إسفنج عالي الكثافة ومغطاة بقماش مخملي ناعم الملمس.</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                       <span className="text-xs text-gray-400 block mb-1">السعر</span>
                       <span className="font-bold text-diyar-brown text-lg">{selectedProduct.price} ر.س</span>
                     </div>
                     <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                       <span className="text-xs text-gray-400 block mb-1">المخزون المتوفر</span>
                       <span className={`font-bold text-lg ${selectedProduct.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>{selectedProduct.stock} قطعة</span>
                     </div>
                   </div>
                </div>
             </div>
             
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-diyar-dark mb-6 border-b border-gray-100 pb-4">المواصفات والتفاصيل</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                     <span className="text-gray-500 font-medium">الأبعاد</span>
                     <span className="col-span-2 text-diyar-dark">220 سم × 90 سم × 85 سم</span>
                  </div>
                  <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                     <span className="text-gray-500 font-medium">اللون</span>
                     <span className="col-span-2 text-diyar-dark">رمادي داكن</span>
                  </div>
                  <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                     <span className="text-gray-500 font-medium">الخامة الأساسية</span>
                     <span className="col-span-2 text-diyar-dark">مخمل إيطالي، خشب سويدي صلب</span>
                  </div>
                  <div className="grid grid-cols-3 py-2 border-b border-gray-50">
                     <span className="text-gray-500 font-medium">الضمان</span>
                     <span className="col-span-2 text-diyar-dark">سنتين على الهيكل الداخلي</span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="space-y-6 lg:col-span-1">
             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-diyar-dark mb-4 border-b border-gray-100 pb-4">إحصائيات المبيعات</h3>
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                     <span className="text-gray-500 text-sm">عدد الطلبات</span>
                     <span className="font-bold text-diyar-dark">45 طلب</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-gray-500 text-sm">إجمالي الإيرادات</span>
                     <span className="font-bold text-green-600">56,250 ر.س</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-gray-500 text-sm">معدل الإرجاع</span>
                     <span className="font-bold text-diyar-dark">2.1%</span>
                   </div>
                </div>
             </div>
             
             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Megaphone size={20} className="text-green-600" />
                  <h3 className="font-bold text-green-800">التسويق بالعمولة</h3>
                </div>
                
                {selectedProduct.isAffiliate ? (
                  <div className="space-y-4">
                    <div className="bg-white/60 p-3 rounded-xl">
                      <span className="text-xs text-green-700 block mb-1">العمولة الحالية</span>
                      <span className="font-bold text-green-800 text-lg">{selectedProduct.commission}</span>
                    </div>
                    <div className="text-sm text-green-700 leading-relaxed pb-2 border-b border-green-200/50">
                      هذا المنتج متاح حالياً للمسوقين. تم بيع 12 قطعة عن طريق روابط التسويق بالعمولة.
                    </div>
                    <button className="w-full bg-white hover:bg-gray-50 text-green-700 font-bold py-2.5 rounded-xl transition shadow-sm text-sm">
                      تعديل نسبة العمولة
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-green-700 leading-relaxed">
                      هذا المنتج غير مفعل في برنامج التسويق بالعمولة. بتفعيله ستزيد مبيعاتك عبر وصول أكبر.
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition shadow-sm text-sm">
                      تفعيل التسويق بالعمولة
                    </button>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-diyar-dark">المنتجات والمخزون</h2>
          <p className="text-gray-500 text-sm mt-1">إدارة منتجاتك، تتبع المخزون، وتفعيل التسويق بالعمولة.</p>
        </div>
        
        <div className="flex items-center gap-3 relative flex-wrap">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-1.5 rounded-lg transition ${viewMode === 'list' ? 'bg-white shadow-sm text-diyar-dark' : 'text-gray-500 hover:text-diyar-dark'}`}
            >
              <List size={18} />
            </button>
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-1.5 rounded-lg transition ${viewMode === 'grid' ? 'bg-white shadow-sm text-diyar-dark' : 'text-gray-500 hover:text-diyar-dark'}`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="ابحث عن منتج..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-diyar-brown/20 focus:border-diyar-brown text-sm w-full md:w-64"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="relative">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="p-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition">
              <Filter size={20} />
            </button>
            {isFilterOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-10 py-2">
                <h4 className="px-4 py-1 text-xs font-bold text-gray-400 mb-1">القسم</h4>
                <button className="w-full text-right px-4 py-1.5 hover:bg-gray-50 text-sm text-diyar-dark">الصالونات</button>
                <button className="w-full text-right px-4 py-1.5 hover:bg-gray-50 text-sm text-diyar-dark">غرف النوم</button>
                <button className="w-full text-right px-4 py-1.5 hover:bg-gray-50 text-sm text-diyar-dark">المكاتب</button>
                <div className="border-t border-gray-100 my-1"></div>
                <h4 className="px-4 py-1 text-xs font-bold text-gray-400 mb-1">حالة المخزون</h4>
                <button className="w-full text-right px-4 py-1.5 hover:bg-gray-50 text-sm text-diyar-dark">متوفر</button>
                <button className="w-full text-right px-4 py-1.5 hover:bg-gray-50 text-sm text-diyar-dark">نفذت الكمية</button>
              </div>
            )}
          </div>

          <button onClick={() => setIsAddModalOpen(true)} className="bg-diyar-brown text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#A67B5B]/90 transition">
            <Plus size={18} />
            إضافة منتج
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="bg-white border rounded-2xl border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-gray-50 text-gray-600 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold">المنتج</th>
                  <th className="px-6 py-4 font-bold">القسم</th>
                  <th className="px-6 py-4 font-bold">السعر</th>
                  <th className="px-6 py-4 font-bold">المخزون</th>
                  <th className="px-6 py-4 font-bold text-center">التسويق بالعمولة</th>
                  <th className="px-6 py-4 font-bold text-left">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-diyar-dark flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                        <Tag size={16} />
                      </div>
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-gray-500">{product.category}</td>
                    <td className="px-6 py-4 font-bold text-diyar-brown">{product.price} ر.س</td>
                    <td className="px-6 py-4">
                      {product.stock > 0 ? (
                        <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-bold border border-green-200">
                          ({product.stock}) متوفر
                        </span>
                      ) : (
                        <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold border border-red-200">
                          نفذت الكمية
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {product.isAffiliate ? (
                        <div className="inline-flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 text-green-700 text-xs font-bold">
                          <Check size={12} /> مفعل ({product.commission})
                        </div>
                      ) : (
                        <button className="text-xs text-gray-500 hover:text-diyar-brown border border-gray-200 px-2.5 py-1 rounded-full hover:bg-gray-50 transition flex items-center gap-1 mx-auto">
                          <Megaphone size={12} /> تفعيل
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 justify-end">
                         <button onClick={() => setSelectedProduct(product)} className="text-gray-400 hover:text-diyar-brown transition p-1" title="عرض التفاصيل">
                           <Eye size={16} />
                         </button>
                         <button className="text-gray-400 hover:text-blue-500 transition p-1" title="تعديل">
                           <Edit size={16} />
                         </button>
                         <button className="text-gray-400 hover:text-red-500 transition p-1" title="حذف">
                           <Trash2 size={16} />
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 text-gray-500">لا يوجد منتجات تطابق بحثك</div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
             <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
               <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-gray-300 relative group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                 <Tag size={48} />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white text-diyar-dark px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2">
                     <Eye size={16} />
                     الصورة
                   </button>
                 </div>
               </div>
               <div className="p-4 flex-1 flex flex-col">
                 <div className="flex items-start justify-between mb-2">
                   <h3 className="font-bold text-diyar-dark line-clamp-2 leading-tight">{product.name}</h3>
                   <span className="font-bold text-diyar-brown shrink-0 mr-3">{product.price} ر.س</span>
                 </div>
                 <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                 
                 <div className="mt-auto space-y-3">
                   <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                     <span className="text-xs text-gray-500">التسويق بالعمولة</span>
                     {product.isAffiliate ? (
                        <span className="text-diyar-brown text-xs font-bold flex items-center gap-1"><Check size={12}/> مفعل ({product.commission})</span>
                     ) : (
                        <button className="text-xs text-gray-500 hover:text-diyar-brown underline decoration-dotted">تفعيل</button>
                     )}
                   </div>
                   
                   <div className="flex items-center gap-2 pt-1">
                     <div className="flex-1">
                       {product.stock > 0 ? (
                          <span className="text-green-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span>متوفر</span>
                       ) : (
                          <span className="text-red-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span>نفذت</span>
                       )}
                     </div>
                     <button onClick={() => setSelectedProduct(product)} className="p-2 text-gray-400 hover:text-diyar-brown hover:bg-amber-50 rounded-lg transition" title="عرض التفاصيل"><Eye size={18} /></button>
                     <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="تعديل"><Edit size={18} /></button>
                     <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="حذف"><Trash2 size={18} /></button>
                   </div>
                 </div>
               </div>
             </div>
          ))}
          {filteredProducts.length === 0 && (
             <div className="col-span-full text-center py-12 text-gray-500 bg-white rounded-2xl border border-dashed border-gray-200">لا يوجد منتجات تطابق بحثك</div>
          )}
        </div>
      )}

      {/* Add Product Modal Mockup */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[300] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-xl text-diyar-dark">إضافة منتج جديد</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:bg-gray-100 p-2 rounded-full transition">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
               <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-400 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                 <Upload size={24} className="mb-2" />
                 <span className="text-sm font-medium text-diyar-dark">اضغط لرفع صور المنتج</span>
                 <span className="text-xs">يدعم JPG, PNG (بحد أقصى 5 صور)</span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">اسم المنتج</label>
                   <input type="text" placeholder="مثال: أريكة استرخاء" className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-diyar-brown" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">القسم</label>
                   <select className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-diyar-brown appearance-none">
                     <option>الصالونات</option>
                     <option>غرف النوم</option>
                     <option>المكاتب</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">السعر (ر.س)</label>
                   <input type="number" placeholder="0.00" className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-diyar-brown" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-700">الكمية المتوفرة</label>
                   <input type="number" placeholder="0" className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-diyar-brown" />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700">الوصف</label>
                 <textarea rows={3} placeholder="اكتب وصفاً مفصلاً للمنتج..." className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-diyar-brown"></textarea>
               </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50 shrink-0">
               <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition">إلغاء</button>
               <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold bg-diyar-brown text-white hover:bg-[#A67B5B]/90 transition">حفظ المنتج</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
