// scripts/generate-colors-ja-ko.mjs
import fs from 'fs';
import path from 'path';

const colorsPath = path.resolve('src/content/colors.ts');
let content = fs.readFileSync(colorsPath, 'utf-8');

export const COLOR_META_JA_KO = {
  'white-screen': { jaName: '白い', koName: '하얀색', useJa: '画面のホコリ掃除、ドット抜けテスト、Zoom用照明、トレース台', useKo: '모니터 청소, 불량화소 테스트, 화상회의 조명 및 트레이싱' },
  'black-screen': { jaName: '黒い', koName: '검은색', useJa: 'OLEDディスプレイのテスト、バッテリー節約、睡眠と休息', useKo: 'OLED 디스플레이 테스트, 배터리 절약, 수면 및 불량화소 검출' },
  'blue-screen': { jaName: '青い', koName: '파란색', useJa: 'LCDサブピクセル検査、夜間アンビエント照明、リラックス', useKo: 'LCD 서브픽셀 검사, 야간 무드등 및 편안한 분위기 조성' },
  'green-screen': { jaName: '緑の', koName: '초록색', useJa: '動画配信や合成用クロマキー（グリーンバック）背景', useKo: '영상 제작 및 스트리밍을 위한 크로마키 합성 배경' },
  'red-screen': { jaName: '赤い', koName: '빨간색', useJa: '暗所視力（暗順応）の維持、天体観測、写真の暗室作業', useKo: '야간 암순응 유지, 천체 관측 및 사진 암실 작업' },
  'yellow-screen': { jaName: '黄色い', koName: '노란색', useJa: '高コントラストな読書灯や温かみのある間接照明', useKo: '고대비 독서 조명 및 따뜻한 실내 분위기 연출' },
  'orange-screen': { jaName: 'オレンジ', koName: '주황색', useJa: '夕日シミュレーションやブルーライトを抑えた体内時計ケア', useKo: '일몰 시뮬레이션 및 생체 리듬 보호를 위한 저자극 조명' },
  'pink-screen': { jaName: 'ピンク', koName: '핑크색', useJa: 'ポートレート撮影やメイク用の柔らかな美肌フェイスライト', useKo: '인물 사진 촬영 및 메이크업을 위한 화사한 피부톤 조명' },
  'purple-screen': { jaName: '紫の', koName: '보라색', useJa: '配信用のクリエイティブなムード照明やスタイリッシュな背景', useKo: '스트리밍을 위한 감각적인 분위기 조명 및 배경 연출' },
  'gold-screen': { jaName: 'ゴールド', koName: '골드', useJa: '肌を温かく照らすゴールデンアワー風の高級ライティング', useKo: '따뜻한 골든 아워 인물 사진 및 고급스러운 분위기 조명' },
  'light-blue-screen': { jaName: '水色', koName: '하늘색', useJa: '青空シミュレーションと午前中の集中力を高める爽やかな光', useKo: '맑은 하늘 시뮬레이션 및 아침 집중력을 높이는 상쾌한 조명' },
  'brown-screen': { jaName: '茶色', koName: '갈색', useJa: '反射を抑えた温かみのあるアースカラーのスタジオ背景', useKo: '눈부심이 적은 차분한 어스톤 배경 및 아늑한 스튜디오 무드' },
  'grey-screen': { jaName: 'グレー', koName: '회색', useJa: 'カメラのホワイトバランス調整と露出設定用18%標準グレー', useKo: '카메라 화이트 밸런스 보정 및 노출 측정을 위한 18% 표준 그레이' },
  'neon-screen': { jaName: 'ネオン', koName: '네온', useJa: 'ディスプレイの最大輝度チェックと高い視認性のシグナル', useKo: '패널 최대 밝기 테스트 및 고시인성 시각 신호' },
  'olive-screen': { jaName: 'オリーブ', koName: '올리브색', useJa: '眩しさを抑えた落ち着いたタクティカルグリーン照明', useKo: '자극이 적은 차분한 그린 톤의 전술적 조명' },
  'coral-screen': { jaName: 'コーラル', koName: '코랄', useJa: 'Webカメラで顔色を健康的に見せる温かい美顔ライト', useKo: '웹캠 화상회의에서 얼굴 생기를 더해주는 화사한 조명' },
  'navy-screen': { jaName: 'ネイビー', koName: '네이비', useJa: '夜間の作業に集中できる高コントラストで落ち着いた暗色背景', useKo: '야간 작업 시 눈 피로를 덜어주는 고대비 다크 배경' },
  'mint-screen': { jaName: 'ミント', koName: '민트색', useJa: '目の疲れを癒やしデスク周りを爽やかに照らすリフレッシュ光', useKo: '피로한 눈을 쉬게 하고 데스크를 상쾌하게 비추는 조명' },
  'aqua-screen': { jaName: 'アクア', koName: '아쿠아', useJa: '水面のきらめき効果と鮮やかなシアンブルーの演出光', useKo: '물결 반사 시뮬레이션 및 청량한 시안 블루 배경' },
  'teal-screen': { jaName: 'ティール', koName: '청록색', useJa: '映画のようなカラーグレーディングと洗練されたスタジオ背景', useKo: '시네마틱 색감 연출 및 감각적인 스튜디오 배경' },
  'cream-screen': { jaName: 'クリーム', koName: '크림색', useJa: '羊皮紙のような優しい光で目の疲れを抑える長時間の読書灯', useKo: '양피지처럼 부드러운 빛으로 눈 피로를 줄이는 독서 조명' },
  'beige-screen': { jaName: 'ベージュ', koName: '베이지색', useJa: 'ミニマルなデザインやモックアップに最適な温かみのあるニュートラル背景', useKo: '미니멀한 디자인과 프레젠테이션을 위한 따뜻한 뉴트럴 배경' },
  'lavender-screen': { jaName: 'ラベンダー', koName: '라벤더', useJa: '就寝前のリラックスと穏やかな入眠を促すナイトライト', useKo: '취침 전 긴장을 완화하고 편안한 수면을 돕는 은은한 조명' },
  'cyan-screen': { jaName: 'シアン', koName: '시안', useJa: 'エネルギッシュな高輝度ブルーグリーン光と鮮明なアクセント', useKo: '에너지 넘치는 밝은 청록색 빛과 역동적인 영상 배경' },
  'maroon-screen': { jaName: 'マルーン', koName: '마룬', useJa: '暗室作業や夜間の目の負担を最小限に抑える深い赤色光', useKo: '암실 작업 및 야간 시각 보호를 위한 깊은 붉은색 조명' },
  'violet-screen': { jaName: 'バイオレット', koName: '바이올렛', useJa: '鮮やかなネオンの雰囲気とクリエイティブな物撮り用ライティング', useKo: '선명한 네온 무드 및 창의적인 소품 사진 촬영 조명' },
};

