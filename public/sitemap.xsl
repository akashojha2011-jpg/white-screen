<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap – TheWhiteScreen.org</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #334155;
            background-color: #f8fafc;
            margin: 0;
            padding: 30px 20px;
          }
          .header {
            max-width: 1000px;
            margin: 0 auto 20px auto;
            background: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
          }
          h1 { font-size: 22px; margin: 0 0 8px 0; color: #0f172a; }
          p { margin: 0; color: #64748b; font-size: 14px; }
          .table-container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          table { width: 100%; border-collapse: collapse; text-align: left; }
          th { background: #f1f5f9; padding: 12px 16px; font-size: 13px; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0; }
          td { padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 13px; word-break: break-all; }
          tr:hover { background-color: #f8fafc; }
          a { color: #2563eb; text-decoration: none; font-weight: 500; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 6px; background: #e0f2fe; color: #0369a1; border-radius: 4px; font-size: 11px; font-weight: 600; margin-right: 4px; margin-bottom: 4px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>XML Sitemap</h1>
          <p>This is a dynamic XML sitemap generated for search engines (Google, Bing). Indexing <strong>TheWhiteScreen.org</strong>.</p>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Alternate Languages</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="/*[local-name()='urlset']/*[local-name()='url'] | /*[local-name()='sitemapindex']/*[local-name()='sitemap']">
                <tr>
                  <td>
                    <a href="{*[local-name()='loc']}"><xsl:value-of select="*[local-name()='loc']"/></a>
                  </td>
                  <td>
                    <xsl:for-each select="*[local-name()='link']">
                      <span class="badge"><xsl:value-of select="@hreflang"/></span>
                    </xsl:for-each>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </template>
</xsl:stylesheet>
