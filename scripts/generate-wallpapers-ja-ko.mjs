// scripts/generate-wallpapers-ja-ko.mjs
import fs from 'fs';
import path from 'path';

const wallpapersPath = path.resolve('src/content/wallpapers.ts');
let content = fs.readFileSync(wallpapersPath, 'utf-8');

export const WALLPAPER_META_JA_KO = {
  "white-wallpaper": { jaName: "白の壁紙 HD", koName: "하얀색 배경화면 HD" },
  "white-wallpaper-4k": { jaName: "白の壁紙 4K Ultra HD", koName: "하얀색 배경화면 4K Ultra HD" },
  "white-wallpaper-8k": { jaName: "白の壁紙 8K Ultra HD", koName: "하얀색 배경화면 8K Ultra HD" },
  "white-background-for-iphone": { jaName: "iPhone用 白い背景", koName: "아이폰용 하얀 배경화면" },
  "white-wallpaper-for-desktop": { jaName: "PCデスクトップ用 白の壁紙", koName: "데스크톱 PC용 하얀 배경화면" },
  "black-wallpaper": { jaName: "黒の壁紙 HD", koName: "검은색 배경화면 HD" },
  "black-wallpaper-4k": { jaName: "黒の壁紙 4K Ultra HD", koName: "검은색 배경화면 4K Ultra HD" },
  "blue-wallpaper": { jaName: "青の壁紙 4K", koName: "파란색 배경화면 4K" },
  "green-wallpaper": { jaName: "緑の壁紙 4K", koName: "초록색 배경화면 4K" },
  "red-wallpaper": { jaName: "赤の壁紙 4K", koName: "빨간색 배경화면 4K" }
};