if (!content.includes('ja: jaName')) {
  // 1. Add COLOR_META_JA_KO definition right above function buildColorCopy
  const metaCode = `export const COLOR_META_JA_KO: Record<string, { jaName: string; koName: string; useJa: string; useKo: string }> = ${JSON.stringify(COLOR_META_JA_KO, null, 2)};\n\n`;
  content = content.replace('function buildColorCopy(', `${metaCode}function buildColorCopy(`);

  // 2. Extract ja and ko variables in buildColorCopy
  content = content.replace(
    '  const primaryUseTr = metaPlTr.useTr;',
    `  const primaryUseTr = metaPlTr.useTr;\n  const metaJaKo = COLOR_META_JA_KO[colorId] || { jaName: enName, koName: enName, useJa: primaryUseEn, useKo: primaryUseEn };\n  const jaName = metaJaKo.jaName;\n  const koName = metaJaKo.koName;\n  const primaryUseJa = metaJaKo.useJa;\n  const primaryUseKo = metaJaKo.useKo;`
  );

  // 3. Update names object
  content = content.replace(
    /tr: trName,\n\s*\}/,
    `tr: trName,\n      ja: jaName,\n      ko: koName,\n    }`
  );

  // 4. Append ja and ko to content dictionary
  const jaKoCopyTemplates = `      ja: {
        title: \`\${jaName}画面 – 全画面\${jaName}背景＆ディスプレイツール\`,
        metaDescription: \`オンラインで使える全画面\${jaName}画面ツール。\${primaryUseJa}、モニターテスト、4K壁紙の保存に最適。\`,
        h1: \`\${jaName}画面（全画面表示ツール）\`,
        intro: \`モニターやタブレット、スマートフォン全体に鮮やかな\${jaName}画面（\${hex}）を最大輝度で表示します。\${primaryUseJa}、ピクセルチェック、集中できるシンプルな背景として、ブラウザ上でインストール不要ですぐに使えます。\`,
        useCasesTitle: \`\${jaName}画面の実用的な活用シーン\`,
        useCases: [
          {
            title: "ディスプレイの点検と視覚テスト",
            desc: \`画面全体を単色（\${rgb}）で表示することで、ドット抜けや輝点、バックライトの光漏れ、色ムラを瞬時に見つけることができます。\`,
          },
          {
            title: \`専用照明と\${primaryUseJa}\`,
            desc: \`お使いの画面を均一な面光源として活用し、チラつきのないソフトな光で写真撮影やWeb会議を明るく照らします。\`,
          },
          {
            title: "作業に集中できるミニマル背景",
            desc: \`デスクトップのアイコンやタスクバー、通知を隠し、視覚的なノイズのない落ち着いた作業環境を作ります。\`,
          },
          {
            title: "画面のホコリ・汚れのチェック",
            desc: \`均一な明るい背景を表示することで、表面の微細なホコリや指紋の汚れがはっきりと見え、安全にクリーニングできます。\`,
          },
        ],
        deepDiveHeadings: [
          {
            title: \`なぜオンラインの\${jaName}画面ツールが選ばれるのか？\`,
            paragraphs: [
              \`ダウンロードした静止画像やスクリーンセーバーには圧縮ノイズや意図しないグラデーションが含まれることがあります。当ツールはブラウザ内で32ビットsRGB色空間の純粋なカラーコードを生成するため、端から端まで完璧に均一です。\`,
              \`HTML5 Fullscreen APIとScreen Wake Lock APIに対応しており、作業中に画面が勝手に暗くなったりスリープに入る心配がありません。\`,
            ],
          },
          {
            title: "デスク環境における最適なライティング活用",
            paragraphs: [
              \`サブモニターに\${jaName}画面を表示しておくことで、部屋の明暗差を和らげ長時間のパソコン作業による目の疲れを軽減します。\`,
              \`スマートフォンやタブレットを簡易的な撮影用ライトボックスとして使い、小物のマクロ撮影などに活用することもできます。\`,
            ],
          },
          {
            title: "高解像度壁紙の無料ダウンロード",
            paragraphs: [
              \`オフラインでもこのカラーを使用したい場合は、下のダウンロードエリアから1080p、2K、4K、5K、8KのPNG、WEBP、JPG形式でロスレス保存できます。\`,
            ],
          },
        ],
        faqs: [
          {
            q: \`\${jaName}画面はどのような用途に使われますか？\`,
            a: \`\${primaryUseJa}、液晶モニターの点検、Webカメラ用補助光、シンプルなデスクトップ背景などに幅広く使われています。\`,
          },
          {
            q: \`全画面で表示するにはどうすればよいですか？\`,
            a: \`「全画面表示」ボタンをクリックするかプレビュー画面をタップしてください。終了するにはキーボードのESCキーを押します。\`,
          },
          {
            q: \`この画面の正確なカラーコードは何ですか？\`,
            a: \`カラーコードはHEX「\${hex}」、RGB値は「\${rgb}」です。\`,
          },
          {
            q: \`使用中に画面が勝手に消えることはありますか？\`,
            a: \`いいえ。ブラウザの画面スリープ防止機能（Wake Lock）が自動的に働くため、全画面表示中は画面が点灯し続けます。\`,
          },
          {
            q: \`4Kや8Kの壁紙として保存できますか？\`,
            a: \`はい！ページ内のダウンロード機能から、PNG、WEBP、JPG形式でお好きな解像度の単色画像を生成してダウンロードできます。\`,
          },
        ],
      },
      ko: {
        title: \`\${koName} 화면 – 전체화면 단색 배경 및 모니터 도구\`,
        metaDescription: \`온라인 순수 \${koName} 전체화면 도구입니다. \${primaryUseKo}, 모니터 점검 및 4K 배경화면 다운로드에 적합합니다.\`,
        h1: \`\${koName} 화면 (전체화면 도구)\`,
        intro: \`모니터, 태블릿, 스마트폰 전체에 순수한 \${koName} 화면(\${hex})을 최대 밝기로 띄워보세요. \${primaryUseKo}, 픽셀 테스트, 집중을 위한 깔끔한 배경 등 어떤 목적이든 별도 프로그램 설치 없이 브라우저에서 바로 사용할 수 있습니다.\`,
        useCasesTitle: \`\${koName} 화면의 주요 활용 사례\`,
        useCases: [
          {
            title: "디스플레이 정밀 검사 및 서브픽셀 확인",
            desc: \`화면 전체를 균일한 단색(\${rgb})으로 채워 불량화소, 빛샘 현상 및 패널 밝기 균일도를 쉽게 점검할 수 있습니다.\`,
          },
          {
            title: \`특수 조명 및 \${primaryUseKo}\`,
            desc: \`모니터를 부드럽고 균일한 면조명으로 활용하여 사진 촬영, 영상 통화 시 얼굴을 화사하게 비춥니다.\`,
          },
          {
            title: "방해요소 없는 미니멀 데스크 배경",
            desc: \`복잡한 바탕화면 아이콘과 작업표시줄을 가리고 깔끔한 화면을 유지하여 깊은 몰입과 집중을 돕습니다.\`,
          },
          {
            title: "모니터 표면 먼지 및 얼룩 청소",
            desc: \`균일하고 밝은 빛으로 화면 표면의 미세 먼지와 지문을 쉽게 발견하여 안전하게 닦아낼 수 있습니다.\`,
          },
        ],
        deepDiveHeadings: [
          {
            title: \`왜 온라인 \${koName} 화면 도구를 사용해야 할까요?\`,
            paragraphs: [
              \`인터넷에서 다운로드한 일반 이미지나 배경화면에는 압축 왜곡이나 그라데이션 노이즈가 포함되어 있을 수 있습니다. 본 도구는 브라우저 내부에서 32비트 sRGB 색공간으로 순수한 단색을 직접 렌더링하여 완벽한 균일성을 보장합니다.\`,
              \`HTML5 전체화면 모드와 화면 꺼짐 방지(Wake Lock) API가 적용되어 있어 사용 중 화면이 꺼지지 않고 계속 켜져 있습니다.\`,
            ],
          },
          {
            title: "업무 및 작업 공간에서의 조명 최적화",
            paragraphs: [
              \`서브 모니터에 \${koName} 화면을 띄워두면 어두운 방에서 눈의 피로를 유발하는 대비차를 줄여 눈을 편안하게 보호합니다.\`,
              \`스마트폰이나 태블릿을 휴대용 미니 조명으로 활용하여 소품이나 화장품 촬영 시 보조광으로 쓰기 좋습니다.\`,
            ],
          },
          {
            title: "초고화질 무손실 배경화면 다운로드",
            paragraphs: [
              \`오프라인에서도 이 색상을 사용하고 싶다면 하단 다운로드 영역에서 1080p, 2K, 4K, 5K, 8K 해상도의 PNG, WEBP, JPG 이미지를 바로 다운로드할 수 있습니다.\`,
            ],
          },
        ],
        faqs: [
          {
            q: \`\${koName} 화면은 주로 어디에 사용되나요?\`,
            a: \`\${primaryUseKo}, 모니터 불량화소 검사, 화상회의 조명 및 깔끔한 배경 화면으로 널리 사용됩니다.\`,
          },
          {
            q: \`전체화면으로 보려면 어떻게 하나요?\`,
            a: \`'전체화면' 버튼을 클릭하거나 미리보기 화면을 누르면 즉시 전체화면으로 전환됩니다. 종료하려면 키보드의 ESC 키를 누르세요.\`,
          },
          {
            q: \`이 화면의 정확한 색상 코드는 무엇인가요?\`,
            a: \`HEX 색상 코드는 \${hex}이며, RGB 값은 \${rgb}입니다.\`,
          },
          {
            q: \`사용 중에 화면이 절전 모드로 꺼지나요?\`,
            a: \`아닙니다. 화면 꺼짐 방지(Wake Lock) 기능이 지원 브라우저에서 자동으로 작동하여 화면이 계속 켜져 있습니다.\`,
          },
          {
            q: \`이 배경을 4K나 8K로 다운로드할 수 있나요?\`,
            a: \`네! 페이지 하단의 다운로드 옵션에서 원하는 해상도를 선택하여 고화질 이미지로 저장할 수 있습니다.\`,
          },
        ],
      },`;

  const targetTrClose = `          {
            q: \`Bu arka planı 4K veya 8K olarak indirebilir miyim?\`,
            a: \`Evet! İndirme bölümünden PNG, WEBP veya JPG formatında yüksek çözünürlükte kaydedebilirsiniz.\`,
          },
        ],
      },`;

  if (content.includes(targetTrClose)) {
    content = content.replace(targetTrClose, `${targetTrClose}\n${jaKoCopyTemplates}`);
    fs.writeFileSync(colorsPath, content, 'utf-8');
    console.log('✓ src/content/colors.ts updated with Japanese and Korean content templates');
  } else {
    console.error('Target tr close string not found in colors.ts');
  }
}
