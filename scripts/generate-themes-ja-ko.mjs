// scripts/generate-themes-ja-ko.mjs
import fs from 'fs';
import path from 'path';

const themesPath = path.resolve('src/content/themes.ts');
let content = fs.readFileSync(themesPath, 'utf-8');

export const THEME_META_JA_KO = {
  "sky-background": { jaName: "青空の背景", koName: "맑은 하늘 배경", moodJa: "爽やかな集中と青空のインスピレーション", moodKo: "상쾌한 몰입과 푸른 하늘의 영감" },
  "gradient-background": { jaName: "グラデーション背景", koName: "그라데이션 배경", moodJa: "洗練されたモダンな美意識とクリエイティブな発想", moodKo: "세련된 현대적 미감과 창의적 디자인 영감" },
  "space-background": { jaName: "宇宙の背景", koName: "우주 배경", moodJa: "夜間の深い集中と神秘的な宇宙の広がり", moodKo: "야간 집중과 깊은 우주의 몰입감" },
  "forest-background": { jaName: "森林の背景", koName: "숲속 배경", moodJa: "植物の癒やしとストレスを和らげる静寂", moodKo: "자연의 편안함과 스트레스 완화" },
  "fire-background": { jaName: "炎の背景", koName: "불꽃 배경", moodJa: "温かく活力をもたらす暖炉のようなぬくもり", moodKo: "따뜻하고 활력을 주는 아늑한 분위기" },
  "wood-background": { jaName: "木目の背景", koName: "원목 배경", moodJa: "温かみのあるアースカラーと落ち着いた空間", moodKo: "자연스러운 원목 톤과 차분한 스튜디오 무드" },
  "water-background": { jaName: "水面の背景", koName: "물결 배경", moodJa: "清らかな水の透明感と精神的な落ち着き", moodKo: "청량한 물의 투명함과 마음의 평온" },
  "paper-background": { jaName: "紙の背景", koName: "종이 질감 배경", moodJa: "反射のない羊皮紙のような快適な読書空間", moodKo: "눈부심 없는 양피지 독서 및 작업 환경" },
  "city-background": { jaName: "都市の背景", koName: "도시 배경", moodJa: "洗練された都会的な作業意欲とテクノロジーの美学", moodKo: "세련된 도시의 감성과 현대적인 업무 몰입" },
  "ocean-background": { jaName: "深海の背景", koName: "바다 배경", moodJa: "静かな海の底のような瞑想的ライティング", moodKo: "깊은 바다의 고요함과 명상적인 분위기" },
  "galaxy-background": { jaName: "銀河の背景", koName: "은하수 배경", moodJa: "星空を見上げるような天体への思いを馳せる夜", moodKo: "별빛 가득한 밤하늘의 낭만과 평온" },
  "sunset-background": { jaName: "夕焼けの背景", koName: "노을 배경", moodJa: "夕暮れ時の黄金色の光と一日の終わりのリラックス", moodKo: "황금빛 석양과 하루를 마무리하는 휴식" },
  "silver-background": { jaName: "シルバーの背景", koName: "실버 배경", moodJa: "スタイリッシュなメタリックミニマリズム", moodKo: "세련된 메탈릭 미니멀리즘과 모던 디자인" },
  "snow-background": { jaName: "雪景色の背景", koName: "설경 배경", moodJa: "凛とした冬の清涼感と澄んだ空気", moodKo: "깨끗한 겨울의 청량감과 맑은 분위기" },
  "carbon-fiber-background": { jaName: "カーボンファイバーの背景", koName: "카본 파이버 배경", moodJa: "ハイテクなモータースポーツ感とゲーミングの興奮", moodKo: "하이테크 모터스포츠 감성과 게이밍 무드" },
  "concrete-background": { jaName: "コンクリートの背景", koName: "콘크리트 배경", moodJa: "無機質なブルータリズム建築のモダンスタジオ感", moodKo: "모던 브루탈리즘 건축미와 세련된 스튜디오 스타일" }
};

