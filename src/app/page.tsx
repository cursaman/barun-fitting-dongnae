const services = [
  { number: "01", title: "클럽 피팅", text: "스윙과 플레이 스타일에 맞춰 헤드와 샤프트를 세심하게 조합합니다.", icon: "↗" },
  { number: "02", title: "클럽 수리·리샤프팅", text: "샤프트 교체와 수리부터 아이언 리샤프팅까지 꼼꼼하게 작업합니다.", icon: "⌁" },
  { number: "03", title: "그립 교체", text: "손 크기와 선호에 맞는 그립으로 교체해 편안한 스윙을 도와드립니다.", icon: "◎" }
];

const steps = ["상담과 목표 설정", "현재 클럽·스윙 측정", "시타와 조합 테스트", "결과 리포트 및 피팅"];

export default function Home() {
  return (
    <main className="fit-site">
      <header className="fit-nav">
        <a className="fit-brand" href="#home" aria-label="바른골프피팅센터 동래점 홈"><span className="brand-mark">B<span>·</span></span><span>바른골프피팅센터<small>DONGNAE · BUSAN</small></span></a>
        <nav aria-label="주요 메뉴"><a href="#services">피팅 서비스</a><a href="#process">피팅 프로세스</a><a href="#studio">센터 소개</a><a href="#visit">오시는 길</a></nav>
        <a className="nav-book" href="#visit">상담 예약 <span>↗</span></a>
      </header>

      <section className="fit-hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="fit-eyebrow"><span /> YOUR SWING. YOUR FIT.</p>
          <h1>좋은 스윙은<br />좋은 <em>핏</em>에서 시작됩니다.</h1>
          <p className="hero-lead">클럽 피팅부터 수리와 그립 교체까지.<br />사직야구장 앞 바른골프피팅 동래점에서 상담하세요.</p>
          <div className="hero-links"><a href="tel:050713905980" className="fit-button">전화 상담 예약 <span>↗</span></a><a href="#services" className="text-link">서비스 둘러보기 <span>↓</span></a></div>
        </div>
        <div className="hero-caption"><span>01 / 03</span><span>FIT YOUR GAME</span><span>DONGNAE · BUSAN</span></div>
        <div className="hero-side-note">PRECISION FITTING <span>—</span> BUILT AROUND YOU</div>
      </section>

      <section className="fit-intro" id="studio">
        <div className="intro-label"><span>ABOUT GREENPOINT</span><span>01 — 04</span></div>
        <div className="intro-copy"><h2>클럽이 바뀌면<br />골프가 <em>달라집니다.</em></h2><div><p>바른골프피팅 동래점은 클럽 맞춤 제작과 리샤프팅, 수리, 그립 교체를 전문으로 합니다. 내 스윙과 플레이에 맞는 클럽을 상담해 보세요.</p><a href="#process" className="under-link">우리의 피팅 방식 <span>↗</span></a></div></div>
        <div className="intro-stats"><div><strong>1:1</strong><span>골퍼별 맞춤 세션</span></div><div><strong>DATA</strong><span>측정에 기반한 피팅</span></div><div><strong>ALL LEVELS</strong><span>초보부터 투어 골퍼까지</span></div></div>
      </section>

      <section className="fit-services" id="services">
        <div className="section-top"><div><p className="fit-eyebrow dark">WHAT WE DO</p><h2>당신의 골프를 위한<br /><em>정밀한 솔루션.</em></h2></div><p>작은 차이까지 읽어내는 세 가지 피팅 서비스로<br />더 편하고 자신 있는 플레이를 만듭니다.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-meta"><span>{service.number} / 03</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#visit" aria-label={`${service.title} 상담 예약`}>상담하기 <span>↗</span></a></article>)}</div>
      </section>

      <section className="fit-process" id="process"><div className="process-photo" /><div className="process-copy"><p className="fit-eyebrow"><span /> THE FITTING JOURNEY</p><h2>피팅의 모든 순간,<br />당신과 <em>함께</em>.</h2><p className="process-lead">처음 방문부터 최종 시타까지, 프로 피터가 한 분 한 분의 플레이 스타일에 집중합니다.</p><ol>{steps.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}<b>↗</b></li>)}</ol><a href="#visit" className="fit-button outline">피팅 과정 문의 <span>↗</span></a></div></section>

      <section className="fit-quote"><span className="quote-mark">“</span><p>더 멀리보다 중요한 건,<br />내가 원하는 곳으로 보내는 것.</p><span className="quote-caption">FIND YOUR FEEL. TRUST YOUR NUMBERS.</span></section>

      <section className="fit-visit" id="visit"><div className="visit-heading"><p className="fit-eyebrow dark">COME FIND YOUR FIT</p><h2>당신의 다음 라운드,<br /><em>여기서 시작하세요.</em></h2><p>방문 전 예약해 주시면 여유로운 상담과 시타가 가능합니다.</p><a className="fit-button dark-button" href="tel:050713905980">0507-1390-5980 <span>↗</span></a></div><div className="visit-card"><div className="map-placeholder"><span>B</span><small>SAJIK · DONGNAE</small></div><div className="visit-info"><div><span>ADDRESS</span><strong>부산광역시 동래구 사직북로 4</strong><small>삼정자이언츠파크 2층 210호</small></div><div><span>HOURS</span><strong>평일 11:00–20:00 · 주말 11:00–18:00</strong><small>수요일 휴무 · 평일 19시 이후 예약 필수</small></div><div><span>PARKING</span><strong>지하 2층·3층 무료 주차</strong></div><a href="https://naver.me/FuzU2m0e" target="_blank" rel="noreferrer">네이버 지도에서 위치 보기 <span>↗</span></a></div></div></section>

      <footer className="fit-footer"><a className="fit-brand" href="#home"><span className="brand-mark">B<span>·</span></span><span>바른골프피팅센터<small>DONGNAE · BUSAN</small></span></a><span>정확한 피팅, 더 즐거운 골프.</span><small>© 2026 바른골프피팅센터 동래점</small></footer>
    </main>
  );
}
