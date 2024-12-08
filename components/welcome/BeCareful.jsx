export default function Home() {
  // Tips array with title and description
  const tips = [
    {
      title: 'Doğru Qiymət Müəyyənləşdirilməsi',
      description: 'İkinci əl avtomobil satarkən düzgün qiymət müəyyən etmək çox vacibdir. Avtomobilin vəziyyətini qiymətləndirin və bazarı araşdırın, rəqabətli bir qiymət təyin edin.',
    },
    {
      title: 'Yüksək Keyfiyyətli Şəkillər',
      description: 'Avtomobilin şəkillərini yüksək keyfiyyətli çəkin. Müştərilər, avtomobilin vəziyyətini yaxşı görməlidirlər ki, onlarda düzgün təsəvvür yaransın.',
    },
    {
      title: 'Aydın Məhsul Təsviri',
      description: 'Avtomobilin xüsusiyyətləri və vəziyyəti haqqında aydın və detallı məlumat verin. Avtomobilin hər hansı bir qüsurunu gizlətməyin, şəffaf olmaq müştəri güvəni yaratmağa kömək edər.',
    },
    {
      title: 'Yaxşı Müştəri Əlaqəsi',
      description: 'Potensial alıcılarla sürətli və mehriban şəkildə əlaqə qurun. Alıcıların suallarına vaxtında və doğru cavab vermək, satışın uğurlu olmasına kömək edər.',
    },
    {
      title: 'Satışdan Əvvəl Qarantiyanı və Geri Alım Şərtlərini Aydınlaşdırın',
      description: 'Satışdan əvvəl avtomobilin satışı ilə bağlı qarantiyanı və geri alım şərtlərini aydın şəkildə təqdim edin. Bu, müştəri güvənini artırır və satışı asanlaşdırır.',
    },
    {
      title: 'Sürətli və Etibarlı Nəqliyyat',
      description: 'Avtomobili alıcıya tez və təhlükəsiz şəkildə çatdırın. Sürətli və etibarlı nəqliyyat seçimi təklif edərək alıcının məmnuniyyətini təmin edin.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Satış və alış zamanı nüanslar  
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Loop through the tips array and render each card */}
          {tips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