if (!content.includes('jaName')) {
  // 1. Add WALLPAPER_META_JA_KO definition right above function buildWallpaper
  const metaCode = `export const WALLPAPER_META_JA_KO: Record<string, { jaName: string; koName: string }> = ${JSON.stringify(WALLPAPER_META_JA_KO, null, 2)};\n\n`;
  content = content.replace('function buildWallpaper(', `${metaCode}function buildWallpaper(`);

  // 2. Extract ja and ko variables in buildWallpaper
  content = content.replace(
    '  const trName = names.tr || metaPlTr.trName;',
    `  const trName = names.tr || metaPlTr.trName;\n  const metaJaKo = WALLPAPER_META_JA_KO[id] || { jaName: names.en, koName: names.en };\n  const jaName = names.ja || metaJaKo.jaName;\n  const koName = names.ko || metaJaKo.koName;`
  );

  // 3. Update names object
  content = content.replace(
    /tr: trName,\n\s*\}/,
    `tr: trName,\n      ja: jaName,\n      ko: koName,\n    }`
  );

  // 4. Append ja and ko to content dictionary
  const jaKoWpTemplates = `      ja: {
        title: \`\${jaName} – 高解像度・無圧縮壁紙の無料ダウンロード\`,
        metaDescription: \`純粋な\${jaName.toLowerCase()}をPNG、JPG、WEBP形式で無料ダウンロード。PC、iPhone、iPad、4Kモニター用の超高解像度壁紙。\`,
        h1: \`\${jaName}（ロスレス壁紙ダウンロード）\`,
        intro: \`ブラウザ上で即座に高画質\${jaName.toLowerCase()}を生成してダウンロードできます。HTML5 Canvasにより完全なロスレスsRGB品質でレンダリングされ、画質の劣化や不要な透かしロゴはありません。\`,
        featuresTitle: "仕様とエクスポート機能",
        features: [
          { title: "選べる3つの保存形式", desc: "最高品質で完全無圧縮のPNG、軽量なWEBP、汎用性の高い標準JPEGから選択できます。" },
          { title: \`\${resLabel}に最適化された精細さ\`, desc: "最新ディスプレイのピクセル比率に合わせて生成されるため、ぼやけのないシャープな表示が可能です。" },
          { title: "広告や登録一切不要", desc: "会員登録やアプリのインストール不要で、今すぐ完全無料で保存できます。" },
          { title: "スマホ用とPC用の両方に対応", desc: "16:9のワイドモニター、9:16のスマホ画面、正方形アイコンサイズまで網羅。" },
        ],
        faqs: [
          { q: \`この\${jaName.toLowerCase()}をダウンロードするにはどうすればよいですか？\`, a: "下部のダウンロードパネルで希望のファイル形式と解像度を選択し、「壁紙をダウンロード」をクリックしてください。" },
          { q: "画像に圧縮による劣化はありませんか？", a: "はい。PNG形式のエクスポートはブラウザのCanvasメモリから直接無圧縮で書き出されるため、100%ロスレス品質です。" },
          { q: "商用利用は可能ですか？", a: "はい。生成された単色壁紙はすべてパブリックドメイン（CC0）扱いとなり、個人・商用を問わず自由にご利用いただけます。" },
          { q: "パソコンのデスクトップにはどの形式がおすすめですか？", a: "PNG形式が最もノイズのない純粋な色合いを表示できるため推奨されます。" },
          { q: "iPhoneやAndroidスマホにも対応していますか？", a: "はい。「スマートフォン縦画面 (1080 × 1920)」を選択すれば、縦向きの画面にぴったり合います。" },
        ],
      },
      ko: {
        title: \`\${koName} – 초고화질 무손실 배경화면 무료 다운로드\`,
        metaDescription: \`순수한 \${koName.toLowerCase()}을 PNG, JPG, WEBP 형식으로 다운로드하세요. PC, 스마트폰, 4K 모니터를 위한 무손실 초고해상도 배경 이미지.\`,
        h1: \`\${koName} (무손실 배경화면 다운로드)\`,
        intro: \`브라우저에서 직접 깨끗한 \${koName.toLowerCase()} 이미지를 생성하고 다운로드하세요. HTML5 캔버스를 통해 100% 무손실 sRGB 화질로 로컬에서 렌더링되며 워터마크나 압축 노이즈가 전혀 없습니다.\`,
        featuresTitle: "기술 사양 및 다운로드 기능",
        features: [
          { title: "다양한 파일 형식 지원", desc: "무손실 최고 화질의 PNG, 가벼운 최신 WEBP, 호환성 높은 표준 JPEG를 지원합니다." },
          { title: \`\${resLabel} 디스플레이에 완벽한 해상도\`, desc: "모던 모니터 규격에 맞춰 픽셀 단위로 생성되어 확대 시 흐려짐이 없습니다." },
          { title: "회원가입 없는 100% 무료", desc: "결제나 로그인, 별도 프로그램 설치 없이 즉시 무제한 다운로드할 수 있습니다." },
          { title: "데스크톱 및 모바일 전 규격", desc: "16:9 와이드 모니터부터 9:16 스마트폰 잠금화면, 정사각형 규격까지 모두 제공합니다." },
        ],
        faqs: [
          { q: \`이 \${koName.toLowerCase()}을 어떻게 다운로드하나요?\`, a: "하단 다운로드 패널에서 원하는 형식과 해상도를 선택한 뒤 '배경화면 다운로드' 버튼을 누르면 즉시 저장됩니다." },
          { q: "이미지가 실제로 무손실 품질인가요?", a: "네, PNG 형식은 브라우저 캔버스 메모리에서 직접 무압축으로 출력되어 화질 손실이 전혀 없습니다." },
          { q: "상업적 용도로 사용해도 되나요?", a: "네, 생성된 모든 단색 배경화면은 퍼블릭 도메인으로 개인 및 상업적 목적 모두 자유롭게 이용 가능합니다." },
          { q: "컴퓨터 모니터용으로는 어떤 형식이 가장 좋나요?", a: "PNG 형식을 선택하시면 왜곡 없이 가장 선명한 단색을 표현할 수 있습니다." },
          { q: "아이폰과 안드로이드 기기에서도 잘 맞나요?", a: "네, '모바일 스마트폰 (1080 × 1920)' 옵션을 선택하시면 세로 화면에 완벽하게 맞춤 다운로드됩니다." },
        ],
      },`;

  const targetTrWpClose = `          { q: "iPhone ve Android cihazlarda çalışır mı?", a: "Evet, dikey ekrana tam oturması için 'Mobil Akıllı Telefon (1080 × 1920)' seçeneğini kullanın." },
        ],
      },`;

  if (content.includes(targetTrWpClose)) {
    content = content.replace(targetTrWpClose, `${targetTrWpClose}\n${jaKoWpTemplates}`);
    fs.writeFileSync(wallpapersPath, content, 'utf-8');
    console.log('✓ src/content/wallpapers.ts updated with Japanese and Korean content templates');
  } else {
    console.error('Target tr close string not found in wallpapers.ts');
  }
}
