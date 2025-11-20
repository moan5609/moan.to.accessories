import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg fade-in">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-brand-text tracking-[0.2em] mb-16">
          Moment & Another
        </h1>
        
        <div className="mb-16">
          <img 
            src="https://picsum.photos/id/42/1200/600" 
            alt="Studio Vibe" 
            className="w-full h-[300px] md:h-[400px] object-cover opacity-90 mb-12"
          />
          
          <p className="text-brand-text leading-loose font-light text-sm md:text-base mb-8 max-w-xl mx-auto">
            MO&AN 默安，源自於 Moment & Another。<br/>
            我們相信，生活是由無數個微小的瞬間組成的。
          </p>
          <p className="text-brand-muted leading-loose font-light text-sm md:text-base max-w-xl mx-auto">
            並不是只有盛大的節日才值得慶祝，<br/>
            早晨沖咖啡的香氣、午後灑在書頁上的陽光、<br/>
            或是下班後，抬頭看見月亮的瞬間。<br/><br/>
            飾品不該是沉重的負擔，<br/>
            而是當妳看見它時，會想起這些溫柔時刻的開關。
          </p>
        </div>

        <div className="border-t border-brand-muted/20 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div>
             <h3 className="font-serif text-xl text-brand-text mb-6 tracking-widest">TEAM</h3>
             <p className="text-brand-muted font-light leading-relaxed text-sm">
               我們是兩位熱愛生活的設計師。<br/>
               因為找不到適合日常配戴、既有質感又不張揚的飾品，<br/>
               於是決定自己動手尋找與製作。<br/>
               希望 MO&AN 能成為妳生活中的一抹恬淡風景。
             </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-brand-text mb-6 tracking-widest">CRAFTSMANSHIP</h3>
             <p className="text-brand-muted font-light leading-relaxed text-sm">
               選用親膚的 S925 純銀與厚鍍 18K 金。<br/>
               我們在意佩戴的舒適度，勝過視覺的衝擊力。<br/>
               每一個弧度，都經過反覆的斟酌，<br/>
               只為了在肌膚上呈現最自然的線條。
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;