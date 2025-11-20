import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12 border-b border-brand-muted/10 pb-12 last:border-0">
    <h2 className="font-serif text-xl text-brand-text tracking-widest mb-6">{title}</h2>
    <div className="space-y-4 text-brand-muted font-light text-sm leading-loose">
      {children}
    </div>
  </div>
);

const FAQ: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg min-h-screen fade-in">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-center font-serif text-3xl text-brand-text tracking-[0.2em] mb-16">
          INFO
        </h1>

        <Section title="如何保養銀飾 Care">
          <p>
            1. 佩戴是最好的保養：人體油脂可使銀飾產生自然溫潤的光澤。<br/>
            2. 避免接觸化學物質：請避免佩戴飾品洗澡、泡溫泉或接觸香水、髮膠。<br/>
            3. 妥善收納：未佩戴時，請用拭銀布擦拭後，放入密封袋中隔絕空氣，防止氧化。<br/>
            4. 輕微氧化：若飾品變黑，可使用拭銀布輕輕擦拭即可恢復光澤。
          </p>
        </Section>

        <Section title="運送方式 Shipping">
          <p>
            目前提供以下運送方式：<br/>
            - 7-11 / 全家 超商取貨（運費 $60，滿 $1200 免運）<br/>
            - 郵局宅配（運費 $80，滿 $2000 免運）<br/><br/>
            現貨商品將於下單後 1-2 個工作天內寄出。<br/>
            預購商品需等待 7-14 個工作天（不含假日）。
          </p>
        </Section>

        <Section title="退換貨政策 Returns">
          <p>
            基於個人衛生原則，耳針式耳環屬貼身物品，除瑕疵外恕不接受退換貨。<br/>
            項鍊、手鍊、戒指等商品，若有尺寸不合或瑕疵問題，請於收到商品 7 日內聯繫客服辦理。<br/>
            退回商品須保持全新狀態及完整包裝。
          </p>
        </Section>

        <Section title="聯絡我們 Contact">
          <p>
            有任何問題，歡迎透過以下方式聯繫我們：<br/>
            Email: hello@moan-jewelry.com<br/>
            Instagram: @moan.jewelry (客服時間 10:00-19:00)
          </p>
        </Section>

      </div>
    </div>
  );
};

export default FAQ;