if (!content.includes('nameJa')) {
  // 1. Add THEME_META_JA_KO definition right above function buildTheme
  const metaCode = `export const THEME_META_JA_KO: Record<string, { jaName: string; koName: string; moodJa: string; moodKo: string }> = ${JSON.stringify(THEME_META_JA_KO, null, 2)};\n\n`;
  content = content.replace('function buildTheme(', `${metaCode}function buildTheme(`);

  // 2. Extract ja and ko variables in buildTheme
  content = content.replace(
    '  const moodTr = metaPlTr.moodTr;',
    `  const moodTr = metaPlTr.moodTr;\n  const metaJaKo = THEME_META_JA_KO[id] || { jaName: names.en, koName: names.en, moodJa: moodEn, moodKo: moodEn };\n  const nameJa = names.ja || metaJaKo.jaName;\n  const nameKo = names.ko || metaJaKo.koName;\n  const moodJa = metaJaKo.moodJa;\n  const moodKo = metaJaKo.moodKo;`
  );

  // 3. Update names object
  content = content.replace(
    /tr: nameTr,\n\s*\}/,
    `tr: nameTr,\n      ja: nameJa,\n      ko: nameKo,\n    }`
  );

  // 4. Append ja and ko to content dictionary
  const jaKoThemeTemplates = `      ja: {
        title: \`\${nameJa} – 全画面CSSアンビエント背景＆スクリーンツール\`,
        metaDescription: \`軽量なCSSグラデーションで生成された\${nameJa.toLowerCase()}。\${moodJa}、Web会議、作業集中に最適。\`,
        h1: \`\${nameJa}（全画面CSSテーマ）\`,
        intro: \`重い画像ファイルを読み込むことなく、美しい\${nameJa.toLowerCase()}を画面いっぱいに表示します。CSSグラデーション技術により、0秒で遅延なく\${moodJa}の雰囲気を再現します。\`,
        featuresTitle: \`\${nameJa}テーマの特徴\`,
        features: [
          { title: "完全CSS＆画像ロードゼロ", desc: "ブラウザのCSSベクトル処理だけで描画。通信量を消費せず瞬時に表示されます。" },
          { title: \`\${moodJa}に最適な光\`, desc: "お使いのモニターやタブレットをお部屋の落ち着いたムードライトに変えます。" },
          { title: "4K・8Kでも一切ぼやけない", desc: "画像ではないため、どんな高解像度ディスプレイでも常に最高峰のシャープネスを保ちます。" },
          { title: "画面スリープ防止対応", desc: "Screen Wake Lockにより、全画面表示中に画面が消灯することはありません。" },
        ],
        faqs: [
          { q: \`\${nameJa.toLowerCase()}テーマはどのような用途に使えますか？\`, a: \`\${moodJa}、オンライン会議の背景照明、シンプルなデスクトップ演出などに活用できます。\`, },
          { q: "パソコンの動作が重くなりませんか？", a: "いいえ。軽量なCSS処理のため、CPUやGPUにほとんど負荷をかけません。" },
          { q: "マルチモニターで使えますか？", a: "はい。サブディスプレイで表示しておくことで、作業空間に統一感のある快適な明かりをプラスできます。" },
          { q: "壁紙としてダウンロードできますか？", a: "はい。ページ下部のダウンロード機能から4Kや8Kの画像として保存可能です。" },
          { q: "料金はかかりますか？", a: "完全無料でお使いいただけます。広告の邪魔もありません。" },
        ],
      },
      ko: {
        title: \`\${nameKo} – 순수 CSS 전체화면 무드 배경 및 디스플레이 도구\`,
        metaDescription: \`가벼운 CSS 그라데이션으로 생성된 감각적인 \${nameKo.toLowerCase()}입니다. \${moodKo}, 화상 회의 및 집중에 이상적입니다.\`,
        h1: \`\${nameKo} (전체화면 CSS 테마)\`,
        intro: \`무거운 이미지 파일 다운로드 없이 브라우저에서 아름다운 \${nameKo.toLowerCase()}을 화면 가득 느껴보세요. 순수 CSS 코드로 제작되어 트래픽 낭비 없이 \${moodKo}를 위한 빛을 즉시 연출합니다.\`,
        featuresTitle: \`\${nameKo} 테마의 주요 장점\`,
        features: [
          { title: "순수 CSS로 0초 로딩", desc: "수학적 CSS 그라데이션으로 구현되어 다운로드 시간 없이 즉시 렌더링됩니다." },
          { title: \`\${moodKo}에 완벽한 분위기\`, desc: "모니터나 태블릿을 작업 공간을 위한 감성적인 무드 조명으로 전환합니다." },
          { title: "4K 및 8K 완벽한 선명도", desc: "비트맵 이미지가 아니므로 어떤 대형 고해상도 디스플레이에서도 화질 저하가 없습니다." },
          { title: "화면 꺼짐 방지 자동 적용", desc: "화면 꺼짐 방지(Screen Wake Lock)가 작동하여 작업 중 화면이 꺼지지 않습니다." },
        ],
        faqs: [
          { q: \`\${nameKo.toLowerCase()} 테마는 어디에 쓰이나요?\`, a: \`\${moodKo}, 화상 회의 배경 보조광, 감각적인 데스크테리어 화면으로 널리 사용됩니다.\` },
          { q: "컴퓨터 속도가 느려지지 않나요?", a: "전혀 그렇지 않습니다. 가벼운 CSS 속성만 사용하여 시스템 리소스를 거의 차지하지 않습니다." },
          { q: "보조 모니터에서 사용할 수 있나요?", a: "네! 서브 모니터에 전체화면으로 띄워두면 방 안의 조도 균형을 맞추는 데 훌륭합니다." },
          { q: "배경화면으로 저장할 수 있나요?", a: "네, 하단의 다운로드 영역에서 4K, 8K 무손실 이미지로 바로 다운로드할 수 있습니다." },
          { q: "무료로 이용할 수 있나요?", a: "완전 무료이며 성가신 광고나 회원가입 요구가 없습니다." },
        ],
      },`;

  const targetTrThemeClose = `          { q: "Tamamen ücretsiz mi?", a: "Evet, %100 ücretsizdir ve reklam içermez." },
        ],
      },`;

  if (content.includes(targetTrThemeClose)) {
    content = content.replace(targetTrThemeClose, `${targetTrThemeClose}\n${jaKoThemeTemplates}`);
    fs.writeFileSync(themesPath, content, 'utf-8');
    console.log('✓ src/content/themes.ts updated with Japanese and Korean content templates');
  } else {
    console.error('Target tr close string not found in themes.ts');
  }
}